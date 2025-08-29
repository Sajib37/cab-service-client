"use client";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
 import { BsFillTelephoneFill } from 'react-icons/bs';
import SelectLocale from "./SelectLocale";

export default function Navbar() {
    const [showCompact, setShowCompact] = useState(false);
    const t = useTranslations("homepage.header.navigation");
    const locale = useLocale();
    console.log(locale)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowCompact(true);
            } else {
                setShowCompact(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {!showCompact && (
                <div className="fixed top-0 left-0 w-full h-24 bg-[#05203C] shadow-md z-50 transition-all duration-500">
                    <div className="max-w-screen-xl mx-auto h-full flex  justify-between items-center">
                        <Link href={`/${locale}`}><Image src={logo} alt="Logo" height={150} width={150} /></Link>
                        <nav className="flex items-center gap-6 text-white">
                            <Link href={`/${locale}`}>{t("home")}</Link>
                            <Link href={`/${locale}/feedback`}>{t("feedback")}</Link>
                            <Link href={`/${locale}/tours`}>{t("tours")}</Link>
                            <Link href={`/${locale}/contacts`}>{t("contacts")}</Link>
                            <Link href={`/${locale}/travelAgencies`}>{t("travelAgencies")}</Link>
                            <SelectLocale className=" p-0  bg-transparent text-white" />
                            <Link href="tel:+8801712345678">
                                <div className=" underline text-white hover:text-[#3F72AF] cursor-pointer">
                                   <BsFillTelephoneFill className="inline mb-1 mr-1 " />
                                    +880 1712-345678
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            {showCompact && (
                <div className="fixed top-0 left-0 py-2 w-full  bg-white  drop-shadow-2xl z-50 transition-all duration-500">
                    <div className="max-w-screen-xl mx-auto h-full flex  justify-between items-center">
                        <Image src={logo} className="w-30" alt="Logo" height={150} width={150} />
                        <nav className="flex items-center font-semibold gap-6 text-black">
                            
                            <Link href="feedback">{t("feedback")}</Link>
                            <Link href="tours">{t("tours")}</Link>
                            <Link href="contacts">{t("contacts")}</Link>
                            <Link href="travelAgencies">{t("travelAgencies")}</Link>
                            <SelectLocale className=" rounded-none bg-black p-0   text-white" />
                            <Link href="tel:+8801712345678">
                                <div className=" underline text-black hover:text-[#3F72AF] cursor-pointer">
                                   <BsFillTelephoneFill className="inline mb-1 mr-1 " />
                                    +880 1712-345678
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
