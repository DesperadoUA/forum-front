<template>
  <div class="page">
    <HeroSection
      :total-complaints="8"
      :resolved="6"
      :active-casinos="4"
    />
    <BrowseCategories />
    <div class="container">
      <SearchBar v-model="searchQuery" />
    </div>
    <section class="recent-section">
      <div class="container">
        <div class="recent-header">
          <h2>Recent Complaints</h2>
          <select v-model="sortBy" class="sort-select">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="mostVoted">Most Upvoted</option>
            <option value="open">Open Only</option>
            <option value="resolved">Resolved Only</option>
          </select>
        </div>
        <ComplaintCard
          v-for="complaint in complaints"
          :key="complaint.id"
          :complaint="complaint"
          :casino="complaint.casino"
          :state-name="complaint.stateName"
          :category="complaint.category"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const sortBy = ref('newest')
const searchQuery = ref('')
const complaints = ref([
  {
    id: 1, casinoId: 'funrize', stateId: 'CA', category: { id: 'withdrawal', name: 'Withdrawal Issues', icon: 'fa-money-bill-wave' },
    title: 'Withdrawal Delayed Over 3 Weeks', text: 'Documents uploaded 3 days ago, still pending review. Support keeps giving me the runaround. This is completely unacceptable.',
    status: 'open', date: '2026-02-15', upvotes: 24, user: 'John D.', replies: [{}, {}, {}],
    casino: { id: 'funrize', name: 'Funrize', color: 'bg-purple', rating: 8.5 }, stateName: 'California',
  },
  {
    id: 2, casinoId: 'stake-us', stateId: 'TX', category: { id: 'game', name: 'Game Malfunction', icon: 'fa-bug' },
    title: 'Game Froze During Big Win', text: 'ETH transaction confirmed on blockchain but not in account. Support fixed it in 2 hours after I opened a ticket.',
    status: 'resolved', date: '2026-02-14', upvotes: 42, user: 'Sarah M.', replies: [{}, {}, {}],
    casino: { id: 'stake-us', name: 'Stake.us', color: 'bg-black', rating: 8.2 }, stateName: 'Texas',
  },
  {
    id: 3, casinoId: 'chumba', stateId: 'NY', category: { id: 'verification', name: 'Account Verification', icon: 'fa-id-card' },
    title: 'KYC Verification Taking Forever', text: 'Account verification process is ridiculous. They keep asking for more documents even though I provided everything.',
    status: 'open', date: '2026-02-13', upvotes: 31, user: 'Mike R.', replies: [{}, {}],
    casino: { id: 'chumba', name: 'Chumba Casino', color: 'bg-blue', rating: 8.7 }, stateName: 'New York',
  },
  {
    id: 4, casinoId: 'wowvegas', stateId: 'FL', category: { id: 'bonus', name: 'Bonus/Promotion', icon: 'fa-gift' },
    title: 'Welcome Bonus Not Applied', text: 'Password reset link was broken. Now working after contacting support via email.',
    status: 'resolved', date: '2026-02-12', upvotes: 18, user: 'Emily K.', replies: [{}, {}],
    casino: { id: 'wowvegas', name: 'WOW Vegas', color: 'bg-gold', rating: 7.8 }, stateName: 'Florida',
  },
  {
    id: 5, casinoId: 'pulsz', stateId: 'CA', category: { id: 'support', name: 'Customer Support', icon: 'fa-headset' },
    title: 'Customer Service Non-Responsive', text: 'No response to emails for 2 weeks. Finally got through via live chat.',
    status: 'investigating', date: '2026-02-11', upvotes: 27, user: 'David L.', replies: [{}, {}],
    casino: { id: 'pulsz', name: 'Pulsz', color: 'bg-purple', rating: 7.9 }, stateName: 'California',
  },
  {
    id: 6, casinoId: 'mcluck', stateId: 'TX', category: { id: 'payment', name: 'Payment Processing', icon: 'fa-credit-card' },
    title: 'Skrill Withdrawal Failed', text: 'Skrill transfer failed twice without reason. Still waiting for resolution.',
    status: 'open', date: '2026-02-10', upvotes: 22, user: 'Lisa T.', replies: [{}],
    casino: { id: 'mcluck', name: 'McLuck', color: 'bg-green', rating: 7.5 }, stateName: 'Texas',
  },
  {
    id: 7, casinoId: 'fliff', stateId: 'IL', category: { id: 'bonus', name: 'Bonus/Promotion', icon: 'fa-gift' },
    title: 'Bonus Terms Not Clear', text: 'Wagering requirements were not clearly stated. Had to contact support for clarification.',
    status: 'resolved', date: '2026-02-09', upvotes: 15, user: 'Robert P.', replies: [{}],
    casino: { id: 'fliff', name: 'Fliff Social Sports', color: 'bg-blue', rating: 8.3 }, stateName: 'Illinois',
  },
  {
    id: 8, casinoId: 'sportzino', stateId: 'OH', category: { id: 'game', name: 'Game Malfunction', icon: 'fa-bug' },
    title: 'Bet Not Credited Properly', text: 'Winning bet on NFL game was not credited to my account. Still in dispute.',
    status: 'investigating', date: '2026-02-08', upvotes: 19, user: 'Chris W.', replies: [{}],
    casino: { id: 'sportzino', name: 'Sportzino', color: 'bg-green', rating: 7.7 }, stateName: 'Ohio',
  },
])
</script>

<style scoped>
.recent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sort-select {
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border);
  padding: 10px 15px;
  border-radius: var(--radius-sm);
  font-family: 'Chakra Petch', sans-serif;
  cursor: pointer;
}
</style>
