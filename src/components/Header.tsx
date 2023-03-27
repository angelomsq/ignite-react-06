import React from 'react'
import { Flex, Icon, Image, Link as ChakraLink } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'

import { useRouter } from 'next/router'
import Link from 'next/link'

const Header: React.FC = () => {
  const { asPath } = useRouter()

  return (
    <Flex as="header" w="100vw" h={['50px', '100px']} maxW={1160} mx="auto" my={0} align="center">
      {asPath !== '/' && (
        <Link href="/">
          <Icon as={FaChevronLeft} size={20} ml={4} />
        </Link>
      )}
      <ChakraLink as={Link} href="/" mx={'auto'}>
        <Image src="/logo.svg" alt="logo" width={[82, 180]} />
      </ChakraLink>
    </Flex>
  )
}

export default Header
