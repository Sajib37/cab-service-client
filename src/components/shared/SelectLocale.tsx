"use client"
import {  usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";


const SelectLocale = () => {
    const t = useTranslations("homepage.header.languageSelector")
    const locale= useLocale()

    const pathname = usePathname()
    const router = useRouter()


    const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        router.replace(
            // { pathname, params },
            { pathname},
            {locale: event.target.value}
        )
     }

    return (
        <fieldset className="fieldset rounded-full bg-transparent text-white ">
            <select defaultValue={locale} onChange={handleLocaleChange} className="select rounded-full bg-transparent text-white ">
                <option className="text-black" value="en">{ t("en")}</option>
                <option className="text-black" value="it">{ t("it")}</option>
            </select>
        </fieldset>
    );
};

export default SelectLocale;
