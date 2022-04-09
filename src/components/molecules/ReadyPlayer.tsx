import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import getConfig from "next/config";
import Blob from "../atoms/Blob";

export default function ReadyPlayer() {
    return (
        <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                color={useColorModeValue('orange.100', 'brand.primary.1')}
            />
            <Box
                position={'relative'}
                height={'450px'}
                rounded={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                <Image
                    alt={'Avatar of bitpickle'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={
                        getConfig().publicRuntimeConfig.BASE_URL + '/avatar-fade.png'
                    }
                />
            </Box>
        </Flex>
    )
}