// ===========================================
// USER DASHBOARD MODULE
// ===========================================

app.dashboard = {
    
    showDashboard: function() {
        if (!app.currentUser) {
            alert('Please log in to view your dashboard.');
            app.openLoginModal();
            return;
        }
        
        // Update navigation history
        app.history = [
            { name: 'Home', action: 'app.goHome()' },
            { name: 'My Dashboard', action: 'app.dashboard.showDashboard()' }
        ];
        
        // Get user's complaints
        const userComplaints = DB.complaints.filter(c => c.userId === app.currentUser.id);
        const openComplaints = userComplaints.filter(c => c.status === 'open');
        const resolvedComplaints = userComplaints.filter(c => c.status === 'resolved');
        
        // Get user's replies
        let totalReplies = 0;
        DB.complaints.forEach(complaint => {
            if (complaint.replies) {
                totalReplies += complaint.replies.filter(r => r.user === app.currentUser.username).length;
            }
        });
        
        app.render(`
            <div class="dashboard-container">
                <!-- Dashboard Header -->
                <div class="dashboard-header">
                    <div class="dashboard-user-info">
                        <div class="dashboard-avatar">
                            ${app.currentUser.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h1>Welcome back, ${app.currentUser.username}!</h1>
                            <p style="color: var(--text-muted); margin: 0;">
                                Member since ${new Date(app.currentUser.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <button class="btn-primary" onclick="app.openComplaintModal()">
                        <i class="fas fa-plus"></i> New Complaint
                    </button>
                </div>
                
                <!-- Stats Overview -->
                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(220, 38, 38, 0.1); color: var(--accent-red);">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">${userComplaints.length}</div>
                            <div class="stat-label">Total Complaints</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(245, 158, 11, 0.1); color: var(--status-investigating);">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">${openComplaints.length}</div>
                            <div class="stat-label">Open/Pending</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(16, 185, 129, 0.1); color: var(--accent-green);">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">${resolvedComplaints.length}</div>
                            <div class="stat-label">Resolved</div>
                        </div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(59, 130, 246, 0.1); color: var(--accent-blue);">
                            <i class="fas fa-comment"></i>
                        </div>
                        <div class="stat-content">
                            <div class="stat-number">${totalReplies}</div>
                            <div class="stat-label">Replies Posted</div>
                        </div>
                    </div>
                </div>
                
                <!-- Tabs -->
                <div class="dashboard-tabs">
                    <button class="tab-btn active" onclick="app.dashboard.showTab('complaints')">
                        <i class="fas fa-list"></i> My Complaints
                    </button>
                    <button class="tab-btn" onclick="app.dashboard.showTab('activity')">
                        <i class="fas fa-history"></i> Activity
                    </button>
                    <button class="tab-btn" onclick="app.dashboard.showTab('settings')">
                        <i class="fas fa-cog"></i> Settings
                    </button>
                </div>
                
                <!-- Tab Content -->
                <div id="dashboard-content">
                    ${this.renderComplaintsTab(userComplaints)}
                </div>
            </div>
        `);
    },
    
    renderComplaintsTab: function(complaints) {
        if (complaints.length === 0) {
            return `
                <div class="empty-state dashboard-empty">
                    <i class="fas fa-inbox" style="font-size: 64px; color: var(--text-muted); margin-bottom: 20px;"></i>
                    <h3>No Complaints Yet</h3>
                    <p style="color: var(--text-muted); margin-bottom: 25px;">
                        You haven't filed any complaints yet. Start by sharing your experience.
                    </p>
                    <button class="btn-primary" onclick="app.openComplaintModal()">
                        <i class="fas fa-bullhorn"></i> File Your First Complaint
                    </button>
                </div>
            `;
        }
        
        return `
            <div class="dashboard-section">
                <div class="section-header">
                    <h3><i class="fas fa-list"></i> Your Complaints (${complaints.length})</h3>
                    <select onchange="app.dashboard.filterComplaints(this.value)" class="filter-select">
                        <option value="all">All Status</option>
                        <option value="open">Open</option>
                        <option value="investigating">Investigating</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
                
                <div id="user-complaints-list">
                    ${complaints.map(c => this.renderComplaintItem(c)).join('')}
                </div>
            </div>
        `;
    },
    
    renderComplaintItem: function(complaint) {
        const casino = DB.casinos.find(ca => ca.id === complaint.casinoId);
        const statusClass = complaint.status === 'resolved' ? 'status-resolved' : 
                           complaint.status === 'investigating' ? 'status-investigating' : 'status-open';
        
        return `
            <div class="dashboard-complaint-item" onclick="app.showComplaintDetail(${complaint.id})">
                <div class="complaint-item-header">
                    <div>
                        <h4>${complaint.title}</h4>
                        <div class="complaint-item-meta">
                            <span><i class="fas fa-building"></i> ${casino ? casino.name : 'Unknown'}</span>
                            <span><i class="fas fa-calendar"></i> ${complaint.date}</span>
                            <span class="badge ${statusClass}">
                                ${complaint.status}
                            </span>
                        </div>
                    </div>
                    <div class="complaint-item-stats">
                        <div class="stat-mini">
                            <i class="fas fa-thumbs-up"></i>
                            <span>${complaint.upvotes}</span>
                        </div>
                        <div class="stat-mini">
                            <i class="fas fa-comment"></i>
                            <span>${complaint.replies ? complaint.replies.length : 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderActivityTab: function() {
        const userComplaints = DB.complaints.filter(c => c.userId === app.currentUser.id);
        const activities = [];
        
        // Add complaints as activities
        userComplaints.forEach(c => {
            activities.push({
                type: 'complaint',
                date: c.date,
                icon: 'fa-bullhorn',
                text: `Filed complaint: "${c.title}"`,
                link: c.id
            });
        });
        
        // Add replies as activities
        DB.complaints.forEach(complaint => {
            if (complaint.replies) {
                complaint.replies.forEach(reply => {
                    if (reply.user === app.currentUser.username) {
                        activities.push({
                            type: 'reply',
                            date: reply.date,
                            icon: 'fa-comment',
                            text: `Replied to "${complaint.title}"`,
                            link: complaint.id
                        });
                    }
                });
            }
        });
        
        // Sort by date
        activities.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        return `
            <div class="dashboard-section">
                <h3><i class="fas fa-history"></i> Recent Activity</h3>
                ${activities.length === 0 ? `
                    <div class="empty-state">
                        <i class="fas fa-history" style="font-size: 48px; color: var(--text-muted);"></i>
                        <p style="color: var(--text-muted); margin-top: 15px;">No activity yet</p>
                    </div>
                ` : `
                    <div class="activity-timeline">
                        ${activities.map(a => `
                            <div class="activity-item" onclick="app.showComplaintDetail(${a.link})">
                                <div class="activity-icon">
                                    <i class="fas ${a.icon}"></i>
                                </div>
                                <div class="activity-content">
                                    <div class="activity-text">${a.text}</div>
                                    <div class="activity-date">${a.date}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        `;
    },
    
    renderSettingsTab: function() {
        return `
            <div class="dashboard-section">
                <h3><i class="fas fa-cog"></i> Account Settings</h3>
                
                <div class="settings-group">
                    <h4>Profile Information</h4>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" value="${app.currentUser.username}" readonly 
                               style="background: var(--bg-dark); color: var(--text-muted);">
                        <small class="form-help">Username cannot be changed</small>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="settings-email" value="${app.currentUser.email}">
                    </div>
                    <button class="btn-primary" onclick="app.dashboard.updateEmail()">
                        <i class="fas fa-save"></i> Save Changes
                    </button>
                </div>
                
                <div class="settings-group">
                    <h4>Change Password</h4>
                    <div class="form-group">
                        <label>Current Password</label>
                        <input type="password" id="settings-current-password">
                    </div>
                    <div class="form-group">
                        <label>New Password</label>
                        <input type="password" id="settings-new-password" minlength="8">
                    </div>
                    <div class="form-group">
                        <label>Confirm New Password</label>
                        <input type="password" id="settings-confirm-password">
                    </div>
                    <button class="btn-primary" onclick="app.dashboard.updatePassword()">
                        <i class="fas fa-key"></i> Change Password
                    </button>
                </div>
                
                <div class="settings-group danger-zone">
                    <h4>Danger Zone</h4>
                    <p style="color: var(--text-muted); margin-bottom: 15px;">
                        Once you delete your account, there is no going back. This will permanently delete all your complaints and data.
                    </p>
                    <button class="btn-danger" onclick="app.dashboard.confirmDeleteAccount()">
                        <i class="fas fa-trash"></i> Delete Account
                    </button>
                </div>
            </div>
        `;
    },
    
    showTab: function(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.closest('.tab-btn').classList.add('active');
        
        // Render tab content
        const content = document.getElementById('dashboard-content');
        
        if (tabName === 'complaints') {
            const userComplaints = DB.complaints.filter(c => c.userId === app.currentUser.id);
            content.innerHTML = this.renderComplaintsTab(userComplaints);
        } else if (tabName === 'activity') {
            content.innerHTML = this.renderActivityTab();
        } else if (tabName === 'settings') {
            content.innerHTML = this.renderSettingsTab();
        }
    },
    
    filterComplaints: function(status) {
        let userComplaints = DB.complaints.filter(c => c.userId === app.currentUser.id);
        
        if (status !== 'all') {
            userComplaints = userComplaints.filter(c => c.status === status);
        }
        
        const listDiv = document.getElementById('user-complaints-list');
        listDiv.innerHTML = userComplaints.map(c => this.renderComplaintItem(c)).join('');
    },
    
    updateEmail: function() {
        const newEmail = document.getElementById('settings-email').value;
        
        if (!newEmail || !newEmail.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        
        app.currentUser.email = newEmail;
        alert('Email updated successfully!');
    },
    
    updatePassword: function() {
        const currentPassword = document.getElementById('settings-current-password').value;
        const newPassword = document.getElementById('settings-new-password').value;
        const confirmPassword = document.getElementById('settings-confirm-password').value;
        
        if (currentPassword !== app.currentUser.password) {
            alert('Current password is incorrect.');
            return;
        }
        
        if (newPassword.length < 8) {
            alert('New password must be at least 8 characters long.');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match.');
            return;
        }
        
        app.currentUser.password = newPassword;
        alert('Password changed successfully!');
        
        // Clear fields
        document.getElementById('settings-current-password').value = '';
        document.getElementById('settings-new-password').value = '';
        document.getElementById('settings-confirm-password').value = '';
    },
    
    confirmDeleteAccount: function() {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.\n\nAll your complaints and data will be permanently deleted.')) {
            if (confirm('This is your final warning. Delete account permanently?')) {
                // Remove user's complaints
                DB.complaints = DB.complaints.filter(c => c.userId !== app.currentUser.id);
                
                // Remove user
                DB.users = DB.users.filter(u => u.id !== app.currentUser.id);
                
                alert('Your account has been deleted.');
                app.logout();
            }
        }
    }
};