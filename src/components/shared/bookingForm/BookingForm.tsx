"use client";

import { useTranslations } from "next-intl";
import LocationInput from "./LocationInput";
import { useState } from "react";

const BookingForm = () => {
    const t = useTranslations("homepage.heroSection");

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [passenger, setPassenger] = useState("");
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            pickup,
            dropoff,
            passenger,
        };
        console.log(formData);

        setPickup("");
        setDropoff("");
        setPassenger("");
    };

    return (
        <div className=" mx-auto -mt-8 w-[80%]  ">
            <form onSubmit={handleSubmit} className="flex px-2  lg:px-0 flex-col gap-1 lg:gap-0 lg:flex-row items-center w-full">
                <LocationInput
                    value={pickup}
                    onChange={setPickup}
                    label={t("searchForm.pickup")}
                    className="rounded-xl w-full lg:w-1/4 lg:rounded-l-2xl lg:rounded-r-none"
                />
                <LocationInput
                    value={dropoff}
                    onChange={setDropoff}
                    label={t("searchForm.dropoff")}
                    className=" rounded-xl w-full  lg:w-1/4 lg:rounded-none "
                />

                <fieldset className="fieldset   w-full  lg:px-0 lg:w-1/4">
                    <select
                        onChange={(e) => setPassenger(e.target.value)}
                        defaultValue={t("searchForm.passengers")}
                        className="select h-10 md:h-16 rounded-xl lg:rounded-none text-lg md:text-xl  w-full overflow-y-auto"
                    >
                        <option className="text-gray-300" disabled={true}>
                            {t("searchForm.passengers")}
                        </option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <button
                    type="submit"
                    className="w-full lg:w-1/4 uppercase z-0  p-2  h-10 md:h-16 cursor-pointer bg-brand-secondary rounded-xl lg:rounded-l-none lg:rounded-r-2xl text-base md:text-lg font-bold text-white hover:bg-brand-secondary/90 transition"
                >
                    {t("searchForm.buttonText")}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
