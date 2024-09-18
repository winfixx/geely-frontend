import type { SpecificationByHeader } from './SpecificationByHeader'
import type { UniqueSpecification } from './UniqueSpecification'

export class Car {
  constructor(
    public id: number,
    public model: string,
    public mainImage: string,
    public frontCarImage: string,
    public galleryImages: string[],
    public description: string,
    public shortDescription: string,
    public uniqueSpecifications: UniqueSpecification[],
    public allSpecifications: SpecificationByHeader[]
  ) {}
}