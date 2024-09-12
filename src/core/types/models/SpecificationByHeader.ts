import type { SpecificationWithImage } from "./SpecificationWithImage";

export class SpecificationByHeader {
  constructor(
    public header: string,
    public specification: SpecificationWithImage[]
  ) {}
}
