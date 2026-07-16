<template>
  <div class="page">
    <HeroSection
      :total-complaints="page?.complaints_count ?? 0"
      :resolved="page?.resolved_count ?? 0"
      :active-casinos="page?.active_casinos ?? 0"
    />
    <BrowseCategories />
    <section class="recent-section">
      <div class="container">
        <div class="recent-header">
          <h2>Recent Complaints</h2>
          <div class="recent-header__filters">
            <SortSelect v-model="sortBy" />
            <span class="todo-badge">TODO: implement filter</span>
          </div>
        </div>

        <p v-if="pending" class="status-msg">Loading...</p>
        <p v-else-if="error" class="status-msg">
          Failed to load data. Make sure API is running on port 3000.
        </p>

        <ComplaintCard
          v-for="complaint in sortedComplaints"
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
import { ref, computed } from 'vue'
import type { ApiResponse, MainPageBody } from '~/types/api/main'
import type { Complaint } from '~/types/complaint'
import { mapApiComplaint } from '~/utils/mapComplaint'

const config = useRuntimeConfig()
const sortBy = ref('newest')

const { data, pending, error } = await useFetch<ApiResponse<MainPageBody>>('/pages/main', {
  baseURL: config.public.apiBase as string,
  query: { complaints_limit: 10 },
  key: 'main-page',
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
  title: () => page.value?.seo_title ?? 'Sweeps',
  description: () => page.value?.seo_description ?? '',
})
</script>

<style scoped>
.recent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.recent-header__filters {
  display: flex;
  align-items: center;
  gap: 12px;
}

.todo-badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-gold);
  border: 1px dashed var(--accent-gold);
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}
</style>
