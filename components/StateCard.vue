<template>
  <NuxtLink :to="`/state/${state.id}`" class="state-card">
    <div class="state-icon"><i class="fas fa-map-marker-alt"></i></div>
    <h3>{{ state.name }}</h3>
    <p>{{ state.casinos }} casinos • {{ state.complaints }} complaints</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { State } from '~/types/state'

defineProps<{ state: State }>()
</script>

<style scoped>
.state-card {
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

.state-card::before {
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

.state-card:hover::before {
  transform: scaleX(1);
}

.state-card:hover {
  background-color: var(--bg-card-hover);
  border-color: var(--accent-gold);
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.state-icon {
  font-size: 48px;
  margin-bottom: 15px;
  color: var(--accent-gold);
}

h3 {
  margin-bottom: 10px;
  font-size: 1.25rem;
}

p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}
</style>
