export interface AboutPageBody {
  id: number
  slug: string
  title: string
  content: string
  seo_title: string
  seo_description: string
  seo_h1: string
  image: string | null
  is_published: boolean
  created_at: string
  updated_at: string
}
