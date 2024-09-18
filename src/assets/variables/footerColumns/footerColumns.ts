import CarsService from '@/core/services/CarsService'
import type { IFooterColumns } from './IFooterColumns'
import { toCustomers } from './toCustomers'
import { toOwners } from './toOwners'
import { aboutGeely } from './aboutGeely'
import { geelyInRussia } from './geelyInRussia'

export const footerColumns: IFooterColumns[] = [
  { title: 'Модели', column: await CarsService.getNameCarsList() },
  { title: 'Покупателям', column: toCustomers },
  { title: 'Владельцам', column: toOwners },
  { title: 'О GEELY', column: aboutGeely },
  { title: 'Geely в России', column: geelyInRussia },
]
