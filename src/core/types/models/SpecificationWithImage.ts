import { Specification } from "./Specification";

export class SpecificationWithImage extends Specification {
  constructor(title: string, description: string, public image: string) {
    super(title, description)
  }
}
