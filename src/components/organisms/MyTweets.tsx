import { Container, useColorModeValue, chakra, Box, Center } from "@chakra-ui/react";
import ChakraCarousel from "../molecules/ChakraCarousel";
import TweetCard from "../molecules/TweetCard";

const testimonials = [
    {
        name: 'Satoshi Nakamoto',
        role: 'Bitcoin Creator',
        content:
            'In all my years developing software I have never met anyone with such skills. The guy really does magic on the keyboard.',
        avatar:
            'https://images.unsplash.com/photo-1545462013-0ca20fd244bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    },
    {
        name: 'Satoshi Nakamoto',
        role: 'Bitcoin Creator',
        content:
            'In all my years developing software I have never met anyone with such skills. The guy really does magic on the keyboard.',
        avatar:
            'https://images.unsplash.com/photo-1545462013-0ca20fd244bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    },
    {
        name: 'Thomas Anderson',
        role: 'the One',
        content:
            'I met him on the recommendation of Morpheu. In a few seconds he deployed a matrix private server with several optimizations.',
        avatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg/330px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg',
    },
    {
        name: 'Thomas Anderson',
        role: 'the One',
        content:
            'I met him on the recommendation of Morpheu. In a few seconds he deployed a matrix private server with several optimizations.',
        avatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg/330px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg',
    },
    {
        name: 'Thomas Anderson',
        role: 'the One',
        content:
            'I met him on the recommendation of Morpheu. In a few seconds he deployed a matrix private server with several optimizations.',
        avatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg/330px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg',
    },
    {
        name: 'Thomas Anderson',
        role: 'the One',
        content:
            'I met him on the recommendation of Morpheu. In a few seconds he deployed a matrix private server with several optimizations.',
        avatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg/330px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg',
    },
];

export default function MyTweets() {
    return (
        <>
            <Center
                textAlign={'center'}
                pt={10}
                width={'full'}
            >
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }}>
                    <chakra.h3
                        fontWeight={'bold'}
                        fontSize={20}
                        textTransform={'uppercase'}
                        color={'brand.secondary.2'}>
                        Keep your eyes on me
                    </chakra.h3>
                    <chakra.h1
                        py={5}
                        fontSize={48}
                        fontWeight={'bold'}
                        color={useColorModeValue('gray.700', 'gray.50')}>
                        See my last tweets
                    </chakra.h1>
                </Box>
            </Center>
            <Container
                py={8}
                px={0}
                mx={8}
                maxW={{
                    base: "100%",
                    sm: "35rem",
                    md: "43.75rem",
                    lg: "80.5rem",
                    xl: "80rem",
                    xxl: "87.5rem"
                }}
            >
                <ChakraCarousel gap={32}>
                    {testimonials.map((cardInfo, index) => (
                        <TweetCard {...cardInfo} index={index} key={index} />
                    ))}
                </ChakraCarousel>
            </Container>
        </>
    )
}