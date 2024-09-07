import { CarsRepositoryMock } from '@/mock-data/repositories/CarsRepositoryMock'
import type { ICarsRepository } from '@/types/repositories/ICarsRepository'

class CarsService {
  constructor(
    private readonly carsRepository: ICarsRepository
  ) { }

  public async getCars() {
    return await this.carsRepository.getCars()
  }
}

export default new CarsService(new CarsRepositoryMock())