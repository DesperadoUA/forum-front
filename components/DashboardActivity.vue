<template>
  <div class="dashboard-section">
    <h3><i class="fas fa-history"></i> Recent Activity</h3>

    <div v-if="activities.length === 0" class="empty-state" style="text-align: center; padding: 40px 0;">
      <i class="fas fa-history" style="font-size: 48px; color: var(--text-muted);"></i>
      <p style="color: var(--text-muted); margin-top: 15px;">No activity yet</p>
    </div>

    <div v-else class="activity-timeline">
      <NuxtLink
        v-for="item in activities"
        :key="`${item.type}-${item.complaintId}-${item.date}`"
        :to="`/complaint/${item.complaintId}`"
        class="activity-item"
      >
        <div class="activity-icon">
          <i :class="`fas ${item.icon}`"></i>
        </div>
        <div class="activity-content">
          <div class="activity-text">{{ item.text }}</div>
          <div class="activity-date">{{ item.date }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Activity {
  type: 'complaint' | 'reply'
  complaintId: number
  icon: string
  text: string
  date: string
}

defineProps<{ activities: Activity[] }>()
</script>
