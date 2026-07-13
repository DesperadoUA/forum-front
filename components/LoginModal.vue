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

        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="login-email">Email Address *</label>
            <input
              id="login-email"
              v-model="email"
              type="email"
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

          <button type="submit" class="btn-primary full-width">
            <i class="fas fa-sign-in-alt"></i> Log In
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close', 'switch-to-register'])

const email = ref('')
const password = ref('')

function close() {
  emit('close')
}

function submit() {
  // auth logic placeholder
  close()
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
</style>
