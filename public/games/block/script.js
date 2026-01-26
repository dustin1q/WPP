/**
 * Neo Blocks - Core Game Logic
 */

const GRID_SIZE = 10;
const SHAPES = [
    { name: 'dot', cells: [[0, 0]], color: 'var(--color-1)' },
    { name: 'line2', cells: [[0, 0], [0, 1]], color: 'var(--color-2)' },
    { name: 'line3', cells: [[0, 0], [0, 1], [0, 2]], color: 'var(--color-3)' },
    { name: 'line4', cells: [[0, 0], [0, 1], [0, 2], [0, 3]], color: 'var(--color-4)' },
    { name: 'vline2', cells: [[0, 0], [1, 0]], color: 'var(--color-5)' },
    { name: 'vline3', cells: [[0, 0], [1, 0], [2, 0]], color: 'var(--color-6)' },
    { name: 'vline4', cells: [[0, 0], [1, 0], [2, 0], [3, 0]], color: 'var(--color-7)' },
    { name: 'square', cells: [[0, 0], [0, 1], [1, 0], [1, 1]], color: 'var(--color-1)' },
    { name: 'l-shape', cells: [[0, 0], [1, 0], [2, 0], [2, 1]], color: 'var(--color-2)' },
    { name: 'j-shape', cells: [[0, 1], [1, 1], [2, 1], [2, 0]], color: 'var(--color-3)' },
    { name: 't-shape', cells: [[0, 1], [1, 0], [1, 1], [1, 2]], color: 'var(--color-4)' },
    { name: 'z-shape', cells: [[0, 0], [0, 1], [1, 1], [1, 2]], color: 'var(--color-5)' },
    { name: 's-shape', cells: [[0, 1], [0, 2], [1, 0], [1, 1]], color: 'var(--color-6)' },
    { name: 'big-square', cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]], color: 'var(--color-7)' }
];

class Game {
    constructor() {
        this.grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(null));
        this.pool = [null, null, null];
        this.score = 0;
        this.highScore = 0;
        this.hasStarted = false;
        this.dragData = null;

