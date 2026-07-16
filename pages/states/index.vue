<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'All States' }]" />

      <div>
        <h1>{{ page?.seo_h1 ?? 'All States' }}</h1>
        <p class="subtitle">{{ page?.states_count ?? states.length }} states available</p>
      </div>

      <p v-if="pending" class="status-msg">Loading...</p>
      <p v-else-if="error" class="status-msg">
        Failed to load data. Make sure API is running on port 3000.
      </p>

      <div v-else class="states-grid">
        <StateCard
          v-for="state in states"
          :key="state.id"
          :state="state"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import type { StatesPageBody } from '~/types/api/states'
import type { State } from '~/types/state'
import { mapApiState } from '~/utils/mapState'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch<ApiResponse<StatesPageBody>>('/pages/states', {
  baseURL: config.public.apiBase as string,
  key: 'states-page',
})

const page = computed(() => data.value?.body)

const states = computed<State[]>(() =>
  page.value?.states.map(mapApiState) ?? [],
)

useSeoMeta({
  title: () => page.value?.seo_title ?? 'All States',
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

.subtitle {
  color: var(--text-muted);
  margin-top: 8px;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .states-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .states-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}
</style>
