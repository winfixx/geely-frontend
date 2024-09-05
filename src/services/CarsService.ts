import { CarsRepositoryMock } from '@/mock-data/repositories/CarsRepositoryMock'
import type { ICarsRepository } from '@/types/repositories/ICarsRepository'

class CarsService {
  constructor(
    private carsRepositories: ICarsRepository
  ) {}

  public getCars() {
    return this.carsRepositories.getCars()
  }
}

export default new CarsService(new CarsRepositoryMock())