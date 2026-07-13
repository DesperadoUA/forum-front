<template>
  <div class="page">
    <div class="container content">
      <Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'All Casinos' }]" />
      <div>
        <h1>All Sweepstakes Casinos</h1>
        <p class="count">{{ casinos.length }} casinos available</p>
      </div>
      <div class="casinos-grid">
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
const casinos = [
  { id: 'funrize', name: 'Funrize', type: 'casino', color: 'bg-purple', offer: '3,600 Entries FREE + 1.225M Coins', stars: 4.5, complaints: 45, resolved: 32 },
  { id: 'stake-us', name: 'Stake.us', type: 'casino', color: 'bg-black', offer: '25 SC No Deposit Bonus', stars: 4.2, complaints: 38, resolved: 29 },
  { id: 'chumba', name: 'Chumba Casino', type: 'casino', color: 'bg-blue', offer: '2M GC + 2 SC FREE', stars: 4.5, complaints: 124, resolved: 95 },
  { id: 'wowvegas', name: 'WOW Vegas', type: 'casino', color: 'bg-gold', offer: '1.75M WOW Coins + 35 SC', stars: 4.0, complaints: 45, resolved: 35 },
  { id: 'pulsz', name: 'Pulsz', type: 'casino', color: 'bg-purple', offer: '5,000 GC + 2 SC Welcome', stars: 4.0, complaints: 41, resolved: 30 },
  { id: 'mcluck', name: 'McLuck', type: 'casino', color: 'bg-green', offer: 'Up to 200k GC + 100 SC', stars: 3.8, complaints: 67, resolved: 48 },
]
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
</style>
