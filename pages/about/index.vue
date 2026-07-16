<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'About' }]" />

      <div>
        <h1>{{ page?.seo_h1 ?? 'About Sweeps Community' }}</h1>
      </div>

      <p v-if="pending" class="status-msg">Loading...</p>
      <p v-else-if="error" class="status-msg">
        Failed to load data. Make sure API is running on port 3000.
      </p>

      <div
        v-else-if="page?.content"
        class="about-body"
        v-html="page.content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import type { AboutPageBody } from '~/types/api/about'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch<ApiResponse<AboutPageBody>>('/pages/about', {
  baseURL: config.public.apiBase as string,
  key: 'about-page',
})

const page = computed(() => data.value?.body)

useSeoMeta({
  title: () => page.value?.seo_title ?? 'About Sweeps Community',
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

.about-body {
  color: var(--text-muted);
  line-height: 1.8;
}

.about-body :deep(p) {
  margin-bottom: 20px;
}

.about-body :deep(h2),
.about-body :deep(h3) {
  margin-top: 40px;
  margin-bottom: 16px;
  color: var(--text-main);
  font-size: 1.25rem;
}

.about-body :deep(ol) {
  padding-left: 20px;
  line-height: 1.8;
}

.about-body :deep(li) {
  margin-bottom: 8px;
}

.status-msg {
  color: var(--text-muted);
  padding: 20px 0;
}
</style>
