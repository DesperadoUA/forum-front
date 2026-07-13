// ===========================================
// SWEEPS COMMUNITY - ENHANCED APPLICATION
// ===========================================

// --- DATABASE ---
const DB = {
    casinos: [
        { 
            id: 'funrize', 
            type: 'casino', 
            name: 'Funrize', 
            color: 'bg-purple', 
            offer: '3,600 Entries FREE + 1.225M Coins', 
            stars: 4.5,
            rating: 8.5,
            complaints: 45, 
            resolved: 32,
            allowedStates: ['CA', 'TX', 'FL', 'NY', 'PA'], 
            providers: ['pragmatic', 'netent'],
            games: ['sugar_rush', 'big_bass'],
            description: 'Popular social casino with generous welcome bonuses'
        },
        { 
            id: 'stake-us', 
            type: 'casino', 
            name: 'Stake.us', 
            color: 'bg-black', 
            offer: '25 SC No Deposit Bonus', 
            stars: 4.2,
            rating: 8.2,
            complaints: 38, 
            resolved: 29,
            allowedStates: ['CA', 'TX', 'FL', 'NY'], 
            providers: ['pragmatic', 'hacksaw'],
            games: ['sugar_rush', 'blackjack'],
            description: 'Cryptocurrency-friendly sweepstakes casino'
        },
        { 
            id: 'chumba', 
            type: 'casino', 
            name: 'Chumba Casino', 
            color: 'bg-blue', 
            offer: '2M GC + 2 SC FREE', 
            stars: 4.5,
            rating: 8.7,
            complaints: 124, 
            resolved: 95,
            allowedStates: ['CA', 'TX', 'FL', 'NY', 'PA', 'OH'], 
            providers: ['playtech', 'netent'],
            games: ['blackjack', 'big_bass'],
            description: 'Established sweepstakes casino with wide game selection'
        },
        { 
            id: 'wowvegas', 
            type: 'casino', 
            name: 'WOW Vegas', 
            color: 'bg-gold', 
            offer: '1.75M WOW Coins + 35 SC', 
            stars: 4.0,
            rating: 7.8,
            complaints: 45, 
            resolved: 35,
            allowedStates: ['NY', 'FL', 'CA', 'TX'], 
            providers: ['pragmatic', 'betsoft'],
            games: ['sugar_rush'],
            description: 'Modern sweepstakes casino with mobile-first design'
        },
        { 
            id: 'pulsz', 
            type: 'casino', 
            name: 'Pulsz', 
            color: 'bg-purple', 
            offer: '5,000 GC + 2 SC Welcome', 
            stars: 4.0,
            rating: 7.9,
            complaints: 41, 
            resolved: 30,
            allowedStates: ['CA', 'TX', 'FL', 'IL', 'MI'], 
            providers: ['pragmatic', 'evolution'],
            games: ['sugar_rush', 'big_bass'],
            description: 'Growing sweepstakes platform with live dealer games'
        },
        { 
            id: 'mcluck', 
            type: 'casino', 
            name: 'McLuck', 
            color: 'bg-green', 
            offer: 'Up to 200k GC + 100 SC', 
            stars: 3.8,
            rating: 7.5,
            complaints: 67, 
            resolved: 48,
            allowedStates: ['CA', 'TX', 'NY', 'PA'], 
            providers: ['netent', 'pragmatic'],
            games: ['big_bass', 'blackjack'],
            description: 'User-friendly interface with daily bonuses'
        },
        // Sportsbooks
        { 
            id: 'fliff', 
            type: 'sportsbook', 
            name: 'Fliff Social Sports', 
            color: 'bg-blue', 
            offer: 'Match up to $100 Fliff Cash', 
            stars: 4.5,
            rating: 8.3,
            complaints: 8, 
            resolved: 7,
            allowedStates: ['CA', 'TX', 'FL', 'NY', 'IL', 'PA'], 
            providers: ['internal'],
            games: [],
            description: 'Social sports betting with daily contests'
        },
        { 
            id: 'sportzino', 
            type: 'sportsbook', 
            name: 'Sportzino', 
            color: 'bg-green', 
            offer: '1.5M GC + 35 SC Welcome', 
            stars: 4.0,
            rating: 7.7,
            complaints: 15, 
            resolved: 12,
            allowedStates: ['CA', 'FL', 'OH', 'TX'], 
            providers: ['pragmatic'],
            games: [],
            description: 'Hybrid casino and sportsbook platform'
        }
    ],
    
    states: [
        { id: 'CA', name: 'California', complaints: 156 },
        { id: 'TX', name: 'Texas', complaints: 118 },
        { id: 'NY', name: 'New York', complaints: 145 },
        { id: 'FL', name: 'Florida', complaints: 132 },
        { id: 'PA', name: 'Pennsylvania', complaints: 89 },
        { id: 'IL', name: 'Illinois', complaints: 94 },
        { id: 'OH', name: 'Ohio', complaints: 67 },
        { id: 'MI', name: 'Michigan', complaints: 76 }
    ],
    
    games: [
        { id: 'sugar_rush', name: 'Sugar Rush', provider: 'Pragmatic Play', type: 'Slots' },
        { id: 'big_bass', name: 'Big Bass Bonanza', provider: 'Pragmatic Play', type: 'Slots' },
        { id: 'blackjack', name: 'Classic Blackjack', provider: 'Internal', type: 'Table Games' }
    ],
    
    providers: [
        { id: 'pragmatic', name: 'Pragmatic Play', casinos: 6 },
        { id: 'netent', name: 'NetEnt', casinos: 4 },
        { id: 'betsoft', name: 'Betsoft', casinos: 2 },
        { id: 'playtech', name: 'Playtech', casinos: 1 },
        { id: 'evolution', name: 'Evolution Gaming', casinos: 1 },
        { id: 'hacksaw', name: 'Hacksaw Gaming', casinos: 1 }
    ],
    
    categories: [
        { id: 'withdrawal', name: 'Withdrawal Issues', icon: 'fa-money-bill-wave' },
        { id: 'verification', name: 'Account Verification', icon: 'fa-id-card' },
        { id: 'bonus', name: 'Bonus/Promotion', icon: 'fa-gift' },
        { id: 'game', name: 'Game Malfunction', icon: 'fa-bug' },
        { id: 'support', name: 'Customer Support', icon: 'fa-headset' },
        { id: 'payment', name: 'Payment Processing', icon: 'fa-credit-card' }
    ],
    
    complaints: [
        {
            id: 1,
            casinoId: 'funrize',
            stateId: 'CA',
            category: 'withdrawal',
            title: 'Withdrawal Delayed Over 3 Weeks',
            text: 'Documents uploaded 3 days ago, still pending review. Support keeps giving me the runaround. This is completely unacceptable.',
            status: 'open',
            date: '2026-02-15',
            upvotes: 24,
            comments: 8,
            user: 'John D.',
            email: 'john@example.com',
            replies: [
                { id: 1, user: 'Sarah M.', date: '2026-02-15', text: 'I had the same issue last month. It took them 4 weeks to process my withdrawal. Stay persistent!', upvotes: 5 },
                { id: 2, user: 'Mike R.', date: '2026-02-15', text: 'Have you tried contacting them via live chat? That worked better for me than email.', upvotes: 3 },
                { id: 3, user: 'Emily K.', date: '2026-02-16', text: 'This is unacceptable. Filing a complaint with the BBB might help speed things up.', upvotes: 7 }
            ]
        },
        {
            id: 2,
            casinoId: 'stake-us',
            stateId: 'TX',
            category: 'game',
            title: 'Game Froze During Big Win',
            text: 'ETH transaction confirmed on blockchain but not in account. Support fixed it in 2 hours after I opened a ticket.',
            status: 'resolved',
            date: '2026-02-14',
            upvotes: 42,
            comments: 15,
            user: 'Sarah M.',
            email: 'sarah@example.com',
            replies: [
                { id: 1, user: 'Admin', date: '2026-02-14', text: 'We apologize for the inconvenience. This has been escalated to our technical team.', upvotes: 2 },
                { id: 2, user: 'John D.', date: '2026-02-14', text: 'Glad they fixed it quickly! That gives me hope for my issue.', upvotes: 4 },
                { id: 3, user: 'Sarah M.', date: '2026-02-14', text: 'UPDATE: Issue resolved! Funds credited to my account. Thank you!', upvotes: 15 }
            ]
        },
        {
            id: 3,
            casinoId: 'chumba',
            stateId: 'NY',
            category: 'verification',
            title: 'KYC Verification Taking Forever',
            text: 'Account verification process is ridiculous. They keep asking for more documents even though I provided everything.',
            status: 'open',
            date: '2026-02-13',
            upvotes: 31,
            comments: 12,
            user: 'Mike R.',
            email: 'mike@example.com',
            replies: [
                { id: 1, user: 'Lisa T.', date: '2026-02-13', text: 'Same here. I uploaded my ID three times already!', upvotes: 8 },
                { id: 2, user: 'David L.', date: '2026-02-13', text: 'Make sure your documents are high quality scans. That helped me get verified faster.', upvotes: 6 }
            ]
        },
        {
            id: 4,
            casinoId: 'wowvegas',
            stateId: 'FL',
            category: 'bonus',
            title: 'Welcome Bonus Not Applied',
            text: 'Password reset link was broken. Now working after contacting support via email.',
            status: 'resolved',
            date: '2026-02-12',
            upvotes: 18,
            comments: 5,
            user: 'Emily K.',
            email: 'emily@example.com',
            replies: [
                { id: 1, user: 'Chris W.', date: '2026-02-12', text: 'Did you use the correct bonus code during signup?', upvotes: 2 },
                { id: 2, user: 'Emily K.', date: '2026-02-12', text: 'Yes, I did. Support manually credited the bonus. All good now!', upvotes: 4 }
            ]
        },
        {
            id: 5,
            casinoId: 'pulsz',
            stateId: 'CA',
            category: 'support',
            title: 'Customer Service Non-Responsive',
            text: 'No response to emails for 2 weeks. Finally got through via live chat.',
            status: 'investigating',
            date: '2026-02-11',
            upvotes: 27,
            comments: 9,
            user: 'David L.',
            email: 'david@example.com',
            replies: [
                { id: 1, user: 'Robert P.', date: '2026-02-11', text: 'Their email support is terrible. Always use live chat.', upvotes: 5 },
                { id: 2, user: 'Lisa T.', date: '2026-02-12', text: 'I had better luck reaching out on their social media pages.', upvotes: 3 }
            ]
        },
        {
            id: 6,
            casinoId: 'mcluck',
            stateId: 'TX',
            category: 'payment',
            title: 'Skrill Withdrawal Failed',
            text: 'Skrill transfer failed twice without reason. Still waiting for resolution.',
            status: 'open',
            date: '2026-02-10',
            upvotes: 22,
            comments: 7,
            user: 'Lisa T.',
            email: 'lisa@example.com',
            replies: [
                { id: 1, user: 'Mike R.', date: '2026-02-10', text: 'Have you tried a different withdrawal method?', upvotes: 4 }
            ]
        },
        {
            id: 7,
            casinoId: 'fliff',
            stateId: 'IL',
            category: 'bonus',
            title: 'Bonus Terms Not Clear',
            text: 'Wagering requirements were not clearly stated. Had to contact support for clarification.',
            status: 'resolved',
            date: '2026-02-09',
            upvotes: 15,
            comments: 4,
            user: 'Robert P.',
            email: 'robert@example.com',
            replies: [
                { id: 1, user: 'Support Team', date: '2026-02-09', text: 'We have updated our terms to make this clearer. Thank you for the feedback!', upvotes: 6 }
            ]
        },
        {
            id: 8,
            casinoId: 'sportzino',
            stateId: 'OH',
            category: 'game',
            title: 'Bet Not Credited Properly',
            text: 'Winning bet on NFL game was not credited to my account. Still in dispute.',
            status: 'investigating',
            date: '2026-02-08',
            upvotes: 19,
            comments: 6,
            user: 'Chris W.',
            email: 'chris@example.com',
            replies: [
                { id: 1, user: 'Emily K.', date: '2026-02-08', text: 'Screenshot everything! That saved me in a similar situation.', upvotes: 8 }
            ]
        }
    ],
    
    users: [
        // Demo users for testing
        {
            id: 1,
            username: 'DemoUser',
            email: 'demo@example.com',
            password: 'demo123',
            createdAt: '2026-01-01',
            verified: true
        }
    ]
};

