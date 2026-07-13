<template>
  <nav class="breadcrumbs">
    <template v-for="(item, index) in items" :key="index">
      <span v-if="index < items.length - 1" @click="item.to ? $router.push(item.to) : null">
        {{ item.label }}
      </span>
      <span v-if="index < items.length - 1" class="separator">›</span>
      <span v-else class="current">{{ item.label }}</span>
    </template>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: { label: string; to?: string }[]
}>()
</script>

<style scoped>
.breadcrumbs {
  padding: 15px 20px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.breadcrumbs span {
  color: var(--accent-gold);
  cursor: pointer;
  transition: color var(--transition-fast);
}

.breadcrumbs span:hover {
  color: var(--text-main);
}

.breadcrumbs .current {
  color: var(--text-main);
  cursor: default;
}

.separator {
  color: var(--text-muted);
  cursor: default;
}
</style>
