/**
 * Solitaire - Klondike
 * Core Logic and State Management
 */

const SUITS = [
    { name: 'hearts', symbol: '♥', color: 'red' },
    { name: 'diamonds', symbol: '♦', color: 'red' },
    { name: 'clubs', symbol: '♣', color: 'black' },
    { name: 'spades', symbol: '♠', color: 'black' }
];

const VALUES = [
    { name: 'A', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'J', value: 11 },
    { name: 'Q', value: 12 },
    { name: 'K', value: 13 }
];

class Game {
    constructor() {
        this.deck = [];
        this.stock = [];
        this.waste = [];
        this.foundations = [[], [], [], []];
        this.tableau = [[], [], [], [], [], [], []];
        this.moves = 0;
        this.score = 5000;
        this.highScore = 0;
        this.startTime = null;
        this.timerInterval = null;

        // Drag & Double-tap state
        this.dragData = null;
        this.lastPointerDownTime = 0;
        this.lastPointerDownCard = null;

        this.init();
    }

    init() {
        this.loadHighScore();
        this.createDeck();
        this.shuffleDeck();
        this.deal();
        this.render();
        this.setupEventListeners();
    }

    loadHighScore() {
        this.highScore = parseInt(localStorage.getItem('solitaireHighScore')) || 0;
        document.getElementById('high-score').textContent = this.highScore;
    }

    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('solitaireHighScore', this.highScore);
            document.getElementById('high-score').textContent = this.highScore;
        }
    }

    createDeck() {
        this.deck = [];
        SUITS.forEach(suit => {
            VALUES.forEach(val => {
                this.deck.push({
                    suit: suit.name,
                    symbol: suit.symbol,
                    color: suit.color,
                    name: val.name,
                    value: val.value,
                    faceUp: false,
                    id: `${val.name}-${suit.name}`
                });
            });
        });
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    deal() {
        // Reset state
        this.stock = [];
        this.waste = [];
        this.foundations = [[], [], [], []];
        this.tableau = [[], [], [], [], [], [], []];
        this.moves = 0;
        this.startTime = Date.now();
        this.updateStats();

        // Deal tableau
        for (let i = 0; i < 7; i++) {
            for (let j = i; j < 7; j++) {
                const card = this.deck.pop();
                if (i === j) card.faceUp = true;
                this.tableau[j].push(card);
            }
        }

        // Remaining cards go to stock
        this.stock = this.deck;
        this.deck = [];
    }

    // --- Interaction Logic ---

    drawFromStock() {
        if (this.stock.length === 0) {
            // Recycle waste
            this.stock = this.waste.reverse().map(c => ({ ...c, faceUp: false }));
            this.waste = [];
        } else {
            const card = this.stock.pop();
            card.faceUp = true;
            this.waste.push(card);
        }
        this.moves++;
        this.updateStats();
        this.render();
    }

    canMoveToFoundation(card, foundationIndex) {
        const foundation = this.foundations[foundationIndex];
        if (foundation.length === 0) {
            return card.value === 1; // Must be Ace
        }
        const topCard = foundation[foundation.length - 1];
        return card.suit === topCard.suit && card.value === topCard.value + 1;
    }

    canMoveToTableau(card, tableauIndex) {
        const pile = this.tableau[tableauIndex];
        if (pile.length === 0) {
            return card.value === 13; // Must be King
        }
        const topCard = pile[pile.length - 1];
        return card.color !== topCard.color && card.value === topCard.value - 1;
    }

    moveCard(source, target) {
        const sourcePile = this.getPile(source.type, source.index);
        const cardsToMove = sourcePile.splice(source.cardIndex);
        const targetPile = this.getPile(target.type, target.index);

        targetPile.push(...cardsToMove);

        // Flip top card of source if it's tableau
        if (source.type === 'tableau' && sourcePile.length > 0) {
            sourcePile[sourcePile.length - 1].faceUp = true;
        }

        this.moves++;
        this.updateStats();
        this.checkWin();
        this.render();
    }

    getPile(type, index) {
        if (type === 'tableau') return this.tableau[index];
        if (type === 'foundation') return this.foundations[index];
        if (type === 'waste') return this.waste;
        if (type === 'stock') return this.stock;
    }

    autoMoveToFoundation(card, source) {
        // Rules: Only the top card of a pile can move to a foundation
        const sourcePile = this.getPile(source.type, source.index);
        if (source.cardIndex !== sourcePile.length - 1) return false;

        for (let i = 0; i < 4; i++) {
            if (this.canMoveToFoundation(card, i)) {
                console.log(`Auto-moving ${card.id} to foundation ${i}`);
                this.moveCard(source, { type: 'foundation', index: i });
                return true;
            }
        }
        return false;
    }

    // --- Pointer Events Handlers ---

    onPointerDown(e, card, source) {
        if (!card.faceUp || this.dragData) return;

        // Custom double-tap detection
        const now = Date.now();
        if (this.lastPointerDownTime && (now - this.lastPointerDownTime < 300) && this.lastPointerDownCard === card.id) {
            this.autoMoveToFoundation(card, source);
            this.lastPointerDownTime = 0;
            this.dragData = null; // Ensure no drag starts
            e.stopPropagation();
            return;
        }
        this.lastPointerDownTime = now;
        this.lastPointerDownCard = card.id;

        this.dragData = {
            card,
            source,
            el: e.currentTarget,
            startX: e.clientX,
            startY: e.clientY,
            started: false,
            offsetX: 0,
            offsetY: 0
        };

        e.stopPropagation();
    }

    onPointerMove(e) {
        if (!this.dragData) return;

        if (!this.dragData.started) {
            const dist = Math.hypot(e.clientX - this.dragData.startX, e.clientY - this.dragData.startY);
            if (dist > 5) {
                this.startDrag(e);
            }
            return;
        }

        this.dragData.elements.forEach((el, i) => {
            this.updateDragPosition(e, el, i);
        });
    }

    startDrag(e) {
        const { card, source, el, startX, startY } = this.dragData;
        const rect = el.getBoundingClientRect();

        const sourcePile = this.getPile(source.type, source.index);
        const cardsInStack = sourcePile.slice(source.cardIndex);
        const cardElements = [];

        let currentEl = el;
        for (let i = 0; i < cardsInStack.length; i++) {
            if (currentEl) {
                cardElements.push(currentEl);
                currentEl.classList.add('dragging');
                currentEl = currentEl.nextElementSibling;
            }
        }

        this.dragData.started = true;
        this.dragData.elements = cardElements;
        this.dragData.offsetX = startX - rect.left;
        this.dragData.offsetY = startY - rect.top;

        cardElements.forEach((el, i) => {
            el.style.position = 'fixed';
            el.style.zIndex = 1000 + i;
            this.updateDragPosition(e, el, i);
        });
    }

    updateDragPosition(e, el, index) {
        const overlap = index * (window.innerWidth < 800 ? 15 : 25);
        el.style.left = `${e.clientX - this.dragData.offsetX}px`;
        el.style.top = `${e.clientY - this.dragData.offsetY + overlap}px`;
        el.style.margin = '0';
    }

    onPointerUp(e) {
        if (!this.dragData) return;

        if (!this.dragData.started) {
            this.dragData = null;
            return;
        }

        const { source, card, elements } = this.dragData;

        // Find drop target (pointer-events: none on .dragging allows this)
        const targetEl = document.elementFromPoint(e.clientX, e.clientY);

        // Clean up UI state
        elements.forEach(el => el.classList.remove('dragging'));

        let dropTarget = null;
        if (targetEl) {
            const pileEl = targetEl.closest('.pile');
            if (pileEl) {
                if (pileEl.classList.contains('foundation')) {
                    const index = parseInt(pileEl.id.split('-')[1]);
                    // Only allow single card to foundation
                    if (source.cardIndex === this.getPile(source.type, source.index).length - 1 && this.canMoveToFoundation(card, index)) {
                        dropTarget = { type: 'foundation', index };
                    }
                } else if (pileEl.classList.contains('tableau')) {
                    const index = parseInt(pileEl.id.split('-')[1]);
                    if (this.canMoveToTableau(card, index)) {
                        dropTarget = { type: 'tableau', index };
                    }
                }
            }
        }

        if (dropTarget) {
            this.moveCard(source, dropTarget);
        } else {
            // Snap back is handled by render() which happens if moveCard isn't called
            this.render();
        }

        this.dragData = null;
    }

    // --- Rendering Helpers ---

    createCardElement(card, source) {
        const el = document.createElement('div');
        el.className = `card ${card.color} ${card.faceUp ? '' : 'face-down'}`;
        el.id = card.id;

        if (card.faceUp) {
            el.innerHTML = `
                <div class="card-top">
                    <span class="card-value">${card.name}</span>
                    <span class="card-suit">${card.symbol}</span>
                </div>
                <div class="card-center">${card.symbol}</div>
                <div class="card-bottom">
                    <span class="card-value">${card.name}</span>
                    <span class="card-suit">${card.symbol}</span>
                </div>
            `;

            el.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                this.autoMoveToFoundation(card, source);
            });

            el.addEventListener('pointerdown', (e) => this.onPointerDown(e, card, source));
        }
        return el;
    }

    render() {
        // Render Stock
        const stockEl = document.getElementById('stock');
        stockEl.innerHTML = '';
        if (this.stock.length > 0) {
            const card = this.createCardElement({ faceUp: false });
            stockEl.appendChild(card);
        }

        // Render Waste
        const wasteEl = document.getElementById('waste');
        wasteEl.innerHTML = '';
        if (this.waste.length > 0) {
            const cardData = this.waste[this.waste.length - 1];
            const card = this.createCardElement(cardData, { type: 'waste', cardIndex: this.waste.length - 1 });
            wasteEl.appendChild(card);
        }

        // Render Foundations
        this.foundations.forEach((pile, i) => {
            const el = document.getElementById(`foundation-${i}`);
            el.innerHTML = '';
            if (pile.length > 0) {
                const cardData = pile[pile.length - 1];
                const card = this.createCardElement(cardData, { type: 'foundation', index: i, cardIndex: pile.length - 1 });
                el.appendChild(card);
            }
        });

        // Render Tableau
        this.tableau.forEach((pile, i) => {
            const el = document.getElementById(`tableau-${i}`);
            el.innerHTML = '';
            pile.forEach((cardData, cardIndex) => {
                const cardEl = this.createCardElement(cardData, { type: 'tableau', index: i, cardIndex });
                el.appendChild(cardEl);
            });
        });
    }

    updateStats() {
        document.getElementById('move-count').textContent = this.moves;

        const elapsedSeconds = this.startTime ? Math.floor((Date.now() - this.startTime) / 1000) : 0;
        this.score = Math.max(0, 5000 - (this.moves * 10) - elapsedSeconds);
        document.getElementById('current-score').textContent = this.score;

        if (!this.timerInterval && this.startTime) {
            this.timerInterval = setInterval(() => {
                const seconds = Math.floor((Date.now() - this.startTime) / 1000);
                const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
                const secs = (seconds % 60).toString().padStart(2, '0');
                document.getElementById('timer').textContent = `${mins}:${secs}`;
                this.score = Math.max(0, 5000 - (this.moves * 10) - seconds);
                document.getElementById('current-score').textContent = this.score;
            }, 1000);
        }
    }

    checkWin() {
        const totalCardsInFoundations = this.foundations.reduce((acc, pile) => acc + pile.length, 0);
        if (totalCardsInFoundations === 52) {
            this.onWin();
        }
    }

    onWin() {
        clearInterval(this.timerInterval);
        this.saveHighScore();
        document.getElementById('win-overlay').classList.remove('hidden');
        document.getElementById('final-time').textContent = document.getElementById('timer').textContent;
        document.getElementById('final-moves').textContent = this.moves;
        document.getElementById('final-score').textContent = this.score;
    }

    setupEventListeners() {
        document.getElementById('new-game').addEventListener('click', () => {
            clearInterval(this.timerInterval);
            new Game();
        });

        document.getElementById('play-again').addEventListener('click', () => {
            document.getElementById('win-overlay').classList.add('hidden');
            new Game();
        });

        document.getElementById('stock').addEventListener('click', () => {
            this.drawFromStock();
        });

        // Global pointer events for dragging
        window.addEventListener('pointermove', (e) => this.onPointerMove(e));
        window.addEventListener('pointerup', (e) => this.onPointerUp(e));
    }
}

// Start Game
window.onload = () => {
    window.game = new Game();
};
