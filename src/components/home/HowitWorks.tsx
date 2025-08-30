"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import service from "@/assets/service.jpg";

const HowitWorks = () => {
    const t = useTranslations("homepage.howItWorks");
    return (
        <section className="max-w-screen-xl mx-auto p-2 mt-12 lg:mt-20">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-brand-secondary  lg:mb-10">
                    {t("sectionTitle")}
                </h1>
            </div>

            <section className="flex flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-2 px-6 lg:px-0">

                    <div className="p-2 relative shadow-md bg-[#F9F7F7]  gap-1 flex flex-col items-start  transition px-6">
                        <div className="absolute top-1/2 text-sm -translate-y-1/2 left-0 -translate-x-1/2 font-extrabold lg:text-lg text-white bg-brand-accent w-10 h-10  rounded-full flex items-center justify-center"><p>1</p></div>
                        <h3 className="text-lg font-bold text-[#112D4E]">
                            {t("step1.title")}
                        </h3>
                        <p className="text-base text-gray-500">
                            {t("step1.description")}
                        </p>
                    </div>

                    <div className="p-2 relative shadow-md bg-[#F9F7F7]  gap-1 flex flex-col items-start  transition px-6">
                        <div className="absolute top-1/2 text-sm -translate-y-1/2 left-0 -translate-x-1/2 font-extrabold lg:text-lg text-white bg-brand-accent w-10 h-10  rounded-full flex items-center justify-center"><p>2</p></div>
                        <h3 className="text-lg font-bold text-[#112D4E]">
                            {t("step2.title")}
                        </h3>
                        <p className="text-base text-gray-500">
                            {t("step2.description")}
                        </p>
                    </div>

                    <div className="p-2 relative shadow-md bg-[#F9F7F7]  gap-1 flex flex-col items-start  transition px-6">
                        <div className="absolute top-1/2 text-sm -translate-y-1/2 left-0 -translate-x-1/2 font-extrabold lg:text-lg text-white bg-brand-accent w-10 h-10  rounded-full flex items-center justify-center"><p>3</p></div>
                        <h3 className="text-lg font-bold text-[#112D4E]">
                            {t("step3.title")}
                        </h3>
                        <p className="text-base text-gray-500">
                            {t("step3.description")}
                        </p>
                    </div>

                    <div className="p-2 relative shadow-md bg-[#F9F7F7]  gap-1 flex flex-col items-start  transition px-6">
                        <div className="absolute top-1/2 text-sm -translate-y-1/2 left-0 -translate-x-1/2 font-extrabold lg:text-lg text-white bg-brand-accent w-10 h-10  rounded-full flex items-center justify-center"><p>4</p></div>
                        <h3 className="text-lg font-bold text-[#112D4E]">
                            {t("step4.title")}
                        </h3>
                        <p className="text-base text-gray-500">
                            {t("step4.description")}
                        </p>
                    </div>


                </div>

                <div>
                    <Image
                        src={service}
                        alt="Services Image"
                        height={500}
                        width={500}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </section>
    );
};

export default HowitWorks;
