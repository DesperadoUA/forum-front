import type { ComplaintCategory } from '~/types/complaint'

export interface ApiResponse<T> {
  errors: unknown[]
  status: string
  body: T
}

export interface ApiComplaintUser {
  login: string
  display_name: string
}

export interface ApiComplaintCasino {
  slug: string
  title: string
  rating: number
  color: string
  type: string
}

export interface ApiComplaintState {
  slug: string
  title: string
}

export interface ApiComplaint {
  id: number
  slug: string
  title: string
  content: string
  created_at: string
  date: string
  status: 'open' | 'resolved' | 'investigating'
  issue_type: string
  category: ComplaintCategory
  upvotes: number
  replies_count: number
  user: ApiComplaintUser
  casino: ApiComplaintCasino
  state: ApiComplaintState
}

export interface MainPageBody {
  seo_title: string
  seo_description: string
  seo_h1: string
  complaints_count: number
  resolved_count: number
  resolution_rate: number
  active_casinos: number
  complaints: ApiComplaint[]
}
