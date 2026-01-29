const activitiesData = [
    {
        category: "Touch",
        icon: "👆",
        id: "touch",
        items: [
            { type: "PROTECT", text: "Minimize painful procedures", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Non-medicine pain management (kangaroo care, hand hug, sucrose, pacifier) 2 person care", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Nurturing Encounters: Hand hugs", range: [22, 26], opacity: 0.3 },
            { type: "PROMOTE", text: "Nurturing Encounters: Hand hugs", range: [27, 31], opacity: 0.6 },
            { type: "PROMOTE", text: "Nurturing Encounters: Hand hugs", range: [32, 41], opacity: 1 },
            { type: "PROMOTE", text: "Kangaroo Care (KC)", range: [23, 28], opacity: 0.3 },
            { type: "PROMOTE", text: "Kangaroo Care (KC)", range: [29, 33], opacity: 0.6 },
            { type: "PROMOTE", text: "Kangaroo Care (KC)", range: [34, 41], opacity: 1 },
            { type: "PROMOTE", text: "Holding", range: [32, 41], opacity: 1 },
            { type: "PROMOTE", text: "Infant Massage", range: [34, 41], opacity: 1 },
            { type: "PROMOTE", text: "NNS / Pacifier / hands to mouth", range: [22, 41], opacity: 1 }
        ]
    },
    {
        category: "Movement",
        icon: "👶",
        id: "movement",
        items: [
            { type: "PROTECT", text: "Prevent Stress By: slow gentle handling with containment and two person care", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Be aware of these signs of stress: Monitor shows changes in heart rate, breathing rate, and oxygen needs", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Abrupt movements of body, arms, legs and hands", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Promote Stability", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Positioning - promote movement towards midline", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Allow for free (spontaneous) movement unless medically needed", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Handling - Slow, calm, gentle turning", range: [22, 41], opacity: 1 }
        ]
    },
    {
        category: "Taste and Smell",
        icon: "👃",
        id: "taste",
        items: [
            { type: "PROTECT", text: "Protect from artificial smells / Maintain a scent-free environment", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Give drops of colostrum/fresh breast milk", range: [22, 38], opacity: 1 },
            { type: "PROMOTE", text: "Give drops of colostrum/fresh breast milk", range: [39, 41], opacity: 0.3 },
            { type: "PROMOTE", text: "KC or maternal contact/holding", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Scent cloths", range: [22, 35], opacity: 1 },
            { type: "PROMOTE", text: "Scent cloths", range: [36, 41], opacity: 0.3 }
        ]
    },
    {
        category: "Hearing",
        icon: "👂",
        id: "hearing",
        items: [
            { type: "PROTECT", text: "Avoid sudden, loud sounds / Staff silence or reduce volume on alarms", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Close incubator doors softly / No tapping on top of incubator", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Talk before touch", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Language exposure. Speak to the baby during cares. Promote parents voice over all other voices", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Keep voices low 45db (whisper)", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Enjoy quiet conversation especially during KC", range: [22, 25], opacity: 0.3 },
            { type: "PROMOTE", text: "Enjoy quiet conversation especially during KC", range: [26, 30], opacity: 0.6 },
            { type: "PROMOTE", text: "Enjoy quiet conversation especially during KC", range: [31, 41], opacity: 1 },
            { type: "PROMOTE", text: "Reading, talking, singing", range: [22, 25], opacity: 0.3 },
            { type: "PROMOTE", text: "Reading, talking, singing", range: [26, 30], opacity: 0.6 },
            { type: "PROMOTE", text: "Reading, talking, singing", range: [31, 41], opacity: 1 }
        ]
    },
    {
        category: "Vision",
        icon: "👁️",
        id: "vision",
        items: [
            { type: "PROTECT", text: "Keep eyes covered", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Cover incubator", range: [22, 36], opacity: 1 },
            { type: "PROTECT", text: "Cover incubator", range: [37, 41], opacity: 0.3 },
            { type: "PROTECT", text: "Avoid/reduce sudden changes in light exposure", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Lift cover over feet first", range: [22, 41], opacity: 1 },
            { type: "PROTECT", text: "Protect eyes before/after eye exam (due to drops)", range: [32, 41], opacity: 1 },
            { type: "PROMOTE", text: "Cycled lighting (12 hours on/12 hours off)", range: [33, 41], opacity: 1 },
            { type: "PROMOTE", text: "Eye contact", range: [37, 41], opacity: 1 },
            { type: "PROMOTE", text: "Head in midline, keep your face calm", range: [38, 41], opacity: 1 }
        ]
    },
    {
        category: "Safeguard Sleep",
        icon: "💤",
        id: "sleep",
        items: [
            { type: "PROTECT", text: "Reduce stress and sleep interruptions / Avoid sudden noise and light changes / Avoid procedures while infant in quiet sleep state", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Kangaroo Care", range: [24, 41], opacity: 1 },
            { type: "PROMOTE", text: "Promote comfort and sleep: Keep lights low or eyes covered / Keep noise to a minimum (35db) / Cluster care activities / Maintain supported, flexed positioning", range: [22, 41], opacity: 1 },
            { type: "PROMOTE", text: "Safe Sleep Guidelines for discharge home", range: [36, 41], opacity: 1 }
        ]
    }
];

const input = document.getElementById('week-input');
const container = document.getElementById('activities-container');

function renderActivities(week) {
    container.innerHTML = '';

    if (week < 22 || week > 41) {
        container.innerHTML = '<div class="loading-state">Please enter a week number between 22 and 41.</div>';
        return;
    }

    activitiesData.forEach(cat => {
        const activeItems = cat.items.filter(item => week >= item.range[0] && week <= item.range[1]);

        if (activeItems.length > 0) {
            const catSection = document.createElement('div');
            catSection.className = `category-group category-${cat.id}`;
            catSection.id = cat.id; // Add ID for anchor targeting

            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `<span>${cat.icon} ${cat.category.toUpperCase()}</span>`;
            catSection.appendChild(header);

            const content = document.createElement('div');
            content.className = 'category-content';

            // Group by PROTECT/PROMOTE
            ['PROTECT', 'PROMOTE'].forEach(type => {
                const typeItems = activeItems.filter(i => i.type === type);
                if (typeItems.length > 0) {
                    const subCat = document.createElement('div');
                    subCat.className = `sub-category ${type}`;

                    const title = document.createElement('div');
                    title.className = 'sub-category-title';
                    title.textContent = type;
                    subCat.appendChild(title);

                    typeItems.forEach(item => {
                        const activity = document.createElement('div');
                        activity.className = 'activity-item';

                        const dot = document.createElement('div');
                        dot.className = 'activity-dot';
                        dot.style.backgroundColor = `rgba(var(--color-${cat.id}), ${item.opacity})`;
                        dot.innerHTML = '';

                        const text = document.createElement('div');
                        text.className = 'activity-text';
                        text.textContent = item.text;

                        activity.appendChild(dot);
                        activity.appendChild(text);
                        subCat.appendChild(activity);
                    });

                    content.appendChild(subCat);
                }
            });

            catSection.appendChild(content);
            container.appendChild(catSection);
        }
    });

    // Set up IntersectionObserver after content is rendered
    setupIntersectionObserver();
}

input.addEventListener('change', (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
        renderActivities(val);
    }
});

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update dataset for styling
                document.body.dataset.category = entry.target.id;
                // Optional: Update URL hash if desired, or remove if causing jumps
                // history.replaceState(null, null, `#${entry.target.id}`);
            }

        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    document.querySelectorAll('.category-group').forEach(section => observer.observe(section));
}

// Map category IDs to their RGB color values
const categoryColors = {
    'touch': '255, 193, 7',
    'movement': '76, 175, 80',
    'taste': '255, 112, 67',
    'hearing': '103, 58, 183',
    'vision': '0, 150, 136',
    'sleep': '3, 169, 244'
};

// Scroll tracking removed in favor of CSS scroll-driven animations

// No initial render - show instructional message instead
