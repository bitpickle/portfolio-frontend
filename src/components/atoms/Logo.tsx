import { chakra, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import getConfig from "next/config";

export default function Logo(props: any) {
    return (
        <Stack direction={'row'} align={'center'}>
            <Image
                alt='Logo bitpickle.dev'
                width={'46px'}
                src={useColorModeValue(getConfig().publicRuntimeConfig.BASE_URL + "logo500-dark.png", getConfig().publicRuntimeConfig.BASE_URL + "logo500.png")}
            />
            <chakra.strong>bitpickle.dev</chakra.strong>
        </Stack>
    );
};