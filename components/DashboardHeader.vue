<template>
  <div class="dashboard-header">
    <div class="dashboard-user-info">
      <div class="dashboard-avatar">{{ user.username.charAt(0).toUpperCase() }}</div>
      <div>
        <h1>Welcome back, {{ user.username }}!</h1>
        <p style="color: var(--text-muted); margin: 0;">Member since {{ user.memberSince }}</p>
      </div>
    </div>
    <button class="btn-primary" @click="$emit('new-complaint')">
      <i class="fas fa-plus"></i> New Complaint
    </button>
  </div>
</template>

<script setup lang="ts">
interface User {
  username: string
  memberSince: string
}

defineProps<{ user: User }>()
defineEmits(['new-complaint'])
</script>
