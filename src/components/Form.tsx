import { useForm } from 'react-hook-form';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';

import { apiCall } from '../crud/api.crud';
import { RegisterForm, RegisterFormSchema } from '../schemas';

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async (formData: RegisterForm) => {
    try {
      await apiCall('sendMailResgisterGoogle', formData, 'POST');
    } catch (error) {
      setError('root', {
        message: 'Al enviar el formulario',
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <Stack justifyContent="center">
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Un administrador revisará tu registro y te enviaremos un mail para
          confirmar tu usuario.
        </Alert>
      </Stack>
    );
  }

  return (
    <Stack
      bg="gray.50"
      rounded="xl"
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 4 }}
      w="full"
      maxW={{ lg: 'xl' }}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading
        color="gray.800"
        lineHeight={1.1}
        mb={6}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      >
        ¡Únete a nuestro equipo!
      </Heading>
      <FormControl isInvalid={!!errors?.name} isRequired>
        <FormLabel htmlFor="name">Nombre Completo</FormLabel>
        <Input
          id="name"
          bg="gray.100"
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          {...register('name')}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mt="2" isInvalid={!!errors.email} isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          bg="gray.100"
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          {...register('email')}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mt="2" isInvalid={!!errors.phone_number} isRequired>
        <FormLabel htmlFor="phone_number">Numero de celular </FormLabel>
        <Input
          id="phone_number"
          bg="gray.100"
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          {...register('phone_number')}
        />
        <FormErrorMessage>{errors.phone_number?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mt="2" isInvalid={!!errors.dni} isRequired>
        <FormLabel htmlFor="dni">Numero de documento</FormLabel>
        <Input
          id="dni"
          bg="gray.100"
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          {...register('dni')}
        />
        <FormErrorMessage>{errors.dni?.message}</FormErrorMessage>
      </FormControl>
      <FormControl mt="2" isInvalid={!!errors.birthday} isRequired>
        <FormLabel htmlFor="address">Fecha de nacimiento</FormLabel>
        <Input
          id="address"
          bg="gray.100"
          color="gray.500"
          _placeholder={{
            color: 'gray.500',
          }}
          {...register('birthday')}
        />
        <FormErrorMessage>{errors.birthday?.message}</FormErrorMessage>
      </FormControl>
      {errors.root && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Hubo un error</AlertTitle>
          <AlertDescription>{errors.root?.message}</AlertDescription>
        </Alert>
      )}
      <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
        Enviar
      </Button>
    </Stack>
  );
}
export default Form;
