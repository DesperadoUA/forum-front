<template>
  <div class="state-filter-bar">
    <div class="filter-info">
      <div class="filter-icon"><i class="fas fa-filter"></i></div>
      <div class="filter-text">
        <h4>Filter by State</h4>
        <p>Show complaints from specific state or view all</p>
      </div>
    </div>
    <select :value="modelValue" class="state-select" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option value="">All States</option>
      <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  states: string[]
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>
.state-filter-bar {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.filter-icon {
  font-size: 24px;
  color: var(--accent-gold);
}

.filter-text h4 {
  margin-bottom: 5px;
  font-size: 1rem;
}

.filter-text p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.state-select {
  background: var(--bg-dark);
  color: var(--text-main);
  border: 1px solid var(--border);
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-family: 'Chakra Petch', sans-serif;
  cursor: pointer;
  min-width: 200px;
}
</style>
