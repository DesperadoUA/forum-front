<template>
  <div class="dashboard-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-btn"
      :class="{ active: modelValue === tab.id }"
      @click="$emit('update:modelValue', tab.id)"
    >
      <i :class="`fas ${tab.icon}`"></i> {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits(['update:modelValue'])

const tabs = [
  { id: 'complaints', icon: 'fa-list', label: 'My Complaints' },
  { id: 'activity', icon: 'fa-history', label: 'Activity' },
  { id: 'settings', icon: 'fa-cog', label: 'Settings' },
]
</script>
