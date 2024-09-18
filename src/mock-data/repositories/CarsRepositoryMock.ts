import type { Car } from '@/core/types/models/Car'
import type { ICarsRepository } from '@/core/types/repositories/ICarsRepository'
import { dataCars } from '../mock'

export class CarsRepositoryMock implements ICarsRepository {
  async getCarById(carId: number): Promise<Car> {
    throw new Error('Method not implemented.')
  }

  async getCars(): Promise<Car[]> {
    return dataCars
  }
}