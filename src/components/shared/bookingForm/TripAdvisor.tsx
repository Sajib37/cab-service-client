"use client"

import tripadvisor from "@/assets/tripadvisor-logo.svg"
import Image from "next/image";
import StatusDot from "./StatusDot";

const TripAdvisor = () => {
    return (
        <div className="w-1/3 py-1 flex ">
            <div className="w-1/3 flex items-center rounded-l-2xl text-black p-3 bg-amber-400">
                <a href="https://www.tripadvisor.it/"> <Image className="w-full" src={tripadvisor} alt="logo" height={20} width={40} ></Image></a>
            </div>


            <div className="w-2/3 gap-4 flex items-center justify-between  rounded-r-2xl text-white p-2 bg-[#3F72AF]">
                <div><a className="underline" href="https://www.tripadvisor.it/Attraction_Review-g194743-d4049590-Reviews-Civitavecchia_Cab_Service_Tour-Civitavecchia_Province_of_Rome_Lazio.html">Civitaveccia Cab Service - Tour</a></div>
                <StatusDot/>
                <p>1264 recensioni</p>
            </div>
        </div>
    );
};

export default TripAdvisor;