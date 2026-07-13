<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs
        :items="[
          { label: 'Home', to: '/' },
          { label: 'All Casinos', to: '/casinos' },
          { label: casino.name, to: `/casino/${casino.id}` },
          { label: complaint.title },
        ]"
      />

      <!-- Complaint Header -->
      <ComplaintDetailHeader :complaint="complaint" :casino="casino" />

      <!-- Thread -->
      <ComplaintThread :complaint="complaint" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const casino = {
  id: 'funrize',
  name: 'Funrize',
  color: 'bg-purple',
  rating: 8.5,
}

const complaint = reactive({
  id: 1,
  title: 'Withdrawal Delayed Over 3 Weeks',
  text: 'Documents uploaded 3 days ago, still pending review. Support keeps giving me the runaround. This is completely unacceptable.',
  status: 'open' as 'open' | 'resolved' | 'investigating',
  date: '2026-02-15',
  upvotes: 24,
  user: 'John D.',
  stateName: 'California',
  category: { id: 'withdrawal', name: 'Withdrawal Issues', icon: 'fa-money-bill-wave' },
  replies: [
    {
      id: 1,
      user: 'Sarah M.',
      role: 'member',
      date: '2026-02-15',
      text: 'I had the exact same issue last month. Took me 5 weeks total. Keep escalating to their compliance team directly.',
      upvotes: 8,
    },
    {
      id: 2,
      user: 'SweepsMod',
      role: 'admin',
      date: '2026-02-16',
      text: "We've reached out to Funrize's support team regarding this complaint. Please allow 48–72 hours for a response. We'll update this thread accordingly.",
      upvotes: 15,
    },
    {
      id: 3,
      user: 'Mike R.',
      role: 'member',
      date: '2026-02-17',
      text: 'File a complaint with your state gaming commission if they continue to delay. That usually speeds things up.',
      upvotes: 12,
    },
  ],
})

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
}

.thread-replies h2 {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.thread-replies h2 i {
  color: var(--accent-gold);
}
</style>
