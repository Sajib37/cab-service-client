"use client";

import Contact from "@/components/home/Contact";
import DayTour from "@/components/home/DayTour";
import HowitWorks from "@/components/home/HowitWorks";
import Services from "@/components/home/Services";
import Banner from "@/components/shared/Banner";
import BookingForm from "@/components/shared/bookingForm/BookingForm";
import Footer from "@/components/shared/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("homepage");

    return (
        <section className="lg:mt-20">
            <section className="relative top-0 left-0">
                <Banner />
                <div className=" absolute md:px-6  w-full top-0 bg-transparent left-0 h-full   flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-effect  text-white font-extrabold text-center">{ t("heroSection.tagline")}</h1>
                </div>
            </section>
            <section className="w-full">
                <BookingForm></BookingForm>
            </section>


            <HowitWorks />

            
            {/* <Services />
            
            <DayTour />
            <Contact />
            <Footer /> */}
        </section>
    );
}
