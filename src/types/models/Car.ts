export class Car {
  constructor(
    public id: number,
    public model: string,
    public mainImage: string,
    public galleryImages: string[],
    public description: string,
    public uniqueSpecifications: UniqueSpecification[],
    public allSpecifications: SpecificationByHeader[]
  ) {}
}

class Specification {
  constructor(public title: string, public description: string) {}
}

class SpecificationWithImage extends Specification {
  constructor(title: string, description: string, public image: string) {
    super(title, description)
  }
}

class UniqueSpecification extends Specification {}

class SpecificationByHeader {
  constructor(public header: string, public specification: SpecificationWithImage[]) {}
}