import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

interface TitleBarProps {
  title: string
  backgroundImage: string
}

const TitleBar: React.FC<TitleBarProps> = ({ title, backgroundImage }) => {
  return (
    <Box
      display={'flex'}
      bgImage={`url('${backgroundImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={500}
    >
      <Flex w={'100vw'} maxW={1160} mx="auto" my={0} h="100%" px={[4, 10]} align="end">
        <Text
          as="h1"
          textStyle="h1"
          dangerouslySetInnerHTML={{ __html: title }}
          color={'white'}
          textShadow="0 0 6px #000"
          mb={12}
        />
      </Flex>
    </Box>
  )
}

export default TitleBar
