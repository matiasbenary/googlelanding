import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  IconProps,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import Google from './assets/google.svg';

export default function App() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        resolve('ok');
      }, 3000);
    });
  }
  return (
    <Box position="relative">
      <Container maxW="7xl" py={{ base: 10, sm: 20 }}>
        <Flex justify="space-between">
          <Image src="logo" alt="logo" />
          <Image src={Google} alt="google logo" width="150px" />
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          mt={5}
          spacing={{ base: 10, lg: 32 }}
          justifyItems="self-end"
        >
          <Stack spacing={{ base: 10, md: 20 }}>
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
          <Stack
            bg="gray.50"
            rounded="xl"
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
          >
            <Stack spacing={4}>
              <Heading
                color="gray.800"
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                ¡Únete a nuestro equipo!
              </Heading>
            </Stack>
            <Box mt={10}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors?.name}>
                  <FormLabel htmlFor="name">Nombre Completo</FormLabel>
                  <Input
                    id="name"
                    bg="gray.100"
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('name', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {String(errors.name?.message)}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mt="2" isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    bg="gray.100"
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('email', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {String(errors.name?.message)}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mt="2" isInvalid={!!errors.dni}>
                  <FormLabel htmlFor="dni">Numero de documento</FormLabel>
                  <Input
                    id="dni"
                    bg="gray.100"
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('dni', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {String(errors.dni?.message)}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mt="2" isInvalid={!!errors.address}>
                  <FormLabel htmlFor="address">Direccion</FormLabel>
                  <Input
                    id="address"
                    bg="gray.100"
                    color="gray.500"
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    {...register('address', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {String(errors.address?.message)}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Box>
            form
          </Stack>
        </SimpleGrid>
      </Container>
      <Blur
        position="absolute"
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}

export function Blur(props: IconProps) {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
}
