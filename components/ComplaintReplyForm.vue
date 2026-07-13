<template>
  <div class="reply-form-container">
    <h3><i class="fas fa-pen"></i> Post a Reply</h3>
    <div class="form-group" style="margin-top: 20px;">
      <label>Your Reply</label>
      <textarea
        v-model="text"
        placeholder="Share your experience or provide helpful information..."
        rows="5"
      />
    </div>
    <div class="form-actions">
      <button class="btn-secondary" @click="text = ''">Cancel</button>
      <button class="btn-primary" @click="submit">
        <i class="fas fa-paper-plane"></i> Post Reply
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  submit: [text: string]
}>()

const text = ref('')

function submit() {
  if (!text.value.trim()) return
  emit('submit', text.value)
  text.value = ''
}
</script>
