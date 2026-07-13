<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs
        :items="[
          { label: 'Home', to: '/' },
          { label: 'All States', to: '/states' },
          { label: state.name },
        ]"
      />

      <!-- State Header -->
      <StateDetailHeader
        :state="state"
        :complaints-count="complaints.length"
        :resolution-rate="resolutionRate"
      />

      <!-- Casinos in State -->
      <div>
        <h2>Casinos Available in {{ state.name }}</h2>
        <div class="casinos-grid">
          <CasinoCard
            v-for="casino in state.casinoList"
            :key="casino.id"
            :casino="casino"
          />
        </div>
      </div>

      <!-- Complaints -->
      <div>
        <div class="complaints-header">
          <h2>Complaints ({{ complaints.length }})</h2>
          <SortSelect v-model="sortBy" />
        </div>
        <ComplaintCard
          v-for="complaint in sortedComplaints"
          :key="complaint.id"
          :complaint="complaint"
          :casino="complaint.casino"
          :state-name="state.name"
          :category="complaint.category"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const route = useRoute()
const state_id = route.params.state as string

const statesData: Record<string, {
  name: string
  casinos: number
  casinoList: { id: string; name: string; type: string; color: string; offer: string; stars: number; complaints: number; resolved: number }[]
}> = {
  california: {
    name: 'California', casinos: 8,
    casinoList: [
      { id: 'funrize', name: 'Funrize', type: 'casino', color: 'bg-purple', offer: '3,600 Entries FREE + 1.225M Coins', stars: 4.5, complaints: 45, resolved: 32 },
      { id: 'stake-us', name: 'Stake.us', type: 'casino', color: 'bg-black', offer: '25 SC No Deposit Bonus', stars: 4.2, complaints: 38, resolved: 29 },
      { id: 'pulsz', name: 'Pulsz', type: 'casino', color: 'bg-purple', offer: '5,000 GC + 2 SC Welcome', stars: 4.0, complaints: 41, resolved: 30 },
    ],
  },
  texas: {
    name: 'Texas', casinos: 8,
    casinoList: [
      { id: 'stake-us', name: 'Stake.us', type: 'casino', color: 'bg-black', offer: '25 SC No Deposit Bonus', stars: 4.2, complaints: 38, resolved: 29 },
      { id: 'mcluck', name: 'McLuck', type: 'casino', color: 'bg-green', offer: 'Up to 200k GC + 100 SC', stars: 3.8, complaints: 67, resolved: 48 },
    ],
  },
  'new-york': {
    name: 'New York', casinos: 8,
    casinoList: [
      { id: 'chumba', name: 'Chumba Casino', type: 'casino', color: 'bg-blue', offer: '2M GC + 2 SC FREE', stars: 4.5, complaints: 124, resolved: 95 },
      { id: 'wowvegas', name: 'WOW Vegas', type: 'casino', color: 'bg-gold', offer: '1.75M WOW Coins + 35 SC', stars: 4.0, complaints: 45, resolved: 35 },
    ],
  },
  florida: {
    name: 'Florida', casinos: 7,
    casinoList: [
      { id: 'wowvegas', name: 'WOW Vegas', type: 'casino', color: 'bg-gold', offer: '1.75M WOW Coins + 35 SC', stars: 4.0, complaints: 45, resolved: 35 },
      { id: 'chumba', name: 'Chumba Casino', type: 'casino', color: 'bg-blue', offer: '2M GC + 2 SC FREE', stars: 4.5, complaints: 124, resolved: 95 },
    ],
  },
  pennsylvania: {
    name: 'Pennsylvania', casinos: 4,
    casinoList: [
      { id: 'funrize', name: 'Funrize', type: 'casino', color: 'bg-purple', offer: '3,600 Entries FREE + 1.225M Coins', stars: 4.5, complaints: 45, resolved: 32 },
    ],
  },
  illinois: {
    name: 'Illinois', casinos: 2,
    casinoList: [
      { id: 'mcluck', name: 'McLuck', type: 'casino', color: 'bg-green', offer: 'Up to 200k GC + 100 SC', stars: 3.8, complaints: 67, resolved: 48 },
    ],
  },
  ohio: {
    name: 'Ohio', casinos: 2,
    casinoList: [
      { id: 'pulsz', name: 'Pulsz', type: 'casino', color: 'bg-purple', offer: '5,000 GC + 2 SC Welcome', stars: 4.0, complaints: 41, resolved: 30 },
    ],
  },
  michigan: {
    name: 'Michigan', casinos: 1,
    casinoList: [
      { id: 'chumba', name: 'Chumba Casino', type: 'casino', color: 'bg-blue', offer: '2M GC + 2 SC FREE', stars: 4.5, complaints: 124, resolved: 95 },
    ],
  },
}

const state = statesData[state_id] ?? { name: state_id, casinos: 0, casinoList: [] }

const sortBy = ref('newest')

const complaints: { id: number; casinoId: string; stateId: string; category: { id: string; name: string; icon: string }; title: string; text: string; status: 'open' | 'resolved' | 'investigating'; date: string; upvotes: number; user: string; replies: unknown[]; casino: { id: string; name: string; color: string; rating: number } }[] = [
  {
    id: 1, casinoId: 'funrize', stateId: 'CA',
    category: { id: 'withdrawal', name: 'Withdrawal Issues', icon: 'fa-money-bill-wave' },
    title: 'Withdrawal Delayed Over 3 Weeks',
    text: 'Documents uploaded 3 days ago, still pending review. Support keeps giving me the runaround.',
    status: 'open', date: '2026-02-15', upvotes: 24, user: 'John D.', replies: [{}, {}, {}],
    casino: { id: 'funrize', name: 'Funrize', color: 'bg-purple', rating: 8.5 },
  },
  {
    id: 5, casinoId: 'pulsz', stateId: 'CA',
    category: { id: 'support', name: 'Customer Support', icon: 'fa-headset' },
    title: 'Customer Service Non-Responsive',
    text: 'No response to emails for 2 weeks. Finally got through via live chat.',
    status: 'investigating', date: '2026-02-11', upvotes: 27, user: 'David L.', replies: [{}, {}],
    casino: { id: 'pulsz', name: 'Pulsz', color: 'bg-purple', rating: 7.9 },
  },
]

const resolutionRate = computed(() => {
  const resolved = complaints.filter(c => c.status === 'resolved').length
  return complaints.length > 0 ? Math.round((resolved / complaints.length) * 100) : 0
})

const sortedComplaints = computed(() => {
  const list = [...complaints]
  if (sortBy.value === 'newest') return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  if (sortBy.value === 'oldest') return list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  if (sortBy.value === 'mostVoted') return list.sort((a, b) => b.upvotes - a.upvotes)
  if (sortBy.value === 'open') return list.filter(c => c.status === 'open')
  if (sortBy.value === 'resolved') return list.filter(c => c.status === 'resolved')
  return list
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 40px;
}

.state-header {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
}


.casinos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.complaints-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
