<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal" style="display: flex;" @click.self="close">
      <div class="modal-content">
        <span class="close-btn" @click="close">&times;</span>

        <h2><i class="fas fa-user-plus"></i> Create Account</h2>
        <p class="subtitle">To file a complaint, you need to create an account. This helps us verify complaints and prevent spam.</p>

        <div class="auth-notice">
          <i class="fas fa-info-circle"></i>
          <div>
            <strong>Already have an account?</strong>
            <a href="#" class="switch-link" @click.prevent="$emit('switch-to-login')">Log in here</a>
          </div>
        </div>

        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="reg-username">Username *</label>
            <input id="reg-username" v-model="form.username" type="text" placeholder="Choose a username" required />
            <small class="form-help">This will be visible to other users</small>
          </div>

          <div class="form-group">
            <label for="reg-email">Email Address *</label>
            <input id="reg-email" v-model="form.email" type="email" placeholder="your@email.com" required />
            <small class="form-help">For account verification and notifications</small>
          </div>

          <div class="form-group">
            <label for="reg-password">Password *</label>
            <input id="reg-password" v-model="form.password" type="password" placeholder="Create a strong password" minlength="8" required />
            <small class="form-help">Minimum 8 characters</small>
          </div>

          <div class="form-group">
            <label for="reg-password-confirm">Confirm Password *</label>
            <input id="reg-password-confirm" v-model="form.passwordConfirm" type="password" placeholder="Re-enter your password" required />
            <small v-if="passwordMismatch" class="form-help error">Passwords do not match</small>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input v-model="form.terms" type="checkbox" required />
              <span>
                I agree to the
                <a href="#" class="switch-link">Terms of Service</a>
                and
                <a href="#" class="switch-link">Privacy Policy</a> *
              </span>
            </label>
          </div>

          <button type="submit" class="btn-primary full-width">
            <i class="fas fa-check"></i> Create Account
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close', 'switch-to-login'])

const form = ref({
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  terms: false,
})

const passwordMismatch = computed(() =>
  form.value.passwordConfirm.length > 0 && form.value.password !== form.value.passwordConfirm,
)

function close() {
  emit('close')
}

function submit() {
  if (passwordMismatch.value) return
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
  max-height: 90vh;
  overflow-y: auto;
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

.switch-link {
  color: var(--accent-gold);
  text-decoration: underline;
  margin-left: 4px;
}

.error {
  color: var(--status-open);
}
</style>
