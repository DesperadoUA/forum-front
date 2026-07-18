<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs
        :items="[
          { label: 'Home', to: '/' },
          { label: 'All Casinos', to: '/casinos' },
          { label: page?.casino.title ?? slug },
        ]"
      />

      <p v-if="pending" class="status-msg">Loading...</p>
      <p v-else-if="error || !page" class="status-msg">
        Failed to load data. Make sure API is running on port 3000.
      </p>

      <template v-else>
        <CasinoDetailHeader
          :casino="casino"
          :complaints-count="page.complaints_count"
          :resolution-rate="page.resolution_rate"
          @file-complaint="handleFileComplaint"
        />

        <StateFilter
          v-if="page.states.length"
          v-model="selectedState"
          :states="page.states"
        />

        <div class="complaints-header">
          <h2>Complaints ({{ filteredComplaints.length }})</h2>
          <SortSelect v-model="sortBy" />
        </div>

        <div v-if="filteredComplaints.length" class="complaints-list">
          <ComplaintCard
            v-for="complaint in filteredComplaints"
            :key="complaint.id"
            :complaint="complaint"
            :casino="complaint.casino"
            :state-name="complaint.stateName"
            :category="complaint.category"
          />
        </div>

        <div v-else class="empty-state">
          <i class="fas fa-inbox"></i>
          <h3>
            {{ selectedState ? 'No complaints for this state' : 'No complaints yet' }}
          </h3>
          <p>
            {{
              selectedState
                ? 'No complaints from this state yet'
                : `Be the first to share your experience with ${casino.name}`
            }}
          </p>
          <button class="btn-primary" @click="handleFileComplaint">
            <i class="fas fa-bullhorn"></i> File Complaint
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import type { CasinoPageBody } from '~/types/api/casino'
import type { Casino } from '~/types/casino'
import type { Complaint } from '~/types/complaint'
import { mapApiComplaint } from '~/utils/mapComplaint'
import { useLoginModal } from '~/composables/useLoginModal'
import { useComplaintModal } from '~/composables/useComplaintModal'
import { useAuth } from '~/composables/useAuth'

const route = useRoute()
const config = useRuntimeConfig()
const sortBy = ref('newest')
const selectedState = ref('')

const { open: openLogin } = useLoginModal()
const { open: openComplaint } = useComplaintModal()
const { isLoggedIn } = useAuth()

const slug = computed(() => route.params.id as string)

watch(slug, () => {
  selectedState.value = ''
  sortBy.value = 'newest'
})

const { data, pending, error } = await useFetch<ApiResponse<CasinoPageBody>>(
  () => `/casino/${slug.value}`,
  {
    baseURL: config.public.apiBase as string,
    key: () => `casino-${slug.value}`,
    watch: [slug],
  },
)

const page = computed(() => data.value?.body)

const casino = computed<Casino>(() => {
  const item = page.value?.casino
  return {
    id: item?.slug ?? slug.value,
    name: item?.title ?? slug.value,
    type: item?.type,
    color: item?.color ?? 'bg-black',
    offer: item?.offer ?? undefined,
    rating: item?.rating ?? 0,
    stars: item?.stars,
  }
})

const complaints = computed<Complaint[]>(() =>
  page.value?.complaints.map(mapApiComplaint) ?? [],
)

const filteredComplaints = computed(() => {
  let list = selectedState.value
    ? complaints.value.filter(c => c.stateId === selectedState.value)
    : [...complaints.value]

  if (sortBy.value === 'newest') return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  if (sortBy.value === 'oldest') return list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  if (sortBy.value === 'mostVoted') return list.sort((a, b) => b.upvotes - a.upvotes)
  if (sortBy.value === 'open') return list.filter(c => c.status === 'open')
  if (sortBy.value === 'resolved') return list.filter(c => c.status === 'resolved')
  return list
})

function handleFileComplaint() {
  if (isLoggedIn.value) {
    openComplaint()
  } else {
    openLogin()
  }
}

useSeoMeta({
  title: () => page.value?.seo_title ?? page.value?.casino.title ?? 'Casino',
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

.complaints-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.complaints-list {
  display: block;
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  color: var(--text-muted);
}

.empty-state i {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: var(--text-main);
  margin-bottom: 8px;
}

.empty-state p {
  margin-bottom: 20px;
}
</style>
