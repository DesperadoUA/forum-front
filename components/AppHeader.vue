<template>
  <header class="header-wrapper">
    <nav class="navbar">
      <NuxtLink to="/" class="logo">
        <i class="fas fa-shield-alt"></i>
        SWEEPS
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/casinos">Casinos</NuxtLink>
        <a href="#">Recent</a>
        <a href="#">Resolved</a>
        <a href="#">About</a>
      </div>
      <div class="auth-buttons">
        <button class="btn-secondary" @click="openLogin">Log In</button>
        <button class="btn-primary">
          <i class="fas fa-bullhorn"></i> File Complaint
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useLoginModal } from '~/composables/useLoginModal'
const { open: openLogin } = useLoginModal()
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px var(--container-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.logo {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
  background: var(--logo-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform var(--transition-fast);
}

.header-wrapper {
  background-color: var(--bg-dark);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.logo:hover {
  transform: scale(1.05);
}

.logo i {
  font-size: 24px;
  color: var(--accent-gold);
  -webkit-text-fill-color: var(--accent-gold);
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color var(--transition-base);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gold);
  transition: width var(--transition-base);
}

.nav-links a:hover {
  color: var(--text-main);
}

.nav-links a:hover::after {
  width: 100%;
}

.auth-buttons {
  display: flex;
  gap: 15px;
}
</style>
