<template>
  <div class="state-header">
    <div class="state-header-info">
      <div class="state-icon"><i class="fas fa-map-marker-alt"></i></div>
      <div>
        <h1>{{ state.name }}</h1>
        <div class="state-meta">
          <span class="meta-tag"><i class="fas fa-dice"></i> {{ state.casinos }} Casinos</span>
          <span class="meta-tag"><i class="fas fa-exclamation-circle"></i> {{ complaintsCount }} Complaints</span>
          <span class="meta-tag"><i class="fas fa-check-circle"></i> {{ resolutionRate }}% Resolved</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface State {
  name: string
  casinos: number
}

defineProps<{
  state: State
  complaintsCount: number
  resolutionRate: number
}>()
</script>

<style scoped>
.state-header {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
}

.state-header-info {
  display: flex;
  align-items: center;
  gap: 24px;
}

.state-icon {
  font-size: 56px;
  color: var(--accent-gold);
  line-height: 1;
}

h1 {
  margin-bottom: 16px;
}

.state-meta {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.meta-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--bg-dark);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  border: 1px solid var(--border);
}
</style>
