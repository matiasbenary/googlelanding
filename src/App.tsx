import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

import Google from './assets/google.svg';
import Logo from './assets/logo.png';
import Blur from './components/Blur';
import Form from './components/Form';

export default function App() {
  return (
    <Box position="relative">
      <Container maxW="7xl" py={{ base: 10, sm: 20 }}>
        <Flex justify="space-between" wrap="wrap">
          <Image src={Logo} alt="logo" width="300px" mx="auto" />
          <Image src={Google} alt="google logo" width="300px" mx="auto" />
        </Flex>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          mt={5}
          spacing={{ base: 10, lg: 32 }}
          justifyItems={{ base: 'inherit', lg: 'self-end' }}
        >
          <Stack spacing={10}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
              Accede a Certificados de Carrera de Google
            </Heading>
            <Stack direction="row" spacing={4} align="center">
              <Text color="gray.500" fontSize={{ base: 'md', sm: 'lg' }}>
                Programas de formación online flexibles, diseñados para adquirir
                habilidades profesionales con gran demanda y posibilidades de
                crecimiento, como soporte de IT, gestión de proyectos, análisis
                de datos y diseño de experiencia de usuario. Estos programas
                están disponibles en Coursera.org. No es necesario tener
                formación o experiencia previa.
              </Text>
            </Stack>
          </Stack>

          <Form />
        </SimpleGrid>
      </Container>
      <Blur position="absolute" top={-40} left={-10} />
    </Box>
  );
}
