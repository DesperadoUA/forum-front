<template>
  <div class="dashboard-stats">
    <div class="stat-card">
      <div class="stat-icon" style="background: rgba(220,38,38,0.1); color: var(--accent-red);">
        <i class="fas fa-exclamation-circle"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number">{{ total }}</div>
        <div class="stat-label">Total Complaints</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: rgba(245,158,11,0.1); color: var(--status-investigating);">
        <i class="fas fa-clock"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number">{{ open }}</div>
        <div class="stat-label">Open / Pending</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: rgba(16,185,129,0.1); color: var(--accent-green);">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number">{{ resolved }}</div>
        <div class="stat-label">Resolved</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: rgba(59,130,246,0.1); color: var(--accent-blue);">
        <i class="fas fa-comment"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number">{{ replies }}</div>
        <div class="stat-label">Replies Posted</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  total: number
  open: number
  resolved: number
  replies: number
}>()
</script>
