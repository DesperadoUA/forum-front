<template>
  <section class="hero-full-width">
    <div class="hero-content">
      <h1>Your Voice in Sweepstakes Casinos</h1>
      <p class="hero-subtitle">Community-driven platform for complaints, reviews, and discussions</p>
      <div class="hero-stats">
        <div class="stat-box">
          <span class="stat-number">{{ totalComplaints }}</span>
          <span class="stat-label">Total Complaints</span>
        </div>
        <div class="stat-box">
          <span class="stat-number">{{ resolved }}</span>
          <span class="stat-label">Resolved</span>
        </div>
        <div class="stat-box">
          <span class="stat-number">{{ activeCasinos }}</span>
          <span class="stat-label">Active Casinos</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  totalComplaints: number
  resolved: number
  activeCasinos: number
}>()
</script>

<style scoped>
.hero-full-width {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-darker) 100%);
  padding: 60px 3%;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.hero-full-width::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, color-mix(in srgb, var(--accent-red) 10%, transparent) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, color-mix(in srgb, var(--accent-gold) 10%, transparent) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--text-main) 0%, var(--accent-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 30px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.stat-box {
  text-align: center;
  padding: 20px;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  min-width: 150px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-gold);
  display: block;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
