<template>
  <select :value="modelValue" class="sort-select" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
    <option value="newest">Newest First</option>
    <option value="oldest">Oldest First</option>
    <option value="mostVoted">Most Upvoted</option>
    <option value="open">Open Only</option>
    <option value="resolved">Resolved Only</option>
  </select>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits(['update:modelValue'])
</script>

<style scoped>
.sort-select {
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border);
  padding: 10px 15px;
  border-radius: var(--radius-sm);
  font-family: 'Chakra Petch', sans-serif;
  cursor: pointer;
}
</style>
