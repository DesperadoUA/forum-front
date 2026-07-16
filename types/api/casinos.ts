export interface ApiCasino {
  slug: string
  title: string
  type: string
  color: string
  offer: string | null
  rating: number
  stars: number
  complaints_count: number
  resolved_count: number
  resolution_rate: number
}

export interface CasinosPageBody {
  seo_title: string
  seo_description: string
  seo_h1: string
  casinos_count: number
  casinos: ApiCasino[]
}
