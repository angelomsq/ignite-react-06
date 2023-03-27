import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Slide = {
  name: string
  slug: string
  image: string
  excerpt: string
}

interface SliderProps {
  slides: Slide[]
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="slider"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.slug}>
          <Box
            display={'flex'}
            bgImage={`url('${slide.image}')`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h={450}
            color={'white'}
          >
            <Flex
              w={'100vw'}
              maxW={1160}
              mx="auto"
              my={0}
              h="100%"
              px={[4, 10]}
              align="center"
              justify="center"
              direction="column"
            >
              <Link href={`/${slide.slug}`}>
                <Text as="h1" textStyle="h1" align={'center'} mb={4} textShadow="0 0 6px #000">
                  {slide.name}
                </Text>
                <Text as="h3" textStyle="h3" align={'center'} textShadow="0 0 6px #000">
                  {slide.excerpt}
                </Text>
              </Link>
            </Flex>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
