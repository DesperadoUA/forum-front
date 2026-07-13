<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'All Casinos', to: '/casinos' }, { label: casino.name }]" />

      <!-- Casino Header -->
      <CasinoDetailHeader
        :casino="casino"
        :complaints-count="complaints.length"
        :resolution-rate="resolutionRate"
      />

      <!-- State Filter -->
      <StateFilter v-model="selectedState" :states="casino.allowedStates" />

      <!-- Complaints -->
      <div class="complaints-header">
        <h2>Complaints ({{ filteredComplaints.length }})</h2>
        <SortSelect v-model="sortBy" />
      </div>

      <ComplaintCard
        v-for="complaint in filteredComplaints"
        :key="complaint.id"
        :complaint="complaint"
        :casino="casino"
        :state-name="complaint.stateName"
        :category="complaint.category"
        @click="$router.push(`/complaint/${complaint.id}`)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const casino = {
  id: 'funrize',
  name: 'Funrize',
  type: 'casino',
  rating: 8.5,
  providers: ['Pragmatic Play', 'NetEnt'],
  allowedStates: ['CA', 'TX', 'FL', 'NY', 'PA'],
}

const sortBy = ref('newest')
const selectedState = ref('')

const complaints = [
  {
    id: 1, casinoId: 'funrize', stateId: 'CA', category: { id: 'withdrawal', name: 'Withdrawal Issues', icon: 'fa-money-bill-wave' },
    title: 'Withdrawal Delayed Over 3 Weeks', text: 'Documents uploaded 3 days ago, still pending review. Support keeps giving me the runaround.',
    status: 'open', date: '2026-02-15', upvotes: 24, user: 'John D.', replies: [{}, {}, {}], stateName: 'California',
  },
]

const filteredComplaints = computed(() => {
  let list = selectedState.value
    ? complaints.filter(c => c.stateId === selectedState.value)
    : [...complaints]

  if (sortBy.value === 'newest') return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  if (sortBy.value === 'oldest') return list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  if (sortBy.value === 'mostVoted') return list.sort((a, b) => b.upvotes - a.upvotes)
  if (sortBy.value === 'open') return list.filter(c => c.status === 'open')
  if (sortBy.value === 'resolved') return list.filter(c => c.status === 'resolved')
  return list
})

const resolutionRate = computed(() => {
  const resolved = complaints.filter(c => c.status === 'resolved').length
  return complaints.length > 0 ? Math.round((resolved / complaints.length) * 100) : 0
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
}



.complaints-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
