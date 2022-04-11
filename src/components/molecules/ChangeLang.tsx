import { Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useLanguage from "../../hooks/useLanguage";
import { MdOutlineLanguage } from "react-icons/md"

export default function ChangeLang() {
    const lang = useLanguage();
    const router = useRouter();
    const { locale } = router;
    const changeLanguage = (e:any) => {
        const selection = e.target.value;
        router.push(router.pathname, router.asPath, { locale:selection });
      };
    return (
        <Select icon={<MdOutlineLanguage/>} defaultValue={locale} onChange={changeLanguage}>
            <option value='en-US'>{lang.english}</option>
            <option value='pt-BR'>{lang.portuguese}</option>
        </Select>
    )
}