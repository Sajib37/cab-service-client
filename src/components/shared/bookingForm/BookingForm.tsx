"use client";

import { useTranslations } from "next-intl";
import LocationInput from "./LocationInput";
import { useState } from "react";

const BookingForm = () => {
    const t = useTranslations("homepage.heroSection");


  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [passenger, setPassenger] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
        pickup,
        dropoff,
        passenger
      };
      console.log(formData)

    setPickup("");
    setDropoff("");
    setPassenger("");
  };

    return (
        <div className="bg-[#112D4E] rounded-3xl w-[90%] p-6 z-20">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
                <LocationInput
                    value={pickup}
                    onChange={setPickup}
                    className="w-full px-2 text-xl py-6 rounded-l-3xl bg-white"
                    label={t("searchForm.pickup.label")}
                    
                />
                <LocationInput
                    value={dropoff}
                    onChange={setDropoff}
                    className="w-full px-2 text-xl py-6 bg-white"
                    label={t("searchForm.dropoff.label")}
                />

                <fieldset className="fieldset w-1/4">
                    <legend className="fieldset-legend text-xl text-white">{ t("searchForm.passengers.label")}</legend>
                    <select onChange={(e) => setPassenger(e.target.value)}  defaultValue={ t("searchForm.passengers.placeholder")} className="select h-20 text-xl w-full">
                        <option disabled={true}>{ t("searchForm.passengers.placeholder")}</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </fieldset>

                <button type="submit" className="w-1/4 p-2 mt-10 h-20 bg-white rounded-l-none rounded-r-3xl text-lg hover:bg-gray-400">
                    {t("searchForm.buttonText")}
                </button>
            </form>

            <div className="text-white text-center">
                <h1>{t("note1")}</h1>
                <p className="text-[#14FFEC]">{t("note2")}</p>
            </div>
        </div>
    );
};

export default BookingForm;
