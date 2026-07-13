<template>
  <div class="dashboard-section">
    <div class="section-header">
      <h3><i class="fas fa-list"></i> Your Complaints ({{ filtered.length }})</h3>
      <select v-model="filter" class="filter-select">
        <option value="all">All Status</option>
        <option value="open">Open</option>
        <option value="investigating">Investigating</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>

    <div v-if="filtered.length === 0" class="dashboard-empty">
      <i class="fas fa-inbox" style="font-size: 64px; color: var(--text-muted); margin-bottom: 20px;"></i>
      <h3>No Complaints Yet</h3>
      <p style="color: var(--text-muted); margin-bottom: 25px;">You haven't filed any complaints yet.</p>
      <button class="btn-primary" @click="$emit('new-complaint')">
        <i class="fas fa-bullhorn"></i> File Your First Complaint
      </button>
    </div>

    <NuxtLink
      v-for="complaint in filtered"
      :key="complaint.id"
      :to="`/complaint/${complaint.id}`"
      class="dashboard-complaint-item"
    >
      <div class="complaint-item-header">
        <div>
          <h4>{{ complaint.title }}</h4>
          <div class="complaint-item-meta">
            <span><i class="fas fa-building"></i> {{ complaint.casinoName }}</span>
            <span><i class="fas fa-calendar"></i> {{ complaint.date }}</span>
            <span class="badge" :class="statusClass(complaint.status)">{{ complaint.status }}</span>
          </div>
        </div>
        <div class="complaint-item-stats">
          <div class="stat-mini"><i class="fas fa-thumbs-up"></i> {{ complaint.upvotes }}</div>
          <div class="stat-mini"><i class="fas fa-comment"></i> {{ complaint.replies }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Complaint {
  id: number
  title: string
  casinoName: string
  date: string
  status: 'open' | 'resolved' | 'investigating'
  upvotes: number
  replies: number
}

const props = defineProps<{ complaints: Complaint[] }>()
defineEmits(['new-complaint'])

const filter = ref('all')

const filtered = computed(() => {
  if (filter.value === 'all') return props.complaints
  return props.complaints.filter(c => c.status === filter.value)
})

function statusClass(status: string) {
  return {
    'status-open': status === 'open',
    'status-investigating': status === 'investigating',
    'status-resolved': status === 'resolved',
  }
}
</script>
