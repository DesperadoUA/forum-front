import type { ApiCasino } from '~/types/api/casinos'
import type { Casino } from '~/types/casino'

export function mapApiCasino(item: ApiCasino): Casino {
  return {
    id: item.slug,
    name: item.title,
    type: item.type,
    color: item.color,
    offer: item.offer ?? undefined,
    rating: item.rating,
    stars: item.stars,
    complaints: item.complaints_count,
    resolved: item.resolved_count,
    resolutionRate: item.resolution_rate,
  }
}
