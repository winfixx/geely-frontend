import { CarsRepositoryMock } from '@/mock-data/repositories/CarsRepositoryMock'
import type { ICarsRepository } from '@/core/types/repositories/ICarsRepository'

class CarsService {
  constructor(
    private readonly carsRepository: ICarsRepository
  ) { }

  public async getCars() {
    return await this.carsRepository.getCars()
  }

  public async getCarById(carId: number) {
    return await this.carsRepository.getCarById(carId)
  }

  public async getNameCarsList(): Promise<string[]> {
    return (await this.carsRepository.getCars()).map(car => car.model)
  }
}

export default new CarsService(new CarsRepositoryMock())