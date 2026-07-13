<template>
  <div class="complaint-card-row" @click="$emit('click')">
    <div class="comp-status-panel" :class="statusClass">
      <i :class="`fas ${statusIcon}`"></i>
      <span class="comp-status-text">{{ statusLabel }}</span>
    </div>

    <div class="comp-info-panel">
      <div class="comp-title">{{ complaint.title }}</div>
      <div class="comp-meta">
        <span class="comp-badge" :class="statusClass">{{ statusLabel }}</span>
        <span v-if="category" class="comp-badge comp-badge--dark">
          <i :class="`fas ${category.icon}`"></i> {{ category.name }}
        </span>
        <span class="comp-date">
          <i class="fas fa-calendar"></i> {{ complaint.date }}
        </span>
        <span v-if="stateName" class="comp-date">
          <i class="fas fa-map-marker-alt"></i> {{ stateName }}
        </span>
      </div>
      <div class="comp-desc">
        {{ complaint.text.substring(0, 150) }}{{ complaint.text.length > 150 ? '...' : '' }}
      </div>
      <div class="comp-footer">
        <span><i class="fas fa-thumbs-up"></i> {{ complaint.upvotes }} upvotes</span>
        <span><i class="fas fa-comment"></i> {{ complaint.replies?.length ?? 0 }} replies</span>
        <span><i class="fas fa-user"></i> {{ complaint.user }}</span>
      </div>
    </div>

    <div class="comp-target-panel">
      <div class="comp-target-logo" :class="casino?.color ?? 'bg-black'">
        {{ casino ? casino.name.substring(0, 2).toUpperCase() : '??' }}
      </div>
      <div class="comp-target-name">{{ casino?.name ?? 'Unknown' }}</div>
      <div class="comp-safety-index">Rating: <strong>{{ casino?.rating ?? 'N/A' }}/10</strong></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Reply {
  id: number
  user: string
  date: string
  text: string
  upvotes: number
}

interface Complaint {
  id: number
  casinoId: string
  stateId: string
  category: string
  title: string
  text: string
  status: 'open' | 'resolved' | 'investigating'
  date: string
  upvotes: number
  user: string
  replies?: Reply[]
}

interface Casino {
  id: string
  name: string
  color: string
  rating: number
}

interface Category {
  id: string
  name: string
  icon: string
}

const props = defineProps<{
  complaint: Complaint
  casino?: Casino
  stateName?: string
  category?: Category
}>()

defineEmits(['click'])

const statusClass = computed(() => ({
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
.complaint-card-row {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 25px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 120px 1fr 200px;
  gap: 25px;
  align-items: start;
  transition: all var(--transition-base);
  cursor: pointer;
}

.complaint-card-row:hover {
  background-color: var(--bg-card-hover);
  border-color: var(--accent-gold);
  transform: translateX(5px);
}

.comp-status-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: var(--radius-md);
  text-align: center;
  gap: 10px;
}

.comp-status-panel i {
  font-size: 32px;
}

.comp-status-text {
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
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

.comp-info-panel {
  flex: 1;
}

.comp-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-main);
}

.comp-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  align-items: center;
}

.comp-badge {
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.comp-badge--dark {
  background: var(--bg-dark);
  color: var(--text-muted);
}

.comp-date {
  color: var(--text-muted);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.comp-desc {
  color: var(--text-light);
  line-height: 1.6;
}

.comp-footer {
  margin-top: 15px;
  display: flex;
  gap: 20px;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.comp-footer span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.comp-target-panel {
  text-align: center;
}

.comp-target-logo {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-weight: 800;
  font-size: 20px;
  color: var(--text-main);
}

.comp-target-name {
  font-weight: 700;
  margin-bottom: 5px;
}

.comp-safety-index {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
