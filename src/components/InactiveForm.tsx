import { Heading, Link, Stack, Text } from '@chakra-ui/react';

export default function InactiveForm() {
  return (
    <Stack
      bg="gray.50"
      rounded="xl"
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={8}
      w="full"
      maxW={{ lg: 'xl' }}
    >
      <Heading
        color="gray.800"
        lineHeight={1.1}
        mb={6}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      >
        Convocatoria cerrada.
      </Heading>

      <Text>
        Si te inscribiste y tienes alguna duda por favor contactarnos a través
        de{' '}
        <Link
          href="mailto:info@fonselp.org"
          textDecoration="underline"
          color="blue.500"
        >
          info@fonselp.org
        </Link>
      </Text>
    </Stack>
  );
}
