import type { ApiComplaint } from '~/types/api/main'
import type { Complaint } from '~/types/complaint'

export function mapApiComplaint(item: ApiComplaint): Complaint {
  return {
    id: item.id,
    slug: item.slug,
    casinoId: item.casino.slug,
    stateId: item.state.slug,
    category: item.category,
    title: item.title,
    text: item.content,
    status: item.status,
    date: item.date,
    upvotes: item.upvotes,
    repliesCount: item.replies_count,
    user: item.user.display_name,
    casino: {
      id: item.casino.slug,
      name: item.casino.title,
      color: item.casino.color,
      rating: item.casino.rating,
      type: item.casino.type,
    },
    stateName: item.state.title,
  }
}
