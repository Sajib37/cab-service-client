"use client";



import { useTranslations } from "next-intl";
import premium from "@/assets/icons/premium.png";
import gurantee from "@/assets/icons/guarantee.png";
import greet from "@/assets/icons/greeting.png";
import cancel from "@/assets/icons/cancel-order.png";
import service from "@/assets/service.jpg"
import Image from "next/image";

const Services = () => {
    const t = useTranslations("homepage");
    return (
        <section className="max-w-screen-xl mx-auto p-2 mt-24">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-center text-[#3F72AF]">
                    {t("services.title")}
                </h1>
                <p className="text-center  font-semibold">
                    {t("services.description")}
                </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">
                
                <div className="flex flex-col gap-2 ">
                    <div  className="p-2  shadow-lg bg-[#F9F7F7]  gap-2 flex items-center  transition">
                        <div className="">
                            <Image
                                src={premium}
                                alt="Premium Support"
                                height={100}
                                width={100}
                                className="w-24 "
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#112D4E]">
                                {t("premium_guest_support.title")}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {t("premium_guest_support.description")}
                            </p>
                        </div>
                    </div>

                    <div  className="p-2 shadow-lg  bg-[#F9F7F7]  gap-2 flex items-center  transition">
                        <div className="">
                            <Image
                                src={gurantee}
                                alt="ervices_guarantee"
                                height={100}
                                width={100}
                                className="w-24 "
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#112D4E]">
                                {t("services_guarantee.title")}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {t("services_guarantee.description")}
                            </p>
                        </div>
                    </div>

                    <div className="p-2 shadow-lg  bg-[#F9F7F7]  gap-2 flex items-center  transition">
                        <div className="">
                            <Image
                                src={greet}
                                alt="meet_and_greet"
                                height={100}
                                width={100}
                                className="w-24 "
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#112D4E]">
                                {t("meet_and_greet.title")}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {t("meet_and_greet.description")}
                            </p>
                        </div>
                    </div>

                    <div  className="p-2 shadow-lg  bg-[#F9F7F7]  gap-2 flex items-center  transition">
                        <div className="">
                            <Image
                                src={cancel}
                                alt="cancel_order"
                                height={100}
                                width={100}
                                className="w-24 "
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#112D4E]">
                                {t("free_cancellation.title")}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {t("free_cancellation.description")}
                            </p>
                        </div>
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

export default Services;
