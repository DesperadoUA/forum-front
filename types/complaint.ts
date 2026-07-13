import type { Casino } from './casino'

export type { Casino }

export interface ComplaintCategory {
  id: string
  name: string
  icon: string
}

export interface ComplaintReply {
  id: number
  user: string
  role?: string
  date: string
  text: string
  upvotes: number
}

export interface Complaint {
  id: number
  casinoId: string
  stateId: string
  category?: ComplaintCategory
  title: string
  text: string
  status: 'open' | 'resolved' | 'investigating'
  date: string
  upvotes: number
  user: string
  replies?: ComplaintReply[]
  casino?: Casino
  stateName?: string
}
