import type { ApiState } from '~/types/api/states'
import type { State } from '~/types/state'

export function mapApiState(item: ApiState): State {
  return {
    id: item.slug,
    name: item.title,
    casinos: item.casinos_count,
    complaints: item.complaints_count,
  }
}
