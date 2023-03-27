import { Box, Heading, HStack, Image } from '@chakra-ui/react'
import { CircleFlag } from 'react-circle-flags'

type Item = {
  position: number
  city: string
  image: string
  country: string
  code: string
  arrivals: number
  continent: string
  slug?: string
}

type CardProps = {
  item: Item
}

export function Card({ item }: CardProps) {
  return (
    <Box bg="white" borderRadius="4" pb="4" border="1px solid #eee" overflow="hidden">
      <Image src={item.image} alt={item.city} mb="4" w="100%" h="150px" objectFit="fill" />
      <HStack px="4">
        <Box mr="auto">
          <Heading as="strong" fontSize="16" m={0}>
            {item.city}
          </Heading>
          <Box as="p">{item.country}</Box>
        </Box>
        <CircleFlag countryCode={item.code} width="30px" />
      </HStack>
    </Box>
  )
}
