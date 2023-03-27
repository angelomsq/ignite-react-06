import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '@/services/api'
import Head from 'next/head'
import TitleBar from '@/components/TitleBar'
import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'
import { Card } from '@/components/Card'

type City = {
  position: number
  city: string
  image: string
  country: string
  code: string
  arrivals: number
  continent: string
  slug?: string
}

type Continent = {
  name: string
  slug: string
  image: string
  excerpt: string
  languages: number
  text: string
}

interface ContinentProps {
  cities: City[]
  continent: Continent
  countries: string[]
}

export default function Continent({ continent, cities, countries }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{`World Trip | ${continent.name}`}</title>
        <meta name="description" content="WorldTrip Continent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TitleBar title={continent.name} backgroundImage={continent.image} />
      <SimpleGrid columns={[1, 1, 2]} my="16" maxW="1160" w={'100vw'} mx="auto" px={[4, 10]}>
        <Text fontSize="2xl">{continent.text}</Text>

        <Box display="flex" justifyContent="space-evenly" py={4}>
          {!!countries.length && (
            <Box textAlign="center" p={['2', '4']}>
              <Text as="h1" textStyle={['h2', 'h1']} color="highlight">
                {countries.length}
              </Text>
              <Text color="dark.text" fontSize={['lg', '2xl']} fontWeight={600}>
                countries
              </Text>
            </Box>
          )}

          {continent.languages && (
            <Box textAlign="center" p={['2', '4']}>
              <Text as="h1" textStyle={['h2', 'h1']} color="highlight">
                {continent.languages}
              </Text>
              <Text color="dark.text" fontSize={['lg', '2xl']} fontWeight={600}>
                languages
              </Text>
            </Box>
          )}

          {!!cities.length && (
            <Box textAlign="center" p={['2', '4']}>
              <Text as="h1" textStyle={['h2', 'h1']} color="highlight">
                {cities.length}
              </Text>
              <Text color="dark.text" fontSize={['lg', '2xl']} fontWeight={600}>
                cities +100 <Icon as={FiInfo} ml="1" boxSize={4} color="dark.info.500" />
              </Text>
            </Box>
          )}
        </Box>
      </SimpleGrid>

      <Flex w={'100vw'} maxW={1160} mx="auto" my={0} px={[4, 10]} py={20} direction="column">
        <Text as="h2" textStyle="h2" color={'gray.700'}>
          Cities +100
        </Text>

        <SimpleGrid columns={[1, 1, 2, 4]} my="16" spacing={8}>
          {cities.map((item) => (
            <Card key={item.position} item={item} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continentResponse = await api.get('continents')
  const paths = continentResponse.data.map((item: Continent) => {
    return { params: { continent: item.slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentResponse = await api.get(`continents?slug=${params?.continent}`)
  const citiesResponse = await api.get(`ranking?continentSlug=${params?.continent}`)
  const countries = citiesResponse.data.map((item: City) => item.country)

  return {
    props: {
      continent: continentResponse.data[0],
      cities: citiesResponse.data,
      countries,
    },
  }
}
