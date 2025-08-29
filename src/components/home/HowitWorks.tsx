"use client";

import { useTranslations } from "next-intl";

import bgImage from "@/assets/car.jpg";


const HowitWorks = () => {

    const t= useTranslations("homepage.how_it_works")
    return (
        <section className="w-full mt-24 p-2  mx-auto ">
            <div
            style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: "cover" ,backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }}
            className=" h-[50vh] md:h-[60vh] lg:h-[90vh] relative md:bg-fixed"
        >
            <div className="w-10/12 absolute top-[10%] left-[9%] h-4/5 rounded-2xl bg-black opacity-40 "> </div>

            <div className="w-10/12 absolute top-[10%] z-30 left-[10%] h-4/5">
                <div className="absolute z-20 w-full h-full top-0 left-0 text-white flex flex-col justify-center items-center space-y-2">
                        <h1 className="md:text-5xl text-2xl text-center  font-bold">{ t("title")}</h1>
                        <div className="text-gray-300 text-lg text-center mt-10">
                            <p>{ t("step1.description")}</p>
                            <p>{ t("step2.description")}</p>
                            <p>{ t("step3.description")}</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default HowitWorks;