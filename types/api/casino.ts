import type { ApiComplaint } from '~/types/api/main'

export interface ApiCasinoState {
  slug: string
  title: string
}

export interface ApiCasinoDetail {
  slug: string
  title: string
  type: string
  color: string
  offer: string | null
  rating: number
  stars: number
  description: string | null
}

export interface CasinoPageBody {
  seo_title: string | null
  seo_description: string | null
  seo_h1: string
  casino: ApiCasinoDetail
  complaints_count: number
  resolved_count: number
  resolution_rate: number
  states: ApiCasinoState[]
  complaints: ApiComplaint[]
}
