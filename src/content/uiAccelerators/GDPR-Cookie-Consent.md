---

title: GDPR Cookie Consent 
cat: ui-accelerators
image: image
desc: This requirement stems from the GDPR (General Data Protection Regulation) and the ePrivacy Directive (also known as the "Cookie Law"), which mandate that websites must provide clear and comprehensive information about the use of cookies and other tracking technologies, and obtain explicit consent from users before deploying them.
---


<html-code>

<div class="demo-content">
        <h1>GDPR Cookie Consent Demo</h1>

        <div class="demo-info">
            <p><strong>This is a fully compliant cookie consent implementation</strong> that meets GDPR and ePrivacy
                Directive requirements.</p>
            <p>Features:</p>
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                <li>Granular consent controls</li>
                <li>Essential cookies always allowed</li>
                <li>Consent storage in localStorage</li>
                <li>Easy to customize and integrate</li>
                <li>Beautiful, modern design</li>
            </ul>
        </div>

        <div class="consent-status">
            <h3>Current Consent Status:</h3>
            <pre id="consent-display">No consent given yet</pre>
            <button class="reopen-consent" onclick="reopenConsent()">Manage Cookie Preferences</button>
        </div>
    </div>

    <!-- Cookie Consent Banner using Popover API -->
    <div class="cookie-consent-banner" id="cookieBanner" popover="manual">
        <div class="cookie-consent-header">
            <h2>Cookie Preferences</h2>
        </div>

        <div class="cookie-consent-body">
            <p>
                We use cookies to enhance your browsing experience, serve personalized content,
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                <a href="#privacy-policy">Read our Privacy Policy</a>
            </p>

            <div class="cookie-categories">
                <!-- Essential Cookies (Always On) -->
                <div class="cookie-category">
                    <div class="category-header" onclick="toggleCategoryDetails(this)">
                        <div class="category-info">
                            <h4>Essential Cookies</h4>
                            <p>Required for the website to function</p>
                        </div>
                        <div class="toggle-switch active disabled"></div>
                    </div>
                    <div class="category-details">
                        <ul>
                            <li>Session management</li>
                            <li>Security features</li>
                            <li>Basic functionality</li>
                        </ul>
                    </div>
                </div>

                <!-- Analytics Cookies -->
                <div class="cookie-category">
                    <div class="category-header" onclick="toggleCategoryDetails(this)">
                        <div class="category-info">
                            <h4>Analytics Cookies</h4>
                            <p>Help us understand how visitors use our site</p>
                        </div>
                        <div class="toggle-switch" data-category="analytics"
                            onclick="toggleCategory(event, 'analytics')"></div>
                    </div>
                    <div class="category-details">
                        <ul>
                            <li>Google Analytics</li>
                            <li>Page view tracking</li>
                            <li>User behavior analysis</li>
                        </ul>
                    </div>
                </div>

                <!-- Marketing Cookies -->
                <div class="cookie-category">
                    <div class="category-header" onclick="toggleCategoryDetails(this)">
                        <div class="category-info">
                            <h4>Marketing Cookies</h4>
                            <p>Used to deliver personalized advertisements</p>
                        </div>
                        <div class="toggle-switch" data-category="marketing"
                            onclick="toggleCategory(event, 'marketing')"></div>
                    </div>
                    <div class="category-details">
                        <ul>
                            <li>Facebook Pixel</li>
                            <li>Google Ads</li>
                            <li>Retargeting campaigns</li>
                        </ul>
                    </div>
                </div>

                <!-- Preferences Cookies -->
                <div class="cookie-category">
                    <div class="category-header" onclick="toggleCategoryDetails(this)">
                        <div class="category-info">
                            <h4>Preference Cookies</h4>
                            <p>Remember your settings and preferences</p>
                        </div>
                        <div class="toggle-switch" data-category="preferences"
                            onclick="toggleCategory(event, 'preferences')"></div>
                    </div>
                    <div class="category-details">
                        <ul>
                            <li>Language preferences</li>
                            <li>Theme settings</li>
                            <li>Layout customization</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="cookie-consent-actions">
                <button class="btn btn-tertiary" onclick="rejectAll()">Reject All</button>
                <button class="btn btn-secondary" onclick="savePreferences()">Save Preferences</button>
                <button class="btn btn-primary" onclick="acceptAll()">Accept All</button>
            </div>
        </div>
    </div>
</html-code>

<css-code>


* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            padding: 2rem;
            background: white
            min-height: 100vh;
        }

        .demo-content {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        h1 {
            color: #333;
            margin-bottom: 1rem;
        }

        .demo-info {
            background: #f0f4ff;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid black;
        }

        .consent-status {
            margin-top: 2rem;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 8px;
        }

        .consent-status h3 {
            margin-bottom: 0.5rem;
            color: #333;
        }

        .consent-status pre {
            background: #1f2937;
            color: #10b981;
            padding: 1rem;
            border-radius: 6px;
            overflow-x: auto;
            font-size: 0.875rem;
        }

        button.reopen-consent {
            margin-top: 1rem;
            padding: 0.75rem 1.5rem;
            background: black;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        button.reopen-consent:hover {
            background: black;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        /* Cookie Consent Banner Styles with Popover API */
        .cookie-consent-banner::backdrop {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(1px);
        }

        .cookie-consent-banner {
            position: fixed;
            inset: auto 0 0 0;
            margin-inline: auto;
            max-width: 800px;
            max-height: 75vh;
            width: calc(100% - 1.5rem);
            background: white;
            border-radius: 12px 12px 0 0;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);
            border: none;
            padding: 0;
            overflow-y: auto;
            overflow-x: hidden;
        }

        /* Popover animations */
        .cookie-consent-banner:popover-open {
            animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @starting-style {
            .cookie-consent-banner:popover-open {
                transform: translateY(100%);
            }
        }

        @keyframes slideUp {
            from {
                transform: translateY(100%);
            }
            to {
                transform: translateY(0);
            }
        }

        .cookie-consent-header {
            background: black;
            color: white;
            padding: 0.875rem 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .cookie-icon {
            font-size: 1.5rem;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        .cookie-consent-header h2 {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .cookie-consent-body {
            padding: 0.875rem 1.25rem 1rem;
        }

        .cookie-consent-body p {
            color: #4b5563;
            margin-bottom: 0.875rem;
            line-height: 1.5;
            font-size: 0.875rem;
        }

        .cookie-consent-body a {
            color: black;
            text-decoration: none;
            font-weight: 500;
        }

        .cookie-consent-body a:hover {
            text-decoration: underline;
        }

        .cookie-categories {
            margin-bottom: 0.875rem;
        }

        .cookie-category {
            background: #f9fafb;
            border-radius: 6px;
            padding: 0.75rem;
            margin-bottom: 0.5rem;
            border: 2px solid #e5e7eb;
            transition: all 0.3s ease;
        }

        .cookie-category:hover {
            border-color: black;
        }

        .category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }

        .category-info {
            flex: 1;
        }

        .category-info h4 {
            color: #1f2937;
            font-size: 0.9rem;
            margin-bottom: 0.15rem;
        }

        .category-info p {
            color: #6b7280;
            font-size: 0.8rem;
            margin: 0;
        }

        .toggle-switch {
            position: relative;
            width: 44px;
            height: 22px;
            background: #d1d5db;
            border-radius: 11px;
            cursor: pointer;
            transition: background 0.3s ease;
            flex-shrink: 0;
        }

        .toggle-switch.active {
            background: #10b981;
        }

        .toggle-switch.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .toggle-switch::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 18px;
            height: 18px;
            background: white;
            border-radius: 50%;
            transition: transform 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-switch.active::after {
            transform: translateX(22px);
        }

        .category-details {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }

        .category-details.expanded {
            max-height: 120px;
            margin-top: 0.5rem;
        }

        .category-details ul {
            list-style: none;
            padding-left: 0.75rem;
        }

        .category-details li {
            color: #6b7280;
            font-size: 0.8rem;
            margin-bottom: 0.15rem;
            position: relative;
            padding-left: 0.85rem;
        }

        .category-details li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #667eea;
        }

        .cookie-consent-actions {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            position: sticky;
            bottom: 0;
            background: white;
            padding: 0.75rem 0 0;
            margin: 0 -1.25rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            border-top: 1px solid #e5e7eb;
        }

        .btn {
            flex: 1;
            min-width: 100px;
            padding: 0.65rem 1rem;
            border: none;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }

        .btn-primary {
            background: black;
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #f3f4f6;
            color: #374151;
        }

        .btn-secondary:hover {
            background: #e5e7eb;
        }

        .btn-tertiary {
            background: transparent;
            color: #6b7280;
            border: 2px solid #e5e7eb;
        }

        .btn-tertiary:hover {
            border-color: #667eea;
            color: #667eea;
        }

        @media (max-width: 740px) {
            .cookie-consent-banner {
                max-height: 80vh;
                width: 100%;
                border-radius: 16px 16px 0 0;
            }

            .cookie-consent-actions {
                flex-direction: column;
                gap: 0.5rem;
            }

            .btn {
                width: 100%;
                padding: 0.75rem 1rem;
            }
        }

</css-code>

<js-code>
// Cookie Consent Manager
        class CookieConsentManager {
            constructor() {
                this.consentKey = 'cookie_consent';
                this.consent = this.loadConsent();
                this.init();
            }

            init() {
                console.log('🍪 Cookie Consent Manager initializing...');
                console.log('Current consent:', this.consent);
                
                // Show banner if no consent has been given
                if (!this.consent) {
                    console.log('No consent found, showing banner');
                    this.showBanner();
                } else {
                    console.log('Consent found, applying...');
                    this.applyConsent();
                    this.updateConsentDisplay();
                }
            }

            loadConsent() {
                try {
                    const stored = localStorage.getItem(this.consentKey);
                    return stored ? JSON.parse(stored) : null;
                } catch (error) {
                    console.warn('localStorage not available:', error);
                    return null;
                }
            }

            saveConsent(consent) {
                this.consent = {
                    ...consent,
                    timestamp: new Date().toISOString(),
                    version: '1.0'
                };
                try {
                    localStorage.setItem(this.consentKey, JSON.stringify(this.consent));
                } catch (error) {
                    console.warn('localStorage not available:', error);
                }
                this.applyConsent();
                this.updateConsentDisplay();
            }

            showBanner() {
                const banner = document.getElementById('cookieBanner');
                banner.showPopover();
            }

            hideBanner() {
                const banner = document.getElementById('cookieBanner');
                banner.hidePopover();
            }

            applyConsent() {
                // This is where you would actually load/block scripts based on consent
                if (this.consent.analytics) {
                    this.loadAnalytics();
                }
                if (this.consent.marketing) {
                    this.loadMarketing();
                }
                if (this.consent.preferences) {
                    this.loadPreferences();
                }
            }

            loadAnalytics() {
                console.log('✅ Analytics cookies enabled - Loading Google Analytics...');
                // Example: Load Google Analytics
                // gtag('config', 'GA_MEASUREMENT_ID');
            }

            loadMarketing() {
                console.log('✅ Marketing cookies enabled - Loading marketing scripts...');
                // Example: Load Facebook Pixel, Google Ads, etc.
            }

            loadPreferences() {
                console.log('✅ Preference cookies enabled - Loading user preferences...');
                // Example: Apply saved theme, language, etc.
            }

            updateConsentDisplay() {
                const display = document.getElementById('consent-display');
                if (this.consent) {
                    display.textContent = JSON.stringify(this.consent, null, 2);
                } else {
                    display.textContent = 'No consent given yet';
                }
            }

            getCurrentPreferences() {
                const toggles = document.querySelectorAll('.toggle-switch[data-category]');
                const preferences = {
                    essential: true, // Always true
                };

                toggles.forEach(toggle => {
                    const category = toggle.dataset.category;
                    preferences[category] = toggle.classList.contains('active');
                });

                return preferences;
            }
        }

        // Initialize the consent manager when DOM is ready
        let consentManager;
        
        // Wait for DOM to be ready (important for iframes)
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeConsentManager);
        } else {
            initializeConsentManager();
        }
        
        function initializeConsentManager() {
            consentManager = new CookieConsentManager();
        }

        // UI Functions
        function toggleCategory(event, category) {
            event.stopPropagation();
            const toggle = event.currentTarget;
            if (!toggle.classList.contains('disabled')) {
                toggle.classList.toggle('active');
            }
        }

        function toggleCategoryDetails(header) {
            const details = header.parentElement.querySelector('.category-details');
            details.classList.toggle('expanded');
        }

        function acceptAll() {
            // Enable all toggles
            document.querySelectorAll('.toggle-switch[data-category]').forEach(toggle => {
                toggle.classList.add('active');
            });

            savePreferences();
        }

        function rejectAll() {
            // Disable all optional toggles
            document.querySelectorAll('.toggle-switch[data-category]').forEach(toggle => {
                toggle.classList.remove('active');
            });

            savePreferences();
        }

        function savePreferences() {
            const preferences = consentManager.getCurrentPreferences();
            consentManager.saveConsent(preferences);
            consentManager.hideBanner();
        }

        function reopenConsent() {
            // Load current preferences into toggles
            if (consentManager.consent) {
                Object.keys(consentManager.consent).forEach(category => {
                    const toggle = document.querySelector(`.toggle-switch[data-category="${category}"]`);
                    if (toggle) {
                        if (consentManager.consent[category]) {
                            toggle.classList.add('active');
                        } else {
                            toggle.classList.remove('active');
                        }
                    }
                });
            }

            consentManager.showBanner();
        }
</js-code>

