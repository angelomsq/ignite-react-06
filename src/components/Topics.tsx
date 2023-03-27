import { Flex, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface TopicsProps {
  topics: {
    title: string
    image: {
      url: string
      alt: string
    }
  }[]
}

const Topics: React.FC<TopicsProps> = ({ topics }) => {
  return (
    <Flex
      w={'100vw'}
      maxW={1160}
      mx="auto"
      my={0}
      px={[4, 10]}
      py={20}
      align="center"
      justify="space-between"
      wrap={['wrap', 'wrap', 'nowrap']}
    >
      {topics.map((topic) => (
        <Stack key={topic.title} spacing={6} align="center">
          <Image
            src={topic.image.url}
            alt={topic.image.alt}
            w={85}
            h={85}
            display={['none', 'none', 'block']}
          />
          <Text
            as="h3"
            textStyle="h3"
            _before={{
              content: '""',
              display: ['inline-block', 'inline-block', 'none'],
              width: '8px',
              height: '8px',
              borderRadius: '7.5px',
              backgroundColor: 'highlight',
              mr: 2,
            }}
          >
            {topic.title}
          </Text>
        </Stack>
      ))}
    </Flex>
  )
}

export default Topics
