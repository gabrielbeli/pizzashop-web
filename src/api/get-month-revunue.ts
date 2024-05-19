import { api } from '@/lib/axios'

export interface GetMonthRevunueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevunue() {
  const response = await api.get<GetMonthRevunueResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
