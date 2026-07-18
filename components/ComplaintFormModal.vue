<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal" style="display: flex;" @click.self="close">
      <div class="modal-content modal-large">
        <span class="close-btn" @click="close">&times;</span>

        <h2><i class="fas fa-bullhorn"></i> File a Complaint</h2>
        <p class="subtitle">Share your experience to help the community.</p>

        <p v-if="errorMsg" class="form-error">{{ errorMsg }}</p>
        <p v-if="successMsg" class="form-success">{{ successMsg }}</p>

        <form @submit.prevent="submit">
          <div class="form-section">
            <h3 class="form-section-title"><i class="fas fa-info-circle"></i> Basic Information</h3>
            <div class="form-row">
              <div class="form-group">
                <label>Casino / Sportsbook *</label>
                <select v-model.number="form.casino_id" required :disabled="optionsPending">
                  <option :value="0" disabled>Select a casino...</option>
                  <option
                    v-for="casino in casinos"
                    :key="casino.id"
                    :value="casino.id"
                  >
                    {{ casino.title }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>State *</label>
                <select v-model.number="form.state_id" required :disabled="optionsPending">
                  <option :value="0" disabled>Select your state...</option>
                  <option
                    v-for="state in states"
                    :key="state.id"
                    :value="state.id"
                  >
                    {{ state.title }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Type of Issue *</label>
              <select v-model="form.issue_type" required>
                <option value="" disabled>Select issue type...</option>
                <option value="payouts">Payouts and withdrawals (redemption/cashout)</option>
                <option value="verification">Verification and KYC/AML</option>
                <option value="account">Account: blocking, restrictions, access</option>
                <option value="bonuses">Bonuses, promotions, wagering requirements</option>
                <option value="game">Game malfunction or technical issues</option>
                <option value="support">Customer support issues</option>
                <option value="payment">Payment processing problems</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-section">
            <h3 class="form-section-title"><i class="fas fa-file-alt"></i> Complaint Details</h3>
            <div class="form-group">
              <label>Subject *</label>
              <input
                v-model="form.title"
                type="text"
                placeholder="Brief description of your issue"
                maxlength="100"
                required
              />
              <small class="form-help">Keep it short and descriptive (max 100 characters)</small>
            </div>
            <div class="form-group">
              <label>Complaint *</label>
              <textarea
                v-model="form.content"
                rows="8"
                placeholder="Provide detailed information about your complaint. Include dates, amounts, and any relevant details..."
                required
              />
              <small class="form-help">Be as detailed as possible. This will help others understand your situation.</small>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary" :disabled="pending || optionsPending">
              <i class="fas fa-paper-plane"></i>
              {{ pending ? 'Submitting...' : 'Submit Complaint' }}
            </button>
            <button type="button" class="btn-secondary" @click="close">
              <i class="fas fa-times"></i> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ApiResponse, ApiComplaint } from '~/types/api/main'
import type { CreateComplaintPayload, SelectOption } from '~/types/api/create-complaint'
import { useComplaintModal } from '~/composables/useComplaintModal'
import { useAuth } from '~/composables/useAuth'
import { useLoginModal } from '~/composables/useLoginModal'

const config = useRuntimeConfig()
const { isOpen, close: closeModal } = useComplaintModal()
const { accessToken, isLoggedIn, restoreToken } = useAuth()
const { open: openLogin } = useLoginModal()

const casinos = ref<SelectOption[]>([])
const states = ref<SelectOption[]>([])
const optionsPending = ref(false)
const pending = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

const emptyForm = (): CreateComplaintPayload => ({
  casino_id: 0,
  state_id: 0,
  issue_type: '',
  title: '',
  content: '',
})

const form = ref(emptyForm())

function resetForm() {
  form.value = emptyForm()
  errorMsg.value = ''
  successMsg.value = ''
}

function close() {
  resetForm()
  closeModal()
}

async function loadOptions() {
  optionsPending.value = true
  errorMsg.value = ''

  try {
    const [casinosRes, statesRes] = await Promise.all([
      $fetch<ApiResponse<SelectOption[]>>('/casinos', {
        baseURL: config.public.apiBase as string,
      }),
      $fetch<ApiResponse<SelectOption[]>>('/states', {
        baseURL: config.public.apiBase as string,
      }),
    ])

    casinos.value = casinosRes.body ?? []
    states.value = statesRes.body ?? []
  } catch {
    errorMsg.value = 'Failed to load casinos/states. Make sure API is running on port 3000.'
  } finally {
    optionsPending.value = false
  }
}

watch(isOpen, (open) => {
  if (!open) return

  restoreToken()

  if (!isLoggedIn.value) {
    closeModal()
    openLogin()
    return
  }

  resetForm()
  loadOptions()
})

async function submit() {
  if (!form.value.casino_id || !form.value.state_id) {
    errorMsg.value = 'Please select casino and state'
    return
  }

  if (!accessToken.value) {
    closeModal()
    openLogin()
    return
  }

  pending.value = true
  errorMsg.value = ''
  successMsg.value = ''

  try {
    const res = await $fetch<ApiResponse<ApiComplaint>>('/complaints', {
      baseURL: config.public.apiBase as string,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
      body: {
        casino_id: form.value.casino_id,
        state_id: form.value.state_id,
        issue_type: form.value.issue_type,
        title: form.value.title.trim(),
        content: form.value.content.trim(),
      } satisfies CreateComplaintPayload,
    })

    if (res.status !== 'ok' || !res.body) {
      errorMsg.value = Array.isArray(res.errors) && res.errors.length
        ? String(res.errors[0])
        : 'Failed to submit complaint'
      return
    }

    successMsg.value = 'Complaint submitted. It will appear after moderation.'
    const slug = res.body.slug

    setTimeout(() => {
      close()
      if (slug) navigateTo(`/complaint/${slug}`)
    }, 800)
  } catch (e: unknown) {
    const err = e as { data?: { errors?: unknown[] }; statusCode?: number }
    if (err.statusCode === 401 || err.statusCode === 403) {
      errorMsg.value = 'Session expired. Please log in again.'
      openLogin()
      return
    }
    errorMsg.value = Array.isArray(err.data?.errors) && err.data.errors.length
      ? String(err.data.errors[0])
      : 'Failed to submit complaint'
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
  max-width: 800px;
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

.form-error {
  color: var(--status-open);
  margin-bottom: 16px;
  font-size: 0.875rem;
}

.form-success {
  color: var(--status-resolved);
  margin-bottom: 16px;
  font-size: 0.875rem;
}
</style>
