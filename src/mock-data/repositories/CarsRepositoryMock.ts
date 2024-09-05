import type { Car } from '@/types/models/Car'
import type { ICarsRepository } from '@/types/repositories/ICarsRepository'
import { dataCars } from '../mock'

export class CarsRepositoryMock implements ICarsRepository {
  async getCars(): Promise<Car[]> {
    return dataCars
  }
}