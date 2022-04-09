import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import ReadyPlayer from '../molecules/ReadyPlayer';


export default function Hero() {
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
              Hi,
            </Text>
            <br />
            <Text as={'span'} color={'brand.primary.3'}>
              my name is <strong>Péricles</strong>
            </Text>
          </Heading>
          <Text color={useColorModeValue('gray.700', 'gray.300')}>
            I&apos;m a backend developer with years of experience who believes that software development overflows utility in all areas and has changed the way we perceive the world. Programming goes beyond a job, it&apos;s a philosophy with the potential to solve all of humanity&apos;s problems, it just needs to be used in the right way, and that&apos;s what I do.
            {/*Sou um desenvolvedor backend com anos de experiência e que acredita que o desenvolvimento de software transborda utilidade em todas as áreas e mudou a forma como percebemos o mundo. Programação vai além de um emprego, é uma filosofia com um potêncial de resolver todos os problemas da humanidade, só precisa ser utilizada da maneira correta, e é isso que eu faço. */}
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
              Hire me
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
            >
              See my Projects
            </Button>
          </Stack>
        </Stack>
        <ReadyPlayer />
      </Stack>
    </Container>
  );
}