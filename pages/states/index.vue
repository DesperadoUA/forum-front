<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Browse by State' }]" />

      <div>
        <h1><i class="fas fa-map-marked-alt"></i> Browse by State</h1>
        <p class="subtitle">Select your state to see available casinos and relevant complaints</p>
      </div>

      <div class="states-grid">
        <StateCard
          v-for="state in states"
          :key="state.id"
          :state="state"
          @click="$router.push(`/states/${state.id}`)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const states = [
  { id: 'california', name: 'California', casinos: 8, complaints: 156 },
  { id: 'texas', name: 'Texas', casinos: 8, complaints: 118 },
  { id: 'new-york', name: 'New York', casinos: 8, complaints: 145 },
  { id: 'florida', name: 'Florida', casinos: 7, complaints: 132 },
  { id: 'pennsylvania', name: 'Pennsylvania', casinos: 4, complaints: 89 },
  { id: 'illinois', name: 'Illinois', casinos: 2, complaints: 94 },
  { id: 'ohio', name: 'Ohio', casinos: 2, complaints: 67 },
  { id: 'michigan', name: 'Michigan', casinos: 1, complaints: 76 },
]
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
