<template>
  <footer>
    <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About Sweeps</h4>
        <p>Community-driven platform for sweepstakes casino complaints and reviews.</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recent Complaints</a></li>
          <li><a href="#">All Casinos</a></li>
          <li><a href="#">Browse by State</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Community</h4>
        <p>Join thousands of players sharing their experiences.</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-reddit"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Sweeps Complaints Community. Not affiliated with any casino operators.</p>
      <p class="disclaimer">18+ | Gamble Responsibly | This is a community platform for sharing experiences.</p>
    </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 40px 3%;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h4 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: var(--accent-gold);
}

.footer-section p {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.875rem;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: var(--text-muted);
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer-section ul li a:hover {
  color: var(--accent-gold);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-links a {
  width: 40px;
  height: 40px;
  background-color: var(--bg-dark);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}

.social-links a:hover {
  background-color: var(--accent-gold);
  border-color: var(--accent-gold);
  color: var(--bg-dark);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 10px;
}

.disclaimer {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
