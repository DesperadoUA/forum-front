<template>
  <div class="casino-card" @click="$emit('click')">
    <div class="casino-header">
      <div style="display: flex; align-items: center; gap: 15px;">
        <div class="casino-logo" :class="casino.color">
          {{ casino.name.substring(0, 2).toUpperCase() }}
        </div>
        <div class="casino-info">
          <h3>{{ casino.name }}</h3>
          <span class="casino-type">{{ casino.type }}</span>
        </div>
      </div>
    </div>
    <div class="casino-offer">
      <i class="fas fa-gift"></i> {{ casino.offer }}
    </div>
    <div class="casino-stars">
      <template v-for="n in 5" :key="n">
        <i :class="n <= Math.floor(casino.stars) ? 'fas fa-star' : 'far fa-star'"></i>
      </template>
      <span class="stars-label">{{ casino.stars }}/5</span>
    </div>
    <div class="casino-meta">
      <div class="meta-item">
        <span class="meta-value">{{ casino.complaints }}</span>
        <span class="meta-label">Complaints</span>
      </div>
      <div class="meta-item">
        <span class="meta-value">{{ casino.resolved }}</span>
        <span class="meta-label">Resolved</span>
      </div>
      <div class="meta-item">
        <span class="meta-value">{{ Math.round((casino.resolved / casino.complaints) * 100) }}%</span>
        <span class="meta-label">Rate</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Casino {
  id: string
  name: string
  type: string
  color: string
  offer: string
  stars: number
  complaints: number
  resolved: number
}

defineProps<{ casino: Casino }>()
defineEmits(['click'])
</script>

<style scoped>
.casino-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 25px;
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.casino-card:hover {
  background-color: var(--bg-card-hover);
  border-color: var(--accent-gold);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px color-mix(in srgb, var(--bg-darker) 30%, transparent);
}

.casino-logo {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 18px;
  color: var(--text-main);
  flex-shrink: 0;
}

.casino-info h3 {
  margin-bottom: 5px;
  font-size: 1.25rem;
}

.casino-type {
  display: inline-block;
  padding: 4px 12px;
  background-color: var(--bg-dark);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--accent-gold);
}

.casino-offer {
  background-color: var(--bg-dark);
  padding: 12px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  color: var(--accent-gold);
  border: 1px dashed var(--border);
}

.casino-stars {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: var(--accent-gold);
}

.stars-label {
  color: var(--text-muted);
  margin-left: 5px;
  font-size: 0.875rem;
}

.casino-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid var(--border);
}

.meta-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.meta-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
}

.meta-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
}
</style>
