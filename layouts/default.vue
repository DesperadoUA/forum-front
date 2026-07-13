<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
    <LoginModal :is-open="isOpen" @close="close" />
  </div>
</template>

<script setup lang="ts">
import { useLoginModal } from '~/composables/useLoginModal'
const { isOpen, close } = useLoginModal()
</script>
