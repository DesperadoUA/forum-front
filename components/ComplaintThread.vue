<template>
  <div class="thread-container">
    <!-- Original Post -->
    <ComplaintPost
      :user="complaint.user"
      :date="complaint.date"
      :text="complaint.text"
      :upvotes="complaint.upvotes"
      :is-original="true"
      @reply="scrollToForm"
    />

    <!-- Replies -->
    <div class="thread-replies">
      <h2><i class="fas fa-comments"></i> {{ complaint.replies.length }} Replies</h2>

      <div v-if="complaint.replies.length === 0" class="empty-state">
        <p>No replies yet. Be the first to respond.</p>
      </div>

      <ComplaintPost
        v-for="reply in complaint.replies"
        :key="reply.id"
        :user="reply.user"
        :date="reply.date"
        :text="reply.text"
        :upvotes="reply.upvotes"
        :role="reply.role"
        @reply="scrollToForm"
      />
    </div>

    <!-- Reply Form -->
    <ComplaintReplyForm ref="formRef" @submit="addReply" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Reply {
  id: number
  user: string
  role: string
  date: string
  text: string
  upvotes: number
}

interface Complaint {
  user: string
  date: string
  text: string
  upvotes: number
  replies: Reply[]
}

const props = defineProps<{
  complaint: Complaint
}>()

const formRef = ref<HTMLElement | null>(null)

function scrollToForm() {
  formRef.value?.$el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function addReply(text: string) {
  props.complaint.replies.push({
    id: props.complaint.replies.length + 1,
    user: 'You',
    role: 'member',
    date: new Date().toISOString().split('T')[0],
    text,
    upvotes: 0,
  })
}
</script>

<style scoped>
.thread-replies h2 {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.thread-replies h2 i {
  color: var(--accent-gold);
}
</style>
