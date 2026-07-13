<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Resolved Complaints' }]" />

      <div>
        <h1><i class="fas fa-check-circle"></i> Resolved Complaints</h1>
        <p class="count">{{ complaints.length }} complaints successfully resolved</p>
      </div>

      <SortSelect v-model="sortBy" />

      <ComplaintCard
        v-for="complaint in sorted"
        :key="complaint.id"
        :complaint="complaint"
        :casino="complaint.casino"
        :state-name="complaint.stateName"
        :category="complaint.category"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Complaint } from '~/types/complaint'

const sortBy = ref('newest')

const complaints: Complaint[] = [
  {
    id: 2, casinoId: 'stake-us', stateId: 'TX',
    category: { id: 'game', name: 'Game Malfunction', icon: 'fa-bug' },
    title: 'Game Froze During Big Win',
    text: 'ETH transaction confirmed on blockchain but not in account. Support fixed it in 2 hours after I opened a ticket.',
    status: 'resolved', date: '2026-02-14', upvotes: 42, user: 'Sarah M.', replies: [{}, {}, {}],
    casino: { id: 'stake-us', name: 'Stake.us', color: 'bg-black', rating: 8.2 }, stateName: 'Texas',
  },
  {
    id: 4, casinoId: 'wowvegas', stateId: 'FL',
    category: { id: 'bonus', name: 'Bonus/Promotion', icon: 'fa-gift' },
    title: 'Welcome Bonus Not Applied',
    text: 'Password reset link was broken. Now working after contacting support via email.',
    status: 'resolved', date: '2026-02-12', upvotes: 18, user: 'Emily K.', replies: [{}, {}],
    casino: { id: 'wowvegas', name: 'WOW Vegas', color: 'bg-gold', rating: 7.8 }, stateName: 'Florida',
  },
  {
    id: 7, casinoId: 'fliff', stateId: 'IL',
    category: { id: 'bonus', name: 'Bonus/Promotion', icon: 'fa-gift' },
    title: 'Bonus Terms Not Clear',
    text: 'Wagering requirements were not clearly stated. Had to contact support for clarification.',
    status: 'resolved', date: '2026-02-09', upvotes: 15, user: 'Robert P.', replies: [{}],
    casino: { id: 'fliff', name: 'Fliff Social Sports', color: 'bg-blue', rating: 8.3 }, stateName: 'Illinois',
  },
]

const sorted = computed(() => {
  const list = [...complaints]
  if (sortBy.value === 'newest') return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  if (sortBy.value === 'oldest') return list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  if (sortBy.value === 'mostVoted') return list.sort((a, b) => b.upvotes - a.upvotes)
  return list
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
}

.count {
  color: var(--text-muted);
  margin-top: 8px;
}
</style>
