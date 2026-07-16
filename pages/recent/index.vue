<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Recent Complaints' }]" />

      <div class="list-header">
        <h1>{{ page?.seo_h1 ?? 'Recent Complaints' }}</h1>
        <SortSelect v-model="sortBy" />
      </div>

      <p v-if="pending" class="status-msg">Loading...</p>
      <p v-else-if="error" class="status-msg">
        Failed to load data. Make sure API is running on port 3000.
      </p>

      <div v-else class="complaints-list">
        <ComplaintCard
          v-for="complaint in sortedComplaints"
          :key="complaint.id"
          :complaint="complaint"
          :casino="complaint.casino"
          :state-name="complaint.stateName"
          :category="complaint.category"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import type { RecentPageBody } from '~/types/api/recent'
import type { Complaint } from '~/types/complaint'
import { mapApiComplaint } from '~/utils/mapComplaint'

const config = useRuntimeConfig()
const sortBy = ref('newest')

const { data, pending, error } = await useFetch<ApiResponse<RecentPageBody>>('/pages/recent', {
  baseURL: config.public.apiBase as string,
  key: 'recent-page',
})

const page = computed(() => data.value?.body)

const complaints = computed<Complaint[]>(() =>
  page.value?.complaints.map(mapApiComplaint) ?? [],
)

const sortedComplaints = computed(() => {
  const list = [...complaints.value]
  if (sortBy.value === 'newest') return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  if (sortBy.value === 'oldest') return list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  if (sortBy.value === 'mostVoted') return list.sort((a, b) => b.upvotes - a.upvotes)
  if (sortBy.value === 'open') return list.filter(c => c.status === 'open')
  if (sortBy.value === 'resolved') return list.filter(c => c.status === 'resolved')
  return list
})

useSeoMeta({
  title: () => page.value?.seo_title ?? 'Recent Complaints',
  description: () => page.value?.seo_description ?? '',
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 40px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}

.complaints-list {
  display: block;
}
</style>
