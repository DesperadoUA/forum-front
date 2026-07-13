<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal" style="display: flex;" @click.self="close">
      <div class="modal-content modal-large">
        <span class="close-btn" @click="close">&times;</span>

        <h2><i class="fas fa-bullhorn"></i> File a Complaint</h2>
        <p class="subtitle">Share your experience to help the community. All personal information will be kept confidential.</p>

        <form @submit.prevent="submit">

          <!-- Basic Information -->
          <div class="form-section">
            <h3 class="form-section-title"><i class="fas fa-info-circle"></i> Basic Information</h3>
            <div class="form-row">
              <div class="form-group">
                <label>Casino / Sportsbook *</label>
                <select v-model="form.casino" required>
                  <option value="">Select a casino...</option>
                  <option value="funrize">Funrize</option>
                  <option value="stake-us">Stake.us</option>
                  <option value="chumba">Chumba Casino</option>
                  <option value="wowvegas">WOW Vegas</option>
                  <option value="pulsz">Pulsz</option>
                  <option value="mcluck">McLuck</option>
                </select>
              </div>
              <div class="form-group">
                <label>State *</label>
                <select v-model="form.state" required>
                  <option value="">Select your state...</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="NY">New York</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="OH">Ohio</option>
                  <option value="IL">Illinois</option>
                  <option value="GA">Georgia</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Type of Issue *</label>
              <select v-model="form.issueType" required>
                <option value="">Select issue type...</option>
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

          <!-- Complaint Details -->
          <div class="form-section">
            <h3 class="form-section-title"><i class="fas fa-file-alt"></i> Complaint Details</h3>
            <div class="form-group">
              <label>Subject *</label>
              <input v-model="form.title" type="text" placeholder="Brief description of your issue" maxlength="100" required />
              <small class="form-help">Keep it short and descriptive (max 100 characters)</small>
            </div>
            <div class="form-group">
              <label>Complaint *</label>
              <textarea v-model="form.description" rows="8" placeholder="Provide detailed information about your complaint. Include dates, amounts, and any relevant details..." required />
              <small class="form-help">Be as detailed as possible. This will help others understand your situation.</small>
            </div>
          </div>

          <!-- Confidential Information -->
          <div class="form-section confidential-section">
            <h3 class="form-section-title"><i class="fas fa-lock"></i> Confidential Information</h3>
            <div class="privacy-notice">
              <i class="fas fa-shield-alt"></i>
              <div>
                <strong>Privacy Guarantee:</strong> All information in this section will be kept strictly confidential and will NOT be displayed publicly.
                This data is for verification purposes only and may be used to contact you regarding your complaint.
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Real First Name *</label>
                <input v-model="form.firstName" type="text" placeholder="Your first name" required />
              </div>
              <div class="form-group">
                <label>Real Last Name *</label>
                <input v-model="form.lastName" type="text" placeholder="Your last name" required />
              </div>
            </div>
            <div class="form-group">
              <label>Name or ID of the Account Used at This Casino *</label>
              <input v-model="form.accountId" type="text" placeholder="Your username or account ID at the casino" required />
              <small class="form-help">This helps verify your account with the casino</small>
            </div>
            <div class="form-group">
              <label>Email Address Used at the Casino *</label>
              <input v-model="form.casinoEmail" type="email" placeholder="email@example.com" required />
              <small class="form-help">Must match the email registered with the casino</small>
            </div>
          </div>

          <!-- Evidence Upload -->
          <div class="form-section">
            <h3 class="form-section-title"><i class="fas fa-paperclip"></i> Upload Evidence (Optional)</h3>
            <div class="privacy-notice">
              <i class="fas fa-exclamation-triangle"></i>
              <div>
                <strong>Privacy Warning:</strong> Please ensure any uploaded screenshots or documents do NOT contain:
                <ul>
                  <li>Full credit card numbers (you may show last 4 digits only)</li>
                  <li>Social security numbers or tax IDs</li>
                  <li>Full addresses or phone numbers</li>
                  <li>Passwords or security codes</li>
                </ul>
              </div>
            </div>
            <div class="form-group">
              <label>Upload Files</label>
              <div class="file-upload-container">
                <input ref="fileInput" type="file" multiple accept="image/*,.pdf" style="display: none;" @change="onFiles" />
                <button type="button" class="btn-secondary full-width" @click="fileInput?.click()">
                  <i class="fas fa-upload"></i> Choose Files (Images or PDF)
                </button>
                <div class="file-list">
                  <div v-for="(file, i) in files" :key="i" class="file-item">
                    <div class="file-item-info">
                      <i class="fas fa-file"></i>
                      <span class="file-item-name">{{ file.name }}</span>
                      <span class="file-item-size">{{ (file.size / 1024).toFixed(0) }} KB</span>
                    </div>
                    <button type="button" class="file-remove" @click="removeFile(i)">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
              <small class="form-help">Accepted formats: JPG, PNG, GIF, PDF. Max 5 files, 5MB each.</small>
            </div>
          </div>

          <!-- Terms -->
          <div class="form-group">
            <label class="checkbox-label">
              <input v-model="form.terms" type="checkbox" required />
              <span>I confirm that the information provided is accurate and truthful to the best of my knowledge. I understand that false or misleading information may result in my complaint being removed. *</span>
            </label>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary">
              <i class="fas fa-paper-plane"></i> Submit Complaint
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
import { ref } from 'vue'
import { useComplaintModal } from '~/composables/useComplaintModal'

const { isOpen, close } = useComplaintModal()

const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])

const form = ref({
  casino: '',
  state: '',
  issueType: '',
  title: '',
  description: '',
  firstName: '',
  lastName: '',
  accountId: '',
  casinoEmail: '',
  terms: false,
})

function onFiles(e: Event) {
  const input = e.target as HTMLInputElement
  if (!input.files) return
  const added = Array.from(input.files).slice(0, 5 - files.value.length)
  files.value.push(...added)
  input.value = ''
}

function removeFile(index: number) {
  files.value.splice(index, 1)
}

function submit() {
  // submit logic placeholder
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

.privacy-notice ul {
  list-style: disc;
  margin: 5px 0 0 20px;
  padding: 0;
}
</style>
