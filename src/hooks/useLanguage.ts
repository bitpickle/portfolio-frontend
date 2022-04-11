import { useRouter } from "next/router";
import enUs from "../locales/en-US";
import ptBr from "../locales/pt-BR";
import { LocaleType } from "../locales/_localeType";

export default function useLanguage():LocaleType{
    const {locale} = useRouter();
    const lang: LocaleType = locale === 'en-US' ? enUs : ptBr;
    
    return lang;
}