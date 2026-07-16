export interface Casino {
  id: string
  name: string
  color: string
  rating: number
  type?: string
  offer?: string
  stars?: number
  complaints?: number
  resolved?: number
  resolutionRate?: number
  providers?: string[]
  allowedStates?: string[]
}
