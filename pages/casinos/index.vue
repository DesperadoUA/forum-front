<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'All Casinos' }]" />
      <div>
        <h1>{{ page?.seo_h1 ?? 'All Sweepstakes Casinos' }}</h1>
        <p class="count">{{ page?.casinos_count ?? casinos.length }} casinos available</p>
      </div>

      <p v-if="pending" class="status-msg">Loading...</p>
      <p v-else-if="error" class="status-msg">
        Failed to load data. Make sure API is running on port 3000.
      </p>

      <div v-else class="casinos-grid">
        <CasinoCard
          v-for="casino in casinos"
          :key="casino.id"
          :casino="casino"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import type { CasinosPageBody } from '~/types/api/casinos'
import type { Casino } from '~/types/casino'
import { mapApiCasino } from '~/utils/mapCasino'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch<ApiResponse<CasinosPageBody>>('/pages/casinos', {
  baseURL: config.public.apiBase as string,
  key: 'casinos-page',
})

const page = computed(() => data.value?.body)

const casinos = computed<Casino[]>(() =>
  page.value?.casinos.map(mapApiCasino) ?? [],
)

useSeoMeta({
  title: () => page.value?.seo_title ?? 'All Sweepstakes Casinos',
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

.casinos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}
</style>
