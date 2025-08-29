"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";



const DayTour = () => {
    const t = useTranslations("homepage.day_tour");
    return (
        <section className="relative max-w-screen-xl mx-auto px-2 mt-24">
            <h1 className="text-4xl mb-10 font-bold text-center text-[#3F72AF]">{t("title")}</h1>
            <p className="text-lg text-center">{t("introduction")}</p>

            <div className="mt-8">
                <h1 className="my-10 text-4xl font-bold text-center text-[#3F72AF]">{t("tour_example_title")}</h1>
                <p className="text-lg ">{t("customization")}</p>
                <p className="text-lg ">{t("detailed_itinerary")}</p>
            </div>

            <div className="my-10 text-lg font-semibold">
                <p>{t("pickup_time")}</p>
                <p>{t("arrival_time")}</p>
                <p>{t("departure_time")}</p>
                <p>{t("return_time")}</p>
            </div>

            <h3 className="text-2xl font-bold text-[#3F72AF]">{t("recommendations_intro")}</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
                <li>{t("recommendation_1")}</li>
                <li>{t("recommendation_2")}</li>
                <li>{t("recommendation_3")}</li>
                <li>{t("recommendation_4")}</li>
                <li>{t("recommendation_5")}</li>
                <li>{t("recommendation_6")}</li>
                <li>{t("recommendation_7")}</li>
                <li>{t("recommendation_8")}</li>
                <li>{t("recommendation_9")}</li>
                <li>{t("recommendation_10")}</li>
            </ul>



            <div className="absolute bottom-[10%] right-[15%]">
                <Link href="/tour" className="btn btn-info p-2 text-white w-52">{ t("button_text") }</Link>
            </div>
        </section>
    );
};

export default DayTour;