<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Resolved Complaints' }]" />

      <div>
        <h1>{{ page?.seo_h1 ?? 'Resolved Complaints' }}</h1>
        <p class="count">
          {{ page?.complaints_count ?? complaints.length }} complaints successfully resolved
        </p>
      </div>

      <p v-if="pending" class="status-msg">Loading...</p>
      <p v-else-if="error" class="status-msg">
        Failed to load data. Make sure API is running on port 3000.
      </p>

      <div v-else class="complaints-list">
        <ComplaintCard
          v-for="complaint in complaints"
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
import { computed } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import type { ResolvedPageBody } from '~/types/api/resolved'
import type { Complaint } from '~/types/complaint'
import { mapApiComplaint } from '~/utils/mapComplaint'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch<ApiResponse<ResolvedPageBody>>('/pages/resolved', {
  baseURL: config.public.apiBase as string,
  key: 'resolved-page',
})

const page = computed(() => data.value?.body)

const complaints = computed<Complaint[]>(() =>
  page.value?.complaints.map(mapApiComplaint) ?? [],
)

useSeoMeta({
  title: () => page.value?.seo_title ?? 'Resolved Complaints',
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

.count {
  color: var(--text-muted);
  margin-top: 8px;
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}

.complaints-list {
  display: block;
}
</style>
