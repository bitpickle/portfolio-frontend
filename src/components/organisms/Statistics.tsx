import {
  Box,
  Center,
  chakra,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineProject } from 'react-icons/ai';
import { RiOpenSourceLine } from 'react-icons/ri';
import { FiTerminal } from 'react-icons/fi';
import StatsCard from '../molecules/StatsCard';
import useLanguage from '../../hooks/useLanguage';

export default function Statistics() {
  const lang = useLanguage();
  return (
    <Box
      bgGradient={[
        'linear(to-tr, brand.primary.1, red.500)',
        'linear(to-bl, brand.primary.1, red.500)',
      ]}
      p={'1px'}
    >
    <Center
      bgColor={useColorModeValue('gray.200', 'gray.800')}
      paddingBottom={'50px'}>

      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          {lang.statsTitle}
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={lang.statsProjects}
            stat={'50'}
            icon={<AiOutlineProject size={'3em'} />}
          />
          <StatsCard
            title={lang.statsOss}
            stat={'1,000'}
            icon={<RiOpenSourceLine size={'3em'} />}
          />
          <StatsCard
            title={lang.statsLines}
            stat={'?'}
            icon={<FiTerminal size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    </Center>
    </Box>
  );
}