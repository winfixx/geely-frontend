import type { Car } from '../models/Car'

export interface ICarsRepository {
  getCars(): Promise<Car[]>
}