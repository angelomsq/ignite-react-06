import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

interface BannerProps {
  title: string
  description: string
  image: string
  backgroundImage: string
  imageAlt?: string
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  image,
  backgroundImage,
  imageAlt = 'Banner Image',
}) => {
  return (
    <Box
      display={'flex'}
      bgImage={`url('${backgroundImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={360}
    >
      <Flex
        w={'100vw'}
        maxW={1160}
        mx="auto"
        my={0}
        h="100%"
        px={[4, 10]}
        align="stretch"
        justify="space-between"
      >
        <Stack color="gray.100" alignSelf="center" spacing={8}>
          <Text as="h2" textStyle="h2" dangerouslySetInnerHTML={{ __html: title }} />
          <Text color="gray.200">{description}</Text>
        </Stack>
        <Box display={['none', 'none', 'flex']} alignItems="end" mb="-8" transform="rotate(3deg)">
          <Image src={image} alt={imageAlt} width={420} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Banner
