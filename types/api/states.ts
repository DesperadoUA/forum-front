export interface ApiState {
  slug: string
  title: string
  casinos_count: number
  complaints_count: number
}

export interface StatesPageBody {
  seo_title: string
  seo_description: string
  seo_h1: string
  states_count: number
  states: ApiState[]
}
