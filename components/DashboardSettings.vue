<template>
  <div class="dashboard-section">
    <h3><i class="fas fa-cog"></i> Account Settings</h3>

    <!-- Profile -->
    <div class="settings-group">
      <h4>Profile Information</h4>
      <div class="form-group">
        <label>Username</label>
        <input type="text" :value="user.username" readonly style="color: var(--text-muted);" />
        <small class="form-help">Username cannot be changed</small>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" />
      </div>
      <button class="btn-primary" @click="saveEmail">
        <i class="fas fa-save"></i> Save Changes
      </button>
    </div>

    <!-- Password -->
    <div class="settings-group">
      <h4>Change Password</h4>
      <div class="form-group">
        <label>Current Password</label>
        <input v-model="passwords.current" type="password" />
      </div>
      <div class="form-group">
        <label>New Password</label>
        <input v-model="passwords.next" type="password" minlength="8" />
      </div>
      <div class="form-group">
        <label>Confirm New Password</label>
        <input v-model="passwords.confirm" type="password" />
        <small v-if="passwordMismatch" class="form-help" style="color: var(--status-open);">Passwords do not match</small>
      </div>
      <button class="btn-primary" @click="savePassword">
        <i class="fas fa-key"></i> Change Password
      </button>
    </div>

    <!-- Danger Zone -->
    <div class="settings-group danger-zone">
      <h4>Danger Zone</h4>
      <p style="color: var(--text-muted); margin-bottom: 15px;">
        Once you delete your account, there is no going back. This will permanently delete all your complaints and data.
      </p>
      <button class="btn-danger" @click="$emit('delete-account')">
        <i class="fas fa-trash"></i> Delete Account
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface User {
  username: string
  email: string
}

const props = defineProps<{ user: User }>()
defineEmits(['delete-account'])

const email = ref(props.user.email)
const passwords = ref({ current: '', next: '', confirm: '' })

const passwordMismatch = computed(() =>
  passwords.value.confirm.length > 0 && passwords.value.next !== passwords.value.confirm,
)

function saveEmail() {
  // save logic placeholder
}

function savePassword() {
  if (passwordMismatch.value) return
  passwords.value = { current: '', next: '', confirm: '' }
}
</script>
