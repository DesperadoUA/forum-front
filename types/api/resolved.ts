import type { ApiComplaint } from '~/types/api/main'

export interface ResolvedPageBody {
  id: number
  slug: string
  title: string
  content: string | null
  seo_title: string
  seo_description: string
  seo_h1: string
  image: string | null
  is_published: boolean
  created_at: string
  updated_at: string
  complaints_count: number
  complaints: ApiComplaint[]
}
