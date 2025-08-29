"use client";

import Contact from "@/components/home/Contact";
import DayTour from "@/components/home/DayTour";
import HowitWorks from "@/components/home/HowitWorks";
import Services from "@/components/home/Services";
import Banner from "@/components/shared/Banner";
import BookingForm from "@/components/shared/bookingForm/BookingForm";
import TripAdvisor from "@/components/shared/bookingForm/TripAdvisor";
import Footer from "@/components/shared/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("homepage");

    return (
        <section className="mt-24">
            <section className="relative top-0 left-0">
                <Banner />
                <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
                    <h1 className="text-5xl text-white mb-16 font-bold">{ t("heroSection.tagline")}</h1>
                    <BookingForm></BookingForm>
                    <TripAdvisor/>
                </div>
            </section>

            <Services />
            <HowitWorks />
            <DayTour />
            <Contact />
            <Footer />
        </section>
    );
}