// --- APPLICATION STATE ---
const app = {
    container: document.getElementById('app-container'),
    hero: document.getElementById('main-hero'),
    complaintModal: document.getElementById('complaint-modal'),
    registrationModal: document.getElementById('registration-modal'),
    loginModal: document.getElementById('login-modal'),
    history: [],
    currentState: null,
    currentCasino: null,
    currentSort: 'newest',
    currentUser: null,
    pendingComplaint: null, // Store complaint data before registration
    pendingComplaintContext: null, // Store casino/state context for after login
    
    // ===========================================
    // INITIALIZATION
    // ===========================================
    
    init: function() {
        this.updateStats();
        this.populateFormOptions();
        this.setupEventListeners();
        this.updateAuthButtons();
        this.goHome();
    },
    
    updateStats: function() {
        const totalComplaints = DB.complaints.length;
        const resolvedComplaints = DB.complaints.filter(c => c.status === 'resolved').length;
        const activeCasinos = DB.casinos.length;
        
        document.getElementById('total-complaints').textContent = totalComplaints;
        document.getElementById('resolved-complaints').textContent = resolvedComplaints;
        document.getElementById('active-casinos').textContent = activeCasinos;
    },
    
    populateFormOptions: function() {
        // Populate casinos
        const casinoSelect = document.getElementById('form-casino');
        casinoSelect.innerHTML = '<option value="">Select a casino...</option>';
        DB.casinos.forEach(casino => {
            const option = document.createElement('option');
            option.value = casino.id;
            option.textContent = `${casino.name} (${casino.type})`;
            casinoSelect.appendChild(option);
        });
        
        // Populate states
        const stateSelect = document.getElementById('form-state');
        stateSelect.innerHTML = '<option value="">Select your state...</option>';
        DB.states.forEach(state => {
            const option = document.createElement('option');
            option.value = state.id;
            option.textContent = state.name;
            stateSelect.appendChild(option);
        });
    },
    
    setupEventListeners: function() {
        // Complaint form submission
        document.getElementById('complaint-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleComplaintSubmission();
        });
        
        // Registration form submission
        document.getElementById('registration-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegistration();
        });
        
        // Login form submission
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
        
        // File upload handler
        document.getElementById('form-evidence').addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files);
        });
        
        // Modal click outside
        window.onclick = (e) => {
            if (e.target === this.complaintModal) this.closeComplaintModal();
            if (e.target === this.registrationModal) this.closeRegistrationModal();
            if (e.target === this.loginModal) this.closeLoginModal();
        };
    },
    
    handleFileUpload: function(files) {
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = '';
        
        if (files.length === 0) return;
        
        // Validate and display files
        Array.from(files).forEach((file, index) => {
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert(`File "${file.name}" is too large. Maximum size is 5MB.`);
                return;
            }
            
            // Validate file count (5 max)
            if (index >= 5) {
                alert('Maximum 5 files allowed.');
                return;
            }
            
            // Create file item
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            const fileSize = (file.size / 1024).toFixed(1) + ' KB';
            if (file.size > 1024 * 1024) {
                fileSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
            }
            
            const fileIcon = file.type.includes('pdf') ? 'fa-file-pdf' : 'fa-file-image';
            
            fileItem.innerHTML = `
                <div class="file-item-info">
                    <i class="fas ${fileIcon}"></i>
                    <div>
                        <div class="file-item-name">${file.name}</div>
                        <div class="file-item-size">${(file.size / 1024).toFixed(1)} KB</div>
                    </div>
                </div>
                <button type="button" class="file-remove" onclick="app.removeFile(${index})">
                    <i class="fas fa-times"></i> Remove
                </button>
            `;
            
            fileList.appendChild(fileItem);
        });
    },
    
    removeFile: function(index) {
        const input = document.getElementById('form-evidence');
        const dt = new DataTransfer();
        const files = input.files;
        
        Array.from(files).forEach((file, i) => {
            if (i !== index) dt.items.add(file);
        });
        
        input.files = dt.files;
        this.handleFileUpload(input.files);
    },
    
    // ===========================================
    // NAVIGATION - HOME PAGE
    // ===========================================
    
    goHome: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.currentState = null;
        this.currentCasino = null;
        if (this.hero) this.hero.style.display = 'flex';
        
        this.container.innerHTML = `
            ${this.renderEntryPoints()}
            ${this.renderSearch()}
            <div id="dynamic-content">
                ${this.renderRecentComplaintsSection()}
            </div>
        `;
    },
    
    // ===========================================
    // NAVIGATION - OPTION 1: Home → Casino → Specific Casino (with state filter)
    // ===========================================
    
    showAllCasinos: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push({ name: 'All Casinos', action: 'app.showAllCasinos()' });
        this.currentState = null;
        
        const casinos = DB.casinos.filter(c => c.type === 'casino');
        this.renderCasinoList(casinos, 'All Sweepstakes Casinos', false); // false = no state modal
    },
    
    showCasinoFromList: function(casinoId, needsStateSelection = false) {
        const casino = DB.casinos.find(c => c.id === casinoId);
        if (!casino) return;
        
        // Always go directly to casino page - user will filter by state there
        this.showCasinoDetail(casinoId);
    },
    
    // ===========================================
    // NAVIGATION - OPTION 2: Home → State → Casino → Specific Casino
    // ===========================================
    
    showAllStates: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push[{ name: 'States', action: 'app.showAllStates()' }];
        this.currentState = null;
        
        this.render(`
            <h2><i class="fas fa-map-marked-alt"></i> Browse by State</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">
                Select your state to see available casinos and relevant complaints
            </p>
            <div class="grid-cards">
                ${DB.states.map(state => this.renderStateCard(state)).join('')}
            </div>
        `);
    },
    
    showCasinosByState: function(stateId) {
        const state = DB.states.find(s => s.id === stateId);
        if (!state) return;
        
        this.history.push({ 
            name: state.name, 
            action: `app.showCasinosByState('${stateId}')` 
        });
        this.currentState = stateId;
        
        const casinos = DB.casinos.filter(c => c.allowedStates.includes(stateId));
        
        this.render(`
            <div class="state-filter-bar">
                <div class="filter-info">
                    <div class="filter-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="filter-text">
                        <h4>Casinos Available in ${state.name}</h4>
                        <p>${casinos.length} casinos available • ${state.complaints} complaints</p>
                    </div>
                </div>
                <div class="filter-badge" onclick="app.clearStateFilter()">
                    <i class="fas fa-times"></i> Clear Filter
                </div>
            </div>
            
            <h2>Available Casinos</h2>
            <div class="grid-cards">
                ${casinos.map(casino => this.renderCasinoCard(casino, false)).join('')}
            </div>
        `);
    },
    
    clearStateFilter: function() {
        this.currentState = null;
        this.showAllCasinos();
    },
    
    // ===========================================
    // CASINO DETAIL PAGE
    // ===========================================
    
    showCasinoDetail: function(casinoId, stateId = null) {
        const casino = DB.casinos.find(c => c.id === casinoId);
        if (!casino) return;
        
        // Set state if provided
        if (stateId) {
            this.currentState = stateId;
        }
        
        // Update history
        if (this.history[this.history.length - 1]?.name !== casino.name) {
            this.history.push({ 
                name: casino.name, 
                action: `app.showCasinoDetail('${casinoId}', '${stateId}')` 
            });
        }
        
        const complaints = this.currentState 
            ? DB.complaints.filter(c => c.casinoId === casinoId && c.stateId === this.currentState)
            : DB.complaints.filter(c => c.casinoId === casinoId);
        
        const resolvedCount = complaints.filter(c => c.status === 'resolved').length;
        const resolutionRate = complaints.length > 0 
            ? Math.round((resolvedCount / complaints.length) * 100) 
            : 0;
        
        this.render(`
            <div class="casino-detail-header">
                <div class="casino-detail-info">
                    <h1>${casino.name}</h1>
                    <div class="casino-detail-meta">
                        <div class="meta-tag">
                            <i class="fas fa-star"></i>
                            <span>${casino.rating}/10 Rating</span>
                        </div>
                        <div class="meta-tag">
                            <i class="fas fa-exclamation-circle"></i>
                            <span>${complaints.length} Complaints</span>
                        </div>
                        <div class="meta-tag">
                            <i class="fas fa-check-circle"></i>
                            <span>${resolutionRate}% Resolved</span>
                        </div>
                        <div class="meta-tag">
                            <i class="fas fa-tag"></i>
                            <span>${casino.type}</span>
                        </div>
                    </div>
                    <div class="casino-tags">
                        ${casino.providers.map(p => {
                            const provider = DB.providers.find(pr => pr.id === p);
                            return `<span class="tag">${provider?.name || p}</span>`;
                        }).join('')}
                    </div>
                </div>
                <div>
                    <button class="btn-primary" onclick="app.openComplaintModal('${casinoId}')">
                        <i class="fas fa-bullhorn"></i> File Complaint
                    </button>
                </div>
            </div>
            
            <!-- State Filter Dropdown -->
            <div class="state-filter-bar">
                <div class="filter-info">
                    <div class="filter-icon"><i class="fas fa-filter"></i></div>
                    <div class="filter-text">
                        <h4>Filter by State</h4>
                        <p>Show complaints from specific state or view all</p>
                    </div>
                </div>
                <select onchange="app.filterByState('${casinoId}', this.value)" 
                        style="background: var(--bg-card); color: #fff; border: 1px solid var(--border); padding: 10px 20px; border-radius: 6px; font-family: 'Chakra Petch', sans-serif; cursor: pointer; min-width: 200px;">
                    <option value="">All States</option>
                    ${casino.allowedStates.map(stateId => {
                        const state = DB.states.find(s => s.id === stateId);
                        const selected = this.currentState === stateId ? 'selected' : '';
                        return `<option value="${stateId}" ${selected}>${state?.name || stateId}</option>`;
                    }).join('')}
                </select>
            </div>
            
            <div class="flex-between mb-20">
                <h2>Complaints (${complaints.length})</h2>
                <select onchange="app.sortComplaints(this.value, '${casinoId}')" style="background: var(--bg-card); color: #fff; border: 1px solid var(--border); padding: 10px 15px; border-radius: 6px; font-family: 'Chakra Petch', sans-serif; cursor: pointer;">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="mostVoted">Most Upvoted</option>
                    <option value="open">Open Only</option>
                    <option value="resolved">Resolved Only</option>
                </select>
            </div>
            
            <div id="complaints-list">
                ${complaints.length > 0 
                    ? complaints.map(c => this.renderComplaintCard(c)).join('') 
                    : `<div class="empty-state">
                        <i class="fas fa-inbox" style="font-size: 64px; color: var(--text-muted); margin-bottom: 20px;"></i>
                        <h3>No complaints ${this.currentState ? 'for this state' : 'yet'}</h3>
                        <p style="color: var(--text-muted); margin-bottom: 20px;">
                            ${this.currentState 
                                ? `No complaints from ${DB.states.find(s => s.id === this.currentState)?.name || 'this state'} yet` 
                                : `Be the first to share your experience with ${casino.name}`
                            }
                        </p>
                        <button class="btn-primary" onclick="app.openComplaintModal('${casinoId}')">
                            <i class="fas fa-bullhorn"></i> File Complaint
                        </button>
                    </div>`
                }
            </div>
        `);
    },
    
    filterByState: function(casinoId, stateId) {
        this.currentState = stateId || null;
        this.showCasinoDetail(casinoId, stateId || null);
    },
    
    // ===========================================
    // COMPLAINT DETAIL PAGE
    // ===========================================
    
    showComplaintDetail: function(complaintId) {
        const complaint = DB.complaints.find(c => c.id === complaintId);
        if (!complaint) return;
        
        const casino = DB.casinos.find(c => c.id === complaint.casinoId);
        const state = DB.states.find(s => s.id === complaint.stateId);
        const category = DB.categories.find(c => c.id === complaint.category);
        
        // Update history
        this.history.push({ 
            name: complaint.title, 
            action: `app.showComplaintDetail(${complaintId})` 
        });
        
        const statusClass = complaint.status === 'resolved' ? 'bg-status-resolved' : 
                           complaint.status === 'investigating' ? 'bg-status-investigating' : 'bg-status-open';
        const statusLabel = complaint.status === 'resolved' ? 'Resolved' : 
                           complaint.status === 'investigating' ? 'Investigating' : 'Open';
        const statusIcon = complaint.status === 'resolved' ? 'fa-check' : 
                          complaint.status === 'investigating' ? 'fa-search' : 'fa-hourglass-half';
        
        const replies = complaint.replies || [];
        
        this.render(`
            <!-- Complaint Header -->
            <div class="complaint-detail-header">
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <div class="comp-status-badge ${statusClass}">
                            <i class="fas ${statusIcon}"></i>
                            <span>${statusLabel}</span>
                        </div>
                        ${category ? `<div class="comp-category-badge">
                            <i class="fas ${category.icon}"></i>
                            <span>${category.name}</span>
                        </div>` : ''}
                    </div>
                    <h1 style="margin-bottom: 15px;">${complaint.title}</h1>
                    <div class="complaint-detail-meta">
                        <div class="meta-item">
                            <i class="fas fa-user"></i>
                            <span>${complaint.user}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-calendar"></i>
                            <span>${complaint.date}</span>
                        </div>
                        ${state ? `<div class="meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${state.name}</span>
                        </div>` : ''}
                        <div class="meta-item">
                            <i class="fas fa-building"></i>
                            <span onclick="app.showCasinoDetail('${complaint.casinoId}')" style="cursor: pointer; color: var(--accent-gold);">
                                ${casino ? casino.name : 'Unknown Casino'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Original Complaint (First Post) -->
            <div class="thread-container">
                <div class="thread-post original-post">
                    <div class="post-sidebar">
                        <div class="post-avatar">
                            ${complaint.user.charAt(0).toUpperCase()}
                        </div>
                        <div class="post-user-info">
                            <div class="post-username">${complaint.user}</div>
                            <div class="post-role">Thread Starter</div>
                        </div>
                    </div>
                    <div class="post-content">
                        <div class="post-header">
                            <span class="post-date">
                                <i class="fas fa-clock"></i> ${complaint.date}
                            </span>
                        </div>
                        <div class="post-body">
                            ${complaint.text}
                        </div>
                        <div class="post-actions">
                            <button class="post-action-btn ${complaint.userUpvoted ? 'active' : ''}" onclick="app.upvoteComplaint(${complaint.id})">
                                <i class="fas fa-thumbs-up"></i>
                                <span>Upvote (${complaint.upvotes})</span>
                            </button>
                            <button class="post-action-btn" onclick="app.focusReplyForm()">
                                <i class="fas fa-reply"></i>
                                <span>Reply</span>
                            </button>
                            <button class="post-action-btn">
                                <i class="fas fa-share"></i>
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Replies/Comments Section -->
                <div class="thread-replies">
                    <h3 style="margin-bottom: 20px;">
                        <i class="fas fa-comments"></i> ${replies.length} ${replies.length === 1 ? 'Reply' : 'Replies'}
                    </h3>
                    
                    ${replies.length > 0 ? replies.map((reply, index) => `
                        <div class="thread-post reply-post">
                            <div class="post-sidebar">
                                <div class="post-avatar ${reply.user === 'Admin' || reply.user === 'Support Team' ? 'admin-avatar' : ''}">
                                    ${reply.user.charAt(0).toUpperCase()}
                                </div>
                                <div class="post-user-info">
                                    <div class="post-username">${reply.user}</div>
                                    ${reply.user === 'Admin' || reply.user === 'Support Team' ? '<div class="post-role admin-role">Official</div>' : '<div class="post-role">Member</div>'}
                                </div>
                            </div>
                            <div class="post-content">
                                <div class="post-header">
                                    <span class="post-date">
                                        <i class="fas fa-clock"></i> ${reply.date}
                                    </span>
                                </div>
                                <div class="post-body">
                                    ${reply.text}
                                </div>
                                <div class="post-actions">
                                    <button class="post-action-btn" onclick="app.upvoteReply(${complaint.id}, ${reply.id})">
                                        <i class="fas fa-thumbs-up"></i>
                                        <span>Upvote (${reply.upvotes})</span>
                                    </button>
                                    <button class="post-action-btn" onclick="app.quoteReply('${reply.user}', '${reply.text.replace(/'/g, "\\'")}')">
                                        <i class="fas fa-quote-right"></i>
                                        <span>Quote</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('') : `
                        <div class="empty-state" style="padding: 40px 20px;">
                            <i class="fas fa-comments" style="font-size: 48px; color: var(--text-muted); margin-bottom: 15px;"></i>
                            <h4>No replies yet</h4>
                            <p style="color: var(--text-muted);">Be the first to reply to this complaint</p>
                        </div>
                    `}
                </div>
                
                <!-- Reply Form -->
                <div class="reply-form-container">
                    <h3 style="margin-bottom: 20px;">
                        <i class="fas fa-pen"></i> Post a Reply
                    </h3>
                    <form id="reply-form" onsubmit="app.submitReply(event, ${complaint.id})">
                        <div class="form-group">
                            <label for="reply-username">Your Name *</label>
                            <input type="text" id="reply-username" placeholder="Enter your name" required>
                        </div>
                        <div class="form-group">
                            <label for="reply-text">Your Reply *</label>
                            <textarea id="reply-text" rows="6" placeholder="Share your thoughts, advice, or similar experience..." required></textarea>
                        </div>
                        <div style="display: flex; gap: 15px;">
                            <button type="submit" class="btn-primary">
                                <i class="fas fa-paper-plane"></i> Post Reply
                            </button>
                            <button type="button" class="btn-secondary" onclick="document.getElementById('reply-form').reset()">
                                <i class="fas fa-times"></i> Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `);
    },
    
    upvoteComplaint: function(complaintId) {
        const complaint = DB.complaints.find(c => c.id === complaintId);
        if (complaint) {
            complaint.upvotes++;
            this.showComplaintDetail(complaintId);
        }
    },
    
    upvoteReply: function(complaintId, replyId) {
        const complaint = DB.complaints.find(c => c.id === complaintId);
        if (complaint && complaint.replies) {
            const reply = complaint.replies.find(r => r.id === replyId);
            if (reply) {
                reply.upvotes++;
                this.showComplaintDetail(complaintId);
            }
        }
    },
    
    focusReplyForm: function() {
        document.getElementById('reply-text').focus();
        document.getElementById('reply-text').scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    
    quoteReply: function(username, text) {
        const replyText = document.getElementById('reply-text');
        const quotedText = `[Quote from ${username}]\n"${text}"\n\n`;
        replyText.value = quotedText;
        this.focusReplyForm();
    },
    
    submitReply: function(event, complaintId) {
        event.preventDefault();
        
        const username = document.getElementById('reply-username').value;
        const text = document.getElementById('reply-text').value;
        
        const complaint = DB.complaints.find(c => c.id === complaintId);
        if (complaint) {
            if (!complaint.replies) {
                complaint.replies = [];
            }
            
            const newReply = {
                id: complaint.replies.length + 1,
                user: username,
                date: new Date().toISOString().split('T')[0],
                text: text,
                upvotes: 0
            };
            
            complaint.replies.push(newReply);
            complaint.comments = complaint.replies.length;
            
            // Refresh the page to show new reply
            this.showComplaintDetail(complaintId);
            
            // Show success message
            setTimeout(() => {
                alert('Reply posted successfully!');
            }, 100);
        }
    },
    
    // ===========================================
    // OTHER NAVIGATION
    // ===========================================
    
    showSportsbooks: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push({ name: 'Sportsbooks', action: 'app.showSportsbooks()' });
        this.currentState = null;
        
        const sportsbooks = DB.casinos.filter(c => c.type === 'sportsbook');
        this.renderCasinoList(sportsbooks, 'Sweepstakes Sportsbooks', false);
    },
    
    showFilterCategory: function(categoryType) {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push({ 
            name: categoryType.charAt(0).toUpperCase() + categoryType.slice(1), 
            action: `app.showFilterCategory('${categoryType}')` 
        });
        
        let items = [];
        let title = '';
        
        if (categoryType === 'games') {
            items = DB.games;
            title = 'Browse by Game';
        } else if (categoryType === 'providers') {
            items = DB.providers;
            title = 'Browse by Provider';
        }
        
        this.render(`
            <h2><i class="fas fa-filter"></i> ${title}</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">
                Select to see casinos offering this ${categoryType.slice(0, -1)}
            </p>
            <div class="grid-cards">
                ${items.map(item => `
                    <div class="cat-card" onclick="app.showCasinosByFilter('${categoryType}', '${item.id}', '${item.name}')">
                        <div class="cat-icon">
                            <i class="fas ${categoryType === 'games' ? 'fa-gamepad' : 'fa-server'}"></i>
                        </div>
                        <h3>${item.name}</h3>
                        <p>${item.provider || ''} ${item.casinos ? `• ${item.casinos} casinos` : ''}</p>
                    </div>
                `).join('')}
            </div>
        `);
    },
    
    showCasinosByFilter: function(filterType, filterId, filterName) {
        this.history.push({ 
            name: filterName, 
            action: `app.showCasinosByFilter('${filterType}', '${filterId}', '${filterName}')` 
        });
        
        let casinos = [];
        if (filterType === 'games') {
            casinos = DB.casinos.filter(c => c.games.includes(filterId));
        } else if (filterType === 'providers') {
            casinos = DB.casinos.filter(c => c.providers.includes(filterId));
        }
        
        this.renderCasinoList(casinos, `Casinos with ${filterName}`, false);
    },
    
    showRecentComplaints: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push({ name: 'Recent Complaints', action: 'app.showRecentComplaints()' });
        
        this.render(this.renderRecentComplaintsSection());
    },
    
    showResolvedComplaints: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push({ name: 'Resolved', action: 'app.showResolvedComplaints()' });
        
        const resolved = DB.complaints.filter(c => c.status === 'resolved');
        
        this.render(`
            <h2><i class="fas fa-check-circle"></i> Resolved Complaints</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">
                ${resolved.length} complaints successfully resolved
            </p>
            <div id="complaints-list">
                ${resolved.map(c => this.renderComplaintCard(c)).join('')}
            </div>
        `);
    },
    
    showAbout: function() {
        this.history = [{ name: 'Home', action: 'app.goHome()' }];
        this.history.push({ name: 'About', action: 'app.showAbout()' });
        
        this.render(`
            <h2><i class="fas fa-info-circle"></i> About Sweeps Community</h2>
            <div style="max-width: 800px; margin: 0 auto;">
                <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 20px;">
                    Sweeps Community is a platform dedicated to providing transparency in the sweepstakes casino industry. 
                    We believe players deserve a voice and that sharing experiences helps everyone make informed decisions.
                </p>
                <h3 style="margin-top: 40px;">Our Mission</h3>
                <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 20px;">
                    To create a fair and transparent environment where players can share their experiences, 
                    file complaints, and hold sweepstakes casinos accountable.
                </p>
                <h3 style="margin-top: 40px;">How It Works</h3>
                <ol style="color: var(--text-light); line-height: 1.8; padding-left: 20px;">
                    <li>Browse casinos by state, game, or provider</li>
                    <li>Read real complaints from real players</li>
                    <li>File your own complaint if you've had issues</li>
                    <li>Track resolution status</li>
                    <li>Help the community by voting on complaints</li>
                </ol>
            </div>
        `);
    },
    
    // ===========================================
    // SEARCH
    // ===========================================
    
    handleSearch: function(query) {
        const dynamicDiv = document.getElementById('dynamic-content');
        if (!query.trim()) {
            dynamicDiv.innerHTML = this.renderRecentComplaintsSection();
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const casinoResults = DB.casinos.filter(c => 
            c.name.toLowerCase().includes(lowerQuery)
        );
        const stateResults = DB.states.filter(s => 
            s.name.toLowerCase().includes(lowerQuery)
        );
        
        if (casinoResults.length === 0 && stateResults.length === 0) {
            dynamicDiv.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search" style="font-size: 64px; color: var(--text-muted); margin-bottom: 20px;"></i>
                    <h3>No results found</h3>
                    <p style="color: var(--text-muted);">Try searching for a different casino or state</p>
                </div>
            `;
            return;
        }
        
        let html = '<h2>Search Results</h2>';
        
        if (casinoResults.length > 0) {
            html += `
                <h3 style="margin-top: 30px;">Casinos</h3>
                <div class="grid-cards">
                    ${casinoResults.map(c => this.renderCasinoCard(c, false)).join('')}
                </div>
            `;
        }
        
        if (stateResults.length > 0) {
            html += `
                <h3 style="margin-top: 30px;">States</h3>
                <div class="grid-cards">
                    ${stateResults.map(s => this.renderStateCard(s)).join('')}
                </div>
            `;
        }
        
        dynamicDiv.innerHTML = html;
    },
    
    // ===========================================
    // SORTING & FILTERING
    // ===========================================
    
    sortComplaints: function(sortType, casinoId = null) {
        let complaints = casinoId 
            ? DB.complaints.filter(c => c.casinoId === casinoId)
            : [...DB.complaints];
        
        if (sortType === 'newest') {
            complaints.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortType === 'oldest') {
            complaints.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortType === 'mostVoted') {
            complaints.sort((a, b) => b.upvotes - a.upvotes);
        } else if (sortType === 'open') {
            complaints = complaints.filter(c => c.status === 'open');
        } else if (sortType === 'resolved') {
            complaints = complaints.filter(c => c.status === 'resolved');
        }
        
        const listDiv = document.getElementById('complaints-list') || 
                        document.getElementById('recent-complaints-list');
        if (listDiv) {
            listDiv.innerHTML = complaints.length > 0
                ? complaints.map(c => this.renderComplaintCard(c)).join('')
                : '<p style="color: var(--text-muted); padding: 20px; text-align: center;">No complaints found.</p>';
        }
    },
    
    // ===========================================
    // MODALS
    // ===========================================
    
    openComplaintModal: function(casinoId = null) {
        // Check if user is logged in
        if (!this.currentUser) {
            // Store context for after login
            this.pendingComplaintContext = {
                casinoId: casinoId,
                stateId: this.currentState
            };
            
            // Show login modal instead of complaint form
            this.showAuthPrompt();
            return;
        }
        
        // User is logged in, show complaint form
        this.complaintModal.style.display = 'flex';
        
        if (casinoId) {
            document.getElementById('form-casino').value = casinoId;
        }
        
        if (this.currentState) {
            document.getElementById('form-state').value = this.currentState;
        }
    },
    
    showAuthPrompt: function() {
        // Show registration modal with option to switch to login
        this.registrationModal.style.display = 'flex';
        
        // Scroll to top of modal
        setTimeout(() => {
            this.registrationModal.scrollTop = 0;
        }, 100);
    },
    
    openComplaintModalAfterAuth: function() {
        // User just logged in/registered, open complaint form with context
        this.complaintModal.style.display = 'flex';
        
        if (this.pendingComplaintContext) {
            if (this.pendingComplaintContext.casinoId) {
                document.getElementById('form-casino').value = this.pendingComplaintContext.casinoId;
            }
            if (this.pendingComplaintContext.stateId) {
                document.getElementById('form-state').value = this.pendingComplaintContext.stateId;
            }
            
            // Clear the context
            this.pendingComplaintContext = null;
        }
    },
    
    closeComplaintModal: function() {
        this.complaintModal.style.display = 'none';
        document.getElementById('complaint-form').reset();
        document.getElementById('file-list').innerHTML = '';
    },
    
    handleComplaintSubmission: function() {
        // Check if user is logged in
        if (!this.currentUser) {
            // Store complaint data
            this.pendingComplaint = {
                casinoId: document.getElementById('form-casino').value,
                stateId: document.getElementById('form-state').value,
                issueType: document.getElementById('form-issue-type').value,
                title: document.getElementById('form-title').value,
                description: document.getElementById('form-desc').value,
                firstName: document.getElementById('form-first-name').value,
                lastName: document.getElementById('form-last-name').value,
                accountId: document.getElementById('form-account-id').value,
                email: document.getElementById('form-email').value,
                files: document.getElementById('form-evidence').files
            };
            
            // Close complaint modal and open registration modal
            this.complaintModal.style.display = 'none';
            this.registrationModal.style.display = 'flex';
            
            // Pre-fill registration email if provided
            document.getElementById('reg-email').value = this.pendingComplaint.email;
            
            return;
        }
        
        // User is logged in, submit complaint directly
        this.submitComplaint();
    },
    
    submitComplaint: function() {
        const complaintData = this.pendingComplaint || {
            casinoId: document.getElementById('form-casino').value,
            stateId: document.getElementById('form-state').value,
            issueType: document.getElementById('form-issue-type').value,
            title: document.getElementById('form-title').value,
            description: document.getElementById('form-desc').value,
            firstName: document.getElementById('form-first-name').value,
            lastName: document.getElementById('form-last-name').value,
            accountId: document.getElementById('form-account-id').value,
            email: document.getElementById('form-email').value,
            files: document.getElementById('form-evidence').files
        };
        
        // Create public display name (first name + last initial)
        const displayName = this.currentUser ? this.currentUser.username : 
                           `${complaintData.firstName} ${complaintData.lastName.charAt(0)}.`;
        
        const newComplaint = {
            id: Date.now(),
            casinoId: complaintData.casinoId,
            stateId: complaintData.stateId,
            category: complaintData.issueType,
            title: complaintData.title,
            text: complaintData.description,
            status: 'open',
            date: new Date().toISOString().split('T')[0],
            upvotes: 0,
            user: displayName,
            userId: this.currentUser ? this.currentUser.id : null,
            
            // Confidential data (stored but not displayed)
            confidential: {
                firstName: complaintData.firstName,
                lastName: complaintData.lastName,
                accountId: complaintData.accountId,
                email: complaintData.email,
                fileCount: complaintData.files.length,
                fileNames: Array.from(complaintData.files).map(f => f.name)
            },
            
            replies: []
        };
        
        DB.complaints.unshift(newComplaint);
        this.pendingComplaint = null;
        this.closeComplaintModal();
        this.closeRegistrationModal();
        this.closeLoginModal();
        this.updateStats();
        
        // Show success message
        alert('Complaint submitted successfully!\n\nYour confidential information has been secured and will not be displayed publicly.');
        
        // Navigate to the complaint detail page
        this.showComplaintDetail(newComplaint.id);
    },
    
    handleRegistration: function() {
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const passwordConfirm = document.getElementById('reg-password-confirm').value;
        
        // Validate passwords match
        if (password !== passwordConfirm) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        
        // Check if user already exists (simplified)
        // In production, this would be a server-side check
        const existingUser = DB.users?.find(u => u.email === email);
        if (existingUser) {
            alert('An account with this email already exists. Please log in instead.');
            this.switchToLogin();
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password, // In production, this would be hashed
            createdAt: new Date().toISOString(),
            verified: false
        };
        
        // Initialize users array if it doesn't exist
        if (!DB.users) {
            DB.users = [];
        }
        
        DB.users.push(newUser);
        this.currentUser = newUser;
        
        // Update UI to show logged in state
        this.updateAuthButtons();
        
        // Check if there's a pending complaint to submit
        if (this.pendingComplaint) {
            // Submit the pending complaint
            this.submitComplaint();
        } else if (this.pendingComplaintContext) {
            // Open complaint form with saved context
            this.closeRegistrationModal();
            this.openComplaintModalAfterAuth();
        } else {
            // Just close registration modal
            this.closeRegistrationModal();
            alert('Account created successfully! You can now file complaints.');
        }
    },
    
    handleLogin: function() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Find user (simplified - in production this would be server-side)
        const user = DB.users?.find(u => u.email === email && u.password === password);
        
        if (!user) {
            alert('Invalid email or password. Please try again.');
            return;
        }
        
        this.currentUser = user;
        this.updateAuthButtons();
        
        // Check if there's a pending complaint to submit
        if (this.pendingComplaint) {
            // Submit the pending complaint
            this.submitComplaint();
        } else if (this.pendingComplaintContext) {
            // Open complaint form with saved context
            this.closeLoginModal();
            this.openComplaintModalAfterAuth();
        } else {
            // Just close login modal
            this.closeLoginModal();
            alert('Logged in successfully! Welcome back, ' + user.username + '!');
        }
    },
    
    updateAuthButtons: function() {
        const authButtons = document.querySelector('.auth-buttons');
        if (this.currentUser) {
            // Show dashboard link
    const dashLink = document.getElementById('dashboard-link');
    if (dashLink) dashLink.style.display = 'block';
            authButtons.innerHTML = `
                <span style="color: var(--text-light); margin-right: 15px;">
                    <i class="fas fa-user"></i> ${this.currentUser.username}
                </span>
                <button class="btn-secondary" onclick="app.logout()">Log Out</button>
                <button class="btn-primary" onclick="app.openComplaintModal()">
                    <i class="fas fa-bullhorn"></i> File Complaint
                </button>
            `;
        } else {
            // Hide dashboard link
    const dashLink = document.getElementById('dashboard-link');
    if (dashLink) dashLink.style.display = 'none';
            authButtons.innerHTML = `
                <button class="btn-secondary" onclick="app.openLoginModal()">Log In</button>
                <button class="btn-primary" onclick="app.openComplaintModal()">
                    <i class="fas fa-bullhorn"></i> File Complaint
                </button>
            `;
        }
    },
    
    logout: function() {
        this.currentUser = null;
        // Hide dashboard link
    const dashLink = document.getElementById('dashboard-link');
    if (dashLink) dashLink.style.display = 'none';
        this.updateAuthButtons();
        alert('You have been logged out.');
        this.goHome();
    },
    
    switchToLogin: function(event) {
        if (event) event.preventDefault();
        this.registrationModal.style.display = 'none';
        this.loginModal.style.display = 'flex';
    },
    
    switchToRegistration: function(event) {
        if (event) event.preventDefault();
        this.loginModal.style.display = 'none';
        this.registrationModal.style.display = 'flex';
    },
    
    openLoginModal: function() {
        this.loginModal.style.display = 'flex';
    },
    
    closeRegistrationModal: function() {
        this.registrationModal.style.display = 'none';
        document.getElementById('registration-form').reset();
    },
    
    closeLoginModal: function() {
        this.loginModal.style.display = 'none';
        document.getElementById('login-form').reset();
    },
    
    showForgotPassword: function(event) {
        if (event) event.preventDefault();
        alert('Password reset functionality would be implemented here.\n\nYou would receive a reset link via email.');
    },
    
    // ===========================================
    // RENDERING FUNCTIONS
    // ===========================================
    
    render: function(contentHTML) {
        if (this.hero) this.hero.style.display = 'none';
        
        const breadcrumbsHTML = this.history.map((step, index) => {
            const isLast = index === this.history.length - 1;
            if (isLast) {
                return `<span style="color:#fff; cursor:default;">${step.name}</span>`;
            }
            return `<span onclick="app.navigateBack(${index})" style="cursor:pointer;">${step.name}</span> <span style="color: var(--text-muted);"> &gt; </span> `;
        }).join('');
        
        this.container.innerHTML = `
            <div class="breadcrumbs">${breadcrumbsHTML}</div>
            ${contentHTML}
        `;
    },
    
    renderCasinoList: function(casinos, title, showStateOption) {
        this.render(`
            <h2>${title}</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">
                ${casinos.length} ${casinos.length === 1 ? 'casino' : 'casinos'} available
            </p>
            <div class="grid-cards">
                ${casinos.map(casino => this.renderCasinoCard(casino, showStateOption)).join('')}
            </div>
        `);
    },
    
    renderEntryPoints: function() {
        return `
            <h2>How Would You Like to Browse?</h2>
            <div class="grid-cards">
                <div class="cat-card" onclick="app.showAllCasinos()">
                    <div class="cat-icon"><i class="fas fa-dice"></i></div>
                    <h3>All Casinos</h3>
                    <p>Browse complete list</p>
                </div>
                <div class="cat-card" onclick="app.showAllStates()">
                    <div class="cat-icon"><i class="fas fa-map-marked-alt"></i></div>
                    <h3>By State</h3>
                    <p>Find legal sites</p>
                </div>
                <div class="cat-card" onclick="app.showFilterCategory('games')">
                    <div class="cat-icon"><i class="fas fa-gamepad"></i></div>
                    <h3>By Game</h3>
                    <p>Find specific games</p>
                </div>
                <div class="cat-card" onclick="app.showFilterCategory('providers')">
                    <div class="cat-icon"><i class="fas fa-server"></i></div>
                    <h3>By Provider</h3>
                    <p>Software providers</p>
                </div>
                <div class="cat-card" onclick="app.showSportsbooks()">
                    <div class="cat-icon"><i class="fas fa-trophy"></i></div>
                    <h3>Sportsbooks</h3>
                    <p>Betting platforms</p>
                </div>
            </div>
        `;
    },
    
    renderSearch: function() {
        return `
            <div class="search-wrapper">
                <input type="text" class="search-input" placeholder="Search for casinos, states, or games..." 
                       onkeyup="app.handleSearch(this.value)">
                <i class="fas fa-search search-icon"></i>
            </div>
        `;
    },
    
    renderRecentComplaintsSection: function() {
        return `
            <div style="border-top: 1px solid var(--border); padding-top: 40px;">
                <div class="flex-between mb-20">
                    <h2>Recent Complaints</h2>
                    <select id="sort-select" onchange="app.sortComplaints(this.value)" style="background: var(--bg-card); color: #fff; border: 1px solid var(--border); padding: 10px 15px; border-radius: 6px; font-family: 'Chakra Petch', sans-serif; cursor: pointer;">
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="mostVoted">Most Upvoted</option>
                        <option value="open">Open Only</option>
                        <option value="resolved">Resolved Only</option>
                    </select>
                </div>
                <div id="recent-complaints-list">
                    ${DB.complaints.map(c => this.renderComplaintCard(c)).join('')}
                </div>
            </div>
        `;
    },
    
    renderCasinoCard: function(casino, showStateOption) {
        const stars = '★'.repeat(Math.floor(casino.stars)) + '☆'.repeat(5 - Math.floor(casino.stars));
        
        return `
            <div class="casino-card" onclick="app.showCasinoFromList('${casino.id}', ${showStateOption})">
                <div class="casino-header">
                    <div>
                        <div class="casino-logo ${casino.color}">
                            ${casino.name.substring(0, 2).toUpperCase()}
                        </div>
                    </div>
                    <div class="casino-info" style="flex: 1;">
                        <h3>${casino.name}</h3>
                        <span class="casino-type">${casino.type}</span>
                    </div>
                </div>
                <div class="casino-offer">
                    <i class="fas fa-gift"></i> ${casino.offer}
                </div>
                <div class="casino-stars" style="color: var(--accent-gold);">
                    ${stars} <span style="color: var(--text-muted); margin-left: 5px;">${casino.stars}/5</span>
                </div>
                <div class="casino-meta">
                    <div class="meta-item">
                        <span class="meta-value">${casino.complaints}</span>
                        <span class="meta-label">Complaints</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-value">${casino.resolved}</span>
                        <span class="meta-label">Resolved</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-value">${Math.round((casino.resolved / casino.complaints) * 100)}%</span>
                        <span class="meta-label">Rate</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderStateCard: function(state) {
        const casinos = DB.casinos.filter(c => c.allowedStates.includes(state.id));
        
        return `
            <div class="cat-card" onclick="app.showCasinosByState('${state.id}')">
                <div class="cat-icon"><i class="fas fa-map-marker-alt"></i></div>
                <h3>${state.name}</h3>
                <p>${casinos.length} casinos • ${state.complaints} complaints</p>
            </div>
        `;
    },
    
    renderComplaintCard: function(complaint) {
        const casino = DB.casinos.find(c => c.id === complaint.casinoId);
        const state = DB.states.find(s => s.id === complaint.stateId);
        const category = DB.categories.find(c => c.id === complaint.category);
        
        const statusClass = complaint.status === 'resolved' ? 'bg-status-resolved' : 
                           complaint.status === 'investigating' ? 'bg-status-investigating' : 'bg-status-open';
        const statusLabel = complaint.status === 'resolved' ? 'Resolved' : 
                           complaint.status === 'investigating' ? 'Investigating' : 'Open';
        const statusIcon = complaint.status === 'resolved' ? 'fa-check' : 
                          complaint.status === 'investigating' ? 'fa-search' : 'fa-hourglass-half';
        
        return `
            <div class="complaint-card-row" onclick="app.showComplaintDetail(${complaint.id})">
                <div class="comp-status-panel ${statusClass}">
                    <i class="fas ${statusIcon}"></i>
                    <span class="comp-status-text">${statusLabel}</span>
                </div>
                <div class="comp-info-panel">
                    <div class="comp-title">${complaint.title}</div>
                    <div class="comp-meta">
                        <span class="comp-badge ${statusClass}">${statusLabel}</span>
                        ${category ? `<span class="comp-badge" style="background: var(--bg-dark); color: var(--text-muted);">
                            <i class="fas ${category.icon}"></i> ${category.name}
                        </span>` : ''}
                        <span class="comp-date">
                            <i class="fas fa-calendar"></i> ${complaint.date}
                        </span>
                        ${state ? `<span class="comp-date">
                            <i class="fas fa-map-marker-alt"></i> ${state.name}
                        </span>` : ''}
                    </div>
                    <div class="comp-desc">${complaint.text.substring(0, 150)}${complaint.text.length > 150 ? '...' : ''}</div>
                    <div style="margin-top: 15px; display: flex; gap: 20px;">
                        <span style="color: var(--text-muted); font-size: 0.875rem;">
                            <i class="fas fa-thumbs-up"></i> ${complaint.upvotes} upvotes
                        </span>
                        <span style="color: var(--text-muted); font-size: 0.875rem;">
                            <i class="fas fa-comment"></i> ${complaint.replies ? complaint.replies.length : 0} replies
                        </span>
                        <span style="color: var(--text-muted); font-size: 0.875rem;">
                            <i class="fas fa-user"></i> ${complaint.user}
                        </span>
                    </div>
                </div>
                <div class="comp-target-panel">
                    <div class="comp-target-logo ${casino ? casino.color : 'bg-black'}">
                        ${casino ? casino.name.substring(0, 2).toUpperCase() : '??'}
                    </div>
                    <div class="comp-target-name">${casino ? casino.name : 'Unknown'}</div>
                    <div class="comp-safety-index">
                        Rating: <strong>${casino ? casino.rating : 'N/A'}/10</strong>
                    </div>
                </div>
            </div>
        `;
    },
    
    navigateBack: function(index) {
        const targetStep = this.history[index];
        this.history = this.history.slice(0, index + 1);
        eval(targetStep.action);
    },
    
    // Placeholder functions for footer links
    showTerms: function() { alert('Terms of Service page'); },
    showPrivacy: function() { alert('Privacy Policy page'); },
    showDisclaimer: function() { alert('Disclaimer page'); }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
