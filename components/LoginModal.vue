<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal" style="display: flex;" @click.self="close">
      <div class="modal-content">
        <span class="close-btn" @click="close">&times;</span>

        <h2><i class="fas fa-sign-in-alt"></i> Log In</h2>
        <p class="subtitle">Welcome back! Log in to file a complaint.</p>

        <div class="auth-notice">
          <i class="fas fa-info-circle"></i>
          <div>
            <strong>Don't have an account?</strong>
            <a href="#" class="create-link" @click.prevent="$emit('switch-to-register')">Create one here</a>
          </div>
        </div>

        <p v-if="errorMsg" class="form-error">{{ errorMsg }}</p>

        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="login-email">Email or Username *</label>
            <input
              id="login-email"
              v-model="loginOrEmail"
              type="text"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="login-password">Password *</label>
            <input
              id="login-password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" class="btn-primary full-width" :disabled="pending">
            <i class="fas fa-sign-in-alt"></i>
            {{ pending ? 'Logging in...' : 'Log In' }}
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ApiResponse } from '~/types/api/main'
import { useAuth } from '~/composables/useAuth'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close', 'switch-to-register'])

const config = useRuntimeConfig()
const { setToken } = useAuth()

const loginOrEmail = ref('')
const password = ref('')
const pending = ref(false)
const errorMsg = ref('')

function close() {
  errorMsg.value = ''
  emit('close')
}

async function submit() {
  pending.value = true
  errorMsg.value = ''

  try {
    const res = await $fetch<ApiResponse<{ accessToken: string }>>('/auth/login', {
      baseURL: config.public.apiBase as string,
      method: 'POST',
      body: {
        loginOrEmail: loginOrEmail.value,
        password: password.value,
      },
    })

    if (res.status !== 'ok' || !res.body?.accessToken) {
      errorMsg.value = Array.isArray(res.errors) && res.errors.length
        ? String(res.errors[0])
        : 'Login failed'
      return
    }

    setToken(res.body.accessToken)
    loginOrEmail.value = ''
    password.value = ''
    close()
  } catch (e: unknown) {
    const err = e as { data?: { errors?: unknown[] } }
    errorMsg.value = Array.isArray(err.data?.errors) && err.data.errors.length
      ? String(err.data.errors[0])
      : 'Login failed'
  } finally {
    pending.value = false
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  inset: 0;
  background-color: var(--bg-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
  width: 90%;
  max-width: 480px;
  position: relative;
  animation: modalSlideIn 0.25s ease;
}

@keyframes modalSlideIn {
  from { opacity: 0; transform: translateY(-40px); }
  to   { opacity: 1; transform: translateY(0); }
}

.subtitle {
  color: var(--text-muted);
  margin-bottom: 25px;
}

.create-link {
  color: var(--accent-gold);
  text-decoration: underline;
  margin-left: 4px;
}

.forgot {
  text-align: right;
  margin-bottom: 20px;
}

.forgot a {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.forgot a:hover {
  color: var(--accent-gold);
}

.form-error {
  color: var(--status-open);
  margin-bottom: 16px;
  font-size: 0.875rem;
}
</style>
