"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "@/assets/banner/slide1.jpg";
import slide2 from "@/assets/banner/slide2.jpg";
import slide3 from "@/assets/banner/slide3.jpg";
import slide4 from "@/assets/banner/slide4.jpg";

const Banner = () => {
    const slides = [slide1, slide2, slide3, slide4];
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                
            >
                {slides.map(
                    (slide, index): React.ReactNode => (
                        <div key={index} className="relative w-full min-h-[calc(100vh-6rem)]">
                            <Image
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )
                )}
            </Carousel>
        </>
    );
};

export default Banner;
