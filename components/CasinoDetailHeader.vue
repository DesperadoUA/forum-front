<template>
  <div class="casino-detail-header">
    <div class="casino-detail-info">
      <h1>{{ casino.name }}</h1>
      <div class="casino-detail-meta">
        <div class="meta-tag"><i class="fas fa-star"></i> {{ casino.rating }}/10 Rating</div>
        <div class="meta-tag"><i class="fas fa-exclamation-circle"></i> {{ complaintsCount }} Complaints</div>
        <div class="meta-tag"><i class="fas fa-check-circle"></i> {{ resolutionRate }}% Resolved</div>
        <div class="meta-tag"><i class="fas fa-tag"></i> {{ casino.type }}</div>
      </div>
      <div class="casino-tags">
        <span v-for="tag in casino.providers" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    <button class="btn-primary" @click="$emit('file-complaint')">
      <i class="fas fa-bullhorn"></i> File Complaint
    </button>
  </div>
</template>

<script setup lang="ts">
interface Casino {
  name: string
  type: string
  rating: number
  providers: string[]
}

defineProps<{
  casino: Casino
  complaintsCount: number
  resolutionRate: number
}>()

defineEmits(['file-complaint'])
</script>

<style scoped>
.casino-detail-header {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.casino-detail-info h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.casino-detail-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.meta-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--bg-dark);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  border: 1px solid var(--border);
}

.casino-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 14px;
  background-color: var(--bg-dark);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  color: var(--accent-gold);
  border: 1px solid var(--border);
}
</style>
