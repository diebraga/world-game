import { Box } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Carousel from 'react-multi-carousel';
import { AllCountries } from '../../utils/allCountries';
import { WorldFlagCard } from './WorldFlagCard';

type AllCountryFlagsTypes = {
  name: string
  code: string
}

type WorldFlagsCarouselProps = {
  allFlags: AllCountryFlagsTypes[]
  allFlagsIndex: number
  setAllFlagsIndex: Dispatch<SetStateAction<number>>
  setCountryFlagInput: Dispatch<SetStateAction<string>>
}

export function WorldFlagsCarousel({ allFlags, allFlagsIndex, setAllFlagsIndex, setCountryFlagInput }: WorldFlagsCarouselProps) {
  return (
    <Box pl='3' pr='3'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={100000}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        // infinite
        itemClass="container-carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        afterChange={(previousSlide, { currentSlide }) => {
          setAllFlagsIndex(currentSlide)
        }}
      >
        {allFlags.map((flag) => <WorldFlagCard code={flag.code} key={flag.code} setCountryFlagInput={setCountryFlagInput} />)}
      </Carousel>
    </Box>
  )
}