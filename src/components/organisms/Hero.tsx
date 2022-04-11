import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import useLanguage from '../../hooks/useLanguage';
import ReadyPlayer from '../molecules/ReadyPlayer';


export default function Hero() {
  const lang = useLanguage();
  return (
    <Container maxW={'7xl'} paddingTop={20}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.primary.3',
                zIndex: -1,
              }}>
              {lang.greetings}
            </Text>
            <br />
            <Text as={'span'} color={'brand.primary.3'}>
              {lang.iAm}
            </Text>
          </Heading>
          <Text color={useColorModeValue('gray.700', 'gray.300')}>
            {lang.aboutMe}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'brand.primary.3'}
              _hover={{ bg: 'brand.primary.5' }}>
              {lang.hireMe}
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
            >
              {lang.seeProjects}
            </Button>
          </Stack>
        </Stack>
        <ReadyPlayer />
      </Stack>
    </Container>
  );
}