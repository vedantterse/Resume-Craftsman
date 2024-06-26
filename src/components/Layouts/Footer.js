import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter ,FaGoogle } from 'react-icons/fa';

const Footer = () => {
    const handleMailClick = () => {
        window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=Sandeshkolekar2004@gmail.com', "_blank");
    };
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2024 Resumecraftsman. Designed By</Text>
                    <Text as={'a'} href={'https://www.linkedin.com/in/sandesh-kolekar-531433287/'} target={'_blank'} color={'blue.600'}>sandesh kolekar</Text>
                </Stack>


                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/sandesh7274'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.linkedin.com/in/sandesh-kolekar-531433287/'} target='_blank' colorScheme={'blue'}>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton
  isRound={true}
  as={'a'}
  href={'mailto:Sandeshkolekar2004@gmail.com'}
  onClick={handleMailClick}
  colorScheme={'pink'}
><FaGoogle />
                    </IconButton>

                </Stack>

            </Container>
        </Box>
    )
}

export default Footer
