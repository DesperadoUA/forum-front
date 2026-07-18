export interface SelectOption {
  id: number
  title: string
}

export interface CreateComplaintPayload {
  casino_id: number
  state_id: number
  issue_type: string
  title: string
  content: string
}
