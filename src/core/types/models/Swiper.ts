import type { Slide } from './Slide'

export class Swiper<T extends T[]> {
  public nextSlide(slide: Slide, list: T) {
    if (slide.currentIndexSlide === list.length - 1) {
      slide.currentIndexSlide = 0
      slide.currentSlidePx = 0
    } else {
      slide.currentIndexSlide++
      slide.currentSlidePx -= slide.widthSlide
    }
  }

  public prevSlide(slide: Slide, list: T) {
    if (slide.currentIndexSlide === 0) {
      const maxIndex = list.length - 1

      slide.currentIndexSlide = maxIndex
      slide.currentSlidePx = -maxIndex * slide.widthSlide
    } else {
      slide.currentIndexSlide--
      slide.currentSlidePx += slide.widthSlide
    }
  }

  public goToSlide(slide: Slide,indexSlide: number) {
    slide.currentIndexSlide = indexSlide
    slide.currentSlidePx = -indexSlide * slide.widthSlide
  }
}
