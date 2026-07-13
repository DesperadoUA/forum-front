<template>
  <div class="search-wrapper">
    <input
      type="text"
      class="search-input"
      placeholder="Search for casinos, states, or games..."
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <i class="fas fa-search search-icon"></i>
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits(['update:modelValue'])
</script>

<style scoped>
.search-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 16px 50px 16px 20px;
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: var(--text-main);
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1rem;
  transition: border-color var(--transition-fast);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-gold);
}

.search-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 20px;
}
</style>
