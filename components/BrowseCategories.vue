<template>
  <section class="browse-section">
    <div class="container">
    <h2>How Would You Like to Browse?</h2>
    <div class="grid-cards">
      <div class="cat-card" v-for="item in categories" :key="item.id" @click="item.onClick">
        <div class="cat-icon">
          <i :class="`fas ${item.icon}`"></i>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { id: 'casinos', icon: 'fa-dice', title: 'All Casinos', description: 'Browse complete list', onClick: () => {} },
  { id: 'states', icon: 'fa-map-marked-alt', title: 'By State', description: 'Find legal sites', onClick: () => {} },
  { id: 'games', icon: 'fa-gamepad', title: 'By Game', description: 'Find specific games', onClick: () => {} },
  { id: 'providers', icon: 'fa-server', title: 'By Provider', description: 'Software providers', onClick: () => {} },
  { id: 'sportsbooks', icon: 'fa-trophy', title: 'Sportsbooks', description: 'Betting platforms', onClick: () => {} },
]
</script>

<style scoped>
.browse-section {
  padding: 0;
}

.grid-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin: 30px 0;
}

@media (max-width: 1024px) {
  .grid-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.cat-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.cat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--logo-gradient);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.cat-card:hover::before {
  transform: scaleX(1);
}

.cat-card:hover {
  background-color: var(--bg-card-hover);
  border-color: var(--accent-gold);
  transform: translateY(-5px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--bg-darker) 40%, transparent);
}

.cat-icon {
  font-size: 48px;
  margin-bottom: 15px;
  color: var(--accent-gold);
}

.cat-card h3 {
  margin-bottom: 10px;
  font-size: 1.25rem;
}

.cat-card p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}
</style>
