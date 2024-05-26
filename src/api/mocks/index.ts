import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOderMock } from './cancel-order-mock'
import { deliverOderMock } from './deliver-order-mock'
import { dispatchOderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthRevenueMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getDayOrdersAmountMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOderMock,
  deliverOderMock,
  dispatchOderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
