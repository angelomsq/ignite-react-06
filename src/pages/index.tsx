import { GetStaticProps } from 'next'
import { Flex, Text, Box, Divider } from '@chakra-ui/react'
import { api } from '@/services/api'
import Head from 'next/head'
import Topics from '@/components/Topics'
import Banner from '@/components/Banner'
import Slider from '@/components/Slider'

type Continent = {
  name: string
  slug: string
  image: string
  excerpt: string
  languages: number
  text: string
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
  const banner = {
    title: '5 Continentes,<br /> infinitas possibilidades.',
    description: 'Chegou a hora de tirar do papel a viagem que você sempre sonhou.',
    image: '/airplane.png',
    backgroundImage: '/banner.png',
  }

  const topics = [
    { title: 'vida noturna', image: { url: '/cocktail.png', alt: 'cocktail' } },
    { title: 'praia', image: { url: '/surf.png', alt: 'surf' } },
    { title: 'moderno', image: { url: '/building.png', alt: 'building' } },
    { title: 'clássico', image: { url: '/museum.png', alt: 'museum' } },
    { title: 'e mais...', image: { url: '/earth.png', alt: 'earth' } },
  ]
  return (
    <>
      <Head>
        <title>World Trip | Home</title>
        <meta name="description" content="WorldTrip Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner {...banner} />
      <Topics topics={topics} />
      <Divider w={90} mx={'auto'} borderBottomColor={'gray.700'} borderBottomWidth={'2px'} />
      <Flex
        w={'100vw'}
        maxW={1160}
        mx="auto"
        my={0}
        h="100%"
        px={[4, 10]}
        py={14}
        align="center"
        justify="center"
        direction={'column'}
      >
        <Text
          as="h2"
          textStyle="h2"
          align={'center'}
          color={'gray.700'}
          dangerouslySetInnerHTML={{ __html: 'Vamos nessa?,<br /> Então escolha seu continente' }}
        />
      </Flex>
      <Box maxW={1160} mx="auto" mb="20">
        <Slider slides={continents} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('continents')

  return {
    props: {
      continents: data,
    },
  }
}
