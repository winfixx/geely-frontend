import CarsService from '@/core/services/CarsService'
import type { IFooterColumns } from './IFooterColumns'
import { toCustomers } from './columns/toCustomers'
import { toOwners } from './columns/toOwners'
import { aboutGeely } from './columns/aboutGeely'
import { geelyInRussia } from './columns/geelyInRussia'

export const footerColumns: IFooterColumns[] = [
  { title: 'Модели', column: await CarsService.getNameCarsList() },
  { title: 'Покупателям', column: toCustomers },
  { title: 'Владельцам', column: toOwners },
  { title: 'О GEELY', column: aboutGeely },
  { title: 'Geely в России', column: geelyInRussia },
]
