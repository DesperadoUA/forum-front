<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'My Dashboard' }]" />

      <!-- Dashboard Header -->
      <DashboardHeader :user="user" @new-complaint="openComplaint" />

      <!-- Stats -->
      <DashboardStats
        :total="complaints.length"
        :open="openCount"
        :resolved="resolvedCount"
        :replies="totalReplies"
      />

      <!-- Tabs -->
      <DashboardTabs v-model="activeTab" />

      <!-- Tab Content -->
      <DashboardComplaints
        v-if="activeTab === 'complaints'"
        :complaints="complaints"
        @new-complaint="openComplaint"
      />
      <DashboardActivity
        v-else-if="activeTab === 'activity'"
        :activities="activities"
      />
      <DashboardSettings
        v-else-if="activeTab === 'settings'"
        :user="user"
        @delete-account="deleteAccount"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useComplaintModal } from '~/composables/useComplaintModal'

definePageMeta({ middleware: 'auth' })

const { open: openComplaint } = useComplaintModal()

const activeTab = ref('complaints')

const user = {
  username: 'John D.',
  email: 'john@example.com',
  memberSince: 'Feb 2026',
}

const complaints = [
  { id: 1, title: 'Withdrawal Delayed Over 3 Weeks', casinoName: 'Funrize', date: '2026-02-15', status: 'open' as 'open' | 'resolved' | 'investigating', upvotes: 24, replies: 3 },
  { id: 5, title: 'Customer Service Non-Responsive', casinoName: 'Pulsz', date: '2026-02-11', status: 'investigating' as 'open' | 'resolved' | 'investigating', upvotes: 27, replies: 2 },
]

const activities = [
  { type: 'complaint' as const, complaintId: 1, icon: 'fa-bullhorn', text: 'Filed complaint: "Withdrawal Delayed Over 3 Weeks"', date: '2026-02-15' },
  { type: 'reply' as const, complaintId: 5, icon: 'fa-comment', text: 'Replied to "Customer Service Non-Responsive"', date: '2026-02-12' },
]

const openCount = computed(() => complaints.filter(c => c.status === 'open' || c.status === 'investigating').length)
const resolvedCount = computed(() => complaints.filter(c => c.status === 'resolved').length)
const totalReplies = computed(() => activities.filter(a => a.type === 'reply').length)

function deleteAccount() {
  // delete logic placeholder
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
}
</style>