        this.init();
    }

    init() {
        this.loadHighScore();
        this.createGrid();
        this.measureGrid();
        this.setupEventListeners();
        this.render();
    }

    measureGrid() {
        const gridEl = document.getElementById('grid');
        const firstCell = gridEl.querySelector('.cell');
        const style = getComputedStyle(gridEl);

        this.cellSize = firstCell.offsetWidth;
        this.cellGap = parseFloat(style.gap) || 2;
        this.padding = parseFloat(style.padding) || this.cellGap;
    }

    loadHighScore() {
        this.highScore = parseInt(localStorage.getItem('blockPuzzleHighScore')) || 0;
        document.getElementById('high-score').textContent = this.highScore;
    }

    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('blockPuzzleHighScore', this.highScore);
            document.getElementById('high-score').textContent = this.highScore;
        }
    }

    createGrid() {
        const gridEl = document.getElementById('grid');
        gridEl.innerHTML = '';
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = r;
                cell.dataset.col = c;
                gridEl.appendChild(cell);
            }
        }
    }

    restart() {
        this.grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(null));
        this.score = 0;
        this.pool = [null, null, null];
        this.hasStarted = true;
        this.updateStats();
        this.refillPool();
        this.render();
        document.getElementById('game-over-overlay').classList.add('hidden');
    }

    updateStats() {
        document.getElementById('current-score').textContent = this.score;
    }

    refillPool() {
        for (let i = 0; i < 3; i++) {
            const randomShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
            this.pool[i] = { ...randomShape, id: `shape-${Date.now()}-${i}` };
        }
        this.renderPool();
    }

    renderPool() {
        for (let i = 0; i < 3; i++) {
            const slot = document.getElementById(`slot-${i}`);
            slot.innerHTML = '';
            if (this.pool[i]) {
                const shapeEl = this.createShapeElement(this.pool[i], i);
                slot.appendChild(shapeEl);
            }
        }
    }

    createShapeElement(shape, poolIndex) {
        const el = document.createElement('div');
        el.className = 'block';
        el.dataset.poolIndex = poolIndex;

        // Calculate dimensions
        const rows = Math.max(...shape.cells.map(c => c[0])) + 1;
        const cols = Math.max(...shape.cells.map(c => c[1])) + 1;

        el.style.gridTemplateRows = `repeat(${rows}, var(--cell-size))`;
        el.style.gridTemplateColumns = `repeat(${cols}, var(--cell-size))`;

        // Create cell map for visual rendering
        const cellMap = Array(rows).fill().map(() => Array(cols).fill(false));
        shape.cells.forEach(([r, c]) => cellMap[r][c] = true);

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const bCell = document.createElement('div');
                bCell.className = 'block-cell';
                if (cellMap[r][c]) {
                    bCell.style.backgroundColor = shape.color;
                } else {
                    bCell.style.backgroundColor = 'transparent';
                    bCell.style.boxShadow = 'none';
                }
                el.appendChild(bCell);
            }
        }

        el.addEventListener('pointerdown', (e) => this.onPointerDown(e, shape, poolIndex));
        return el;
    }

    onPointerDown(e, shape, poolIndex) {
        if (!this.hasStarted || this.dragData) return;

        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();

        this.dragData = {
            shape,
            poolIndex,
            el,
            startX: e.clientX,
            startY: e.clientY,
            offsetX: e.clientX - rect.left,
            offsetY: e.clientY - rect.top,
            started: false
        };

        el.setPointerCapture(e.pointerId);
        e.stopPropagation();
    }

    onPointerMove(e) {
        if (!this.dragData) return;

        if (!this.dragData.started) {
            const dist = Math.hypot(e.clientX - this.dragData.startX, e.clientY - this.dragData.startY);
            if (dist > 5) {
                this.dragData.started = true;
                this.dragData.el.classList.add('dragging');
            }
        }

        if (this.dragData.started) {
            this.dragData.el.style.left = `${e.clientX - this.dragData.offsetX}px`;
            this.dragData.el.style.top = `${e.clientY - this.dragData.offsetY - 50}px`; // Offset to see under finger

            this.highlightPlacement(e);
        }
    }

    highlightPlacement(e) {
        this.clearHighlights();
        const coords = this.getGridCoords(e);
        if (coords && this.canPlace(this.dragData.shape, coords.r, coords.c)) {
            this.dragData.shape.cells.forEach(([dr, dc]) => {
                const cell = this.getCellEl(coords.r + dr, coords.c + dc);
                if (cell) cell.classList.add('highlight');
            });
        }
    }

    getGridCoords(e) {
        const gridRect = document.getElementById('grid').getBoundingClientRect();

        // y is adjusted by -50px to match the visual offset in onPointerMove
        const x = e.clientX - this.dragData.offsetX + (this.cellSize / 2);
        const y = e.clientY - this.dragData.offsetY - 50 + (this.cellSize / 2);

        if (x < gridRect.left || x > gridRect.right || y < gridRect.top || y > gridRect.bottom) return null;

        const r = Math.floor((y - gridRect.top - this.padding) / (this.cellSize + this.cellGap));
        const c = Math.floor((x - gridRect.left - this.padding) / (this.cellSize + this.cellGap));

        if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) return null;

        return { r, c };
    }

    canPlace(shape, r, c) {
        return shape.cells.every(([dr, dc]) => {
            const nr = r + dr;
            const nc = c + dc;
            return nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE && !this.grid[nr][nc];
        });
    }

    onPointerUp(e) {
        if (!this.dragData) return;

        if (this.dragData.started) {
            const coords = this.getGridCoords(e);
            const placed = coords && this.placeShape(this.dragData.shape, coords.r, coords.c, this.dragData.poolIndex);

            if (!placed) {
                // Return to slot
                this.dragData.el.classList.remove('dragging');
                this.dragData.el.style.left = '';
                this.dragData.el.style.top = '';
            }
        }

        this.dragData.el.releasePointerCapture(e.pointerId);
        this.clearHighlights();
        this.dragData = null;
    }

    placeShape(shape, r, c, poolIndex) {
        if (!this.canPlace(shape, r, c)) return false;

        shape.cells.forEach(([dr, dc]) => {
            this.grid[r + dr][c + dc] = shape.color;
        });

        this.score += shape.cells.length;
        this.pool[poolIndex] = null;

        const clearedCount = this.checkAndClearLines();
        if (clearedCount > 0) {
            this.score += (clearedCount * 10) * clearedCount; // Bonus for multi-line
        }

        this.updateStats();

        // If pool is empty, refill
        if (this.pool.every(p => p === null)) {
            this.refillPool();
        }

        this.render();
        this.renderPool();

        if (this.isGameOver()) {
            this.onGameOver();
        }

        return true;
    }

    checkAndClearLines() {
        let rowsToClear = [];
        let colsToClear = [];

        // Check rows
        for (let r = 0; r < GRID_SIZE; r++) {
            if (this.grid[r].every(cell => cell !== null)) {
                rowsToClear.push(r);
            }
        }

        // Check columns
        for (let c = 0; c < GRID_SIZE; c++) {
            let full = true;
            for (let r = 0; r < GRID_SIZE; r++) {
                if (this.grid[r][c] === null) {
                    full = false;
                    break;
                }
            }
            if (full) colsToClear.push(c);
        }

        // Clear
        rowsToClear.forEach(r => {
            for (let c = 0; c < GRID_SIZE; c++) this.grid[r][c] = null;
        });
        colsToClear.forEach(c => {
            for (let r = 0; r < GRID_SIZE; r++) this.grid[r][c] = null;
        });

        return rowsToClear.length + colsToClear.length;
    }

    isGameOver() {
        return this.pool.every(shape => {
            if (!shape) return true; // Empty slot doesn't prevent game over
            // Check every cell in the grid
            for (let r = 0; r < GRID_SIZE; r++) {
                for (let c = 0; c < GRID_SIZE; c++) {
                    if (this.canPlace(shape, r, c)) return false;
                }
            }
            return true;
        }) && !this.pool.every(shape => shape === null); // Only game over if we have shapes but cannot place them
    }

    onGameOver() {
        this.saveHighScore();
        document.getElementById('game-over-overlay').classList.remove('hidden');
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('final-high-score').textContent = this.highScore;
    }

    render() {
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                const cell = this.getCellEl(r, c);
                if (this.grid[r][c]) {
                    cell.style.backgroundColor = this.grid[r][c];
                    cell.classList.add('occupied');
                } else {
                    cell.style.backgroundColor = '';
                    cell.classList.remove('occupied');
                }
            }
        }
    }

    getCellEl(r, c) {
        return document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
    }

    clearHighlights() {
        document.querySelectorAll('.cell.highlight').forEach(el => el.classList.remove('highlight'));
    }

    setupEventListeners() {
        document.getElementById('start-game').addEventListener('click', (e) => {
            e.target.textContent = 'New Game';
            this.restart();
        });

        document.getElementById('play-again').addEventListener('click', () => {
            this.restart();
        });

        window.addEventListener('pointermove', (e) => this.onPointerMove(e));
        window.addEventListener('pointerup', (e) => this.onPointerUp(e));
    }
}

window.onload = () => {
    window.game = new Game();
};
