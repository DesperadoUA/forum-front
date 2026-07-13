<template>
  <div class="complaint-detail-header">
    <div class="header-badges">
      <span class="comp-status-badge" :class="statusBadgeClass">
        <i :class="`fas ${statusIcon}`"></i> {{ statusLabel }}
      </span>
      <span class="comp-category-badge">
        <i :class="`fas ${complaint.category.icon}`"></i> {{ complaint.category.name }}
      </span>
    </div>
    <h1>{{ complaint.title }}</h1>
    <div class="complaint-detail-meta">
      <span class="meta-item"><i class="fas fa-user"></i> {{ complaint.user }}</span>
      <span class="meta-item"><i class="fas fa-calendar"></i> {{ complaint.date }}</span>
      <span class="meta-item"><i class="fas fa-map-marker-alt"></i> {{ complaint.stateName }}</span>
      <span class="meta-item">
        <i class="fas fa-building"></i>
        <NuxtLink :to="`/casino/${casino.id}`" class="casino-link">{{ casino.name }}</NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Category {
  id: string
  name: string
  icon: string
}

interface Complaint {
  title: string
  user: string
  date: string
  stateName: string
  status: 'open' | 'resolved' | 'investigating'
  category: Category
}

interface Casino {
  id: string
  name: string
}

const props = defineProps<{
  complaint: Complaint
  casino: Casino
}>()

const statusBadgeClass = computed(() => ({
  'bg-status-open': props.complaint.status === 'open',
  'bg-status-resolved': props.complaint.status === 'resolved',
  'bg-status-investigating': props.complaint.status === 'investigating',
}))

const statusLabel = computed(() => ({
  open: 'Open',
  resolved: 'Resolved',
  investigating: 'Investigating',
}[props.complaint.status]))

const statusIcon = computed(() => ({
  open: 'fa-hourglass-half',
  resolved: 'fa-check',
  investigating: 'fa-search',
}[props.complaint.status]))
</script>

<style scoped>
.header-badges {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

h1 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.bg-status-open {
  background-color: color-mix(in srgb, var(--status-open) 15%, transparent);
  color: var(--status-open);
  border: 1px solid var(--status-open);
}

.bg-status-resolved {
  background-color: color-mix(in srgb, var(--status-resolved) 15%, transparent);
  color: var(--status-resolved);
  border: 1px solid var(--status-resolved);
}

.bg-status-investigating {
  background-color: color-mix(in srgb, var(--status-investigating) 15%, transparent);
  color: var(--status-investigating);
  border: 1px solid var(--status-investigating);
}

.casino-link {
  color: var(--accent-gold);
}

.casino-link:hover {
  text-decoration: underline;
}
</style>
