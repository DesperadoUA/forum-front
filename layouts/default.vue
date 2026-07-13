<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
    <LoginModal
      :is-open="login.isOpen.value"
      @close="login.close"
      @switch-to-register="switchToRegister"
    />
    <RegisterModal
      :is-open="register.isOpen.value"
      @close="register.close"
      @switch-to-login="switchToLogin"
    />
  </div>
</template>

<script setup lang="ts">
import { useLoginModal } from '~/composables/useLoginModal'
import { useRegisterModal } from '~/composables/useRegisterModal'

const login = useLoginModal()
const register = useRegisterModal()

function switchToRegister() {
  login.close()
  register.open()
}

function switchToLogin() {
  register.close()
  login.open()
}
</script>
