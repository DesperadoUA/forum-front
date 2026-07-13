<template>
  <div class="thread-post" :class="isOriginal ? 'original-post' : 'reply-post'">
    <div class="post-sidebar">
      <div class="post-avatar" :class="{ 'admin-avatar': role === 'admin' }">
        {{ user.substring(0, 1) }}
      </div>
      <div class="post-user-info">
        <div class="post-username">{{ user }}</div>
        <span class="post-role" :class="{ 'admin-role': role === 'admin' }">
          {{ roleLabel }}
        </span>
      </div>
    </div>
    <div class="post-content">
      <div class="post-header">
        <span class="post-date"><i class="fas fa-clock"></i> {{ date }}</span>
      </div>
      <div class="post-body">{{ text }}</div>
      <div class="post-actions">
        <button class="post-action-btn" :class="{ active: upvoted }" @click="toggleUpvote">
          <i class="fas fa-thumbs-up"></i> Upvote ({{ localUpvotes }})
        </button>
        <button class="post-action-btn" @click="$emit('reply')">
          <i class="fas fa-reply"></i> Reply
        </button>
        <button v-if="isOriginal" class="post-action-btn">
          <i class="fas fa-share"></i> Share
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  user: string
  date: string
  text: string
  upvotes: number
  role?: string
  isOriginal?: boolean
}>()

defineEmits(['reply'])

const upvoted = ref(false)
const localUpvotes = ref(props.upvotes)

const roleLabel = computed(() => {
  if (props.isOriginal) return 'Thread Starter'
  return props.role === 'admin' ? 'Moderator' : 'Member'
})

function toggleUpvote() {
  upvoted.value = !upvoted.value
  localUpvotes.value += upvoted.value ? 1 : -1
}
</script>
