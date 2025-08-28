"use client";

import { useState } from "react";
import { useTranslations } from "use-intl";
import { MdOutlineLocalAirport } from "react-icons/md";
import { GiCruiser } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";


interface LocationInputProps {
    className?: string;
    label: string;
    value: string;
    onChange: (val: string) => void;
}

const LocationInput = ({ className, label, value, onChange }: LocationInputProps) => {
    const t = useTranslations("homepage.heroSection");

    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleSelect = (val: string) => {
    onChange(val); // update parent state
    setQuery("");
    setShowDropdown(false);
  };

    return (
        <fieldset className="fieldset relative w-1/4">
            <legend className="fieldset-legend ml-2 text-lg text-white">
                {label}
            </legend>

            <input
          type="text"
          required
                value={value || query}
                placeholder={t("searchForm.dropoff.placeholder")}
                onChange={(e) => {
                    setQuery(e.target.value);
                    onChange("");
                    setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className={className}
            />

            {showDropdown && (
                <ul className="absolute text-base left-0 top-full mt-1 w-full bg-white text-black rounded shadow-lg max-h-52 overflow-y-auto z-50">
                    <p className="px-4 py-2 font-semibold flex items-center gap-1">
                        <MdOutlineLocalAirport /> {t("locations.airport")}
                    </p>
                    <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            handleSelect("Rome Ciampino Airport (CIA) - Italy");
                        }}
                    >
                        Rome Ciampino Airport (CIA) - Italy
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            handleSelect("Rome Fiumicino Airport (FCO) - Italy");
                        }}
                    >
                        Rome Fiumicino Airport (FCO) - Italy
                    </li>

                    <p className="px-4 py-2 font-semibold flex items-center gap-1">
                        <GiCruiser /> {t("locations.cruisePorts")}
                    </p>
                    <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            handleSelect(
                                "Civitavecchia Cruise Port (RCT) - Italy"
                            );
                        }}
                    >
                        Civitavecchia Cruise Port (RCT) - Italy
                    </li>

                    <p className="px-4 py-2 font-semibold flex items-center gap-1">
                        <FaTrainSubway /> {t("locations.trainStation")}
                    </p>
                    <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            handleSelect("Rome Termini Train Station - Italy");
                        }}
                    >
                        Rome Termini Train Station - Italy
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            handleSelect("Rome Tiburtina Train Station - Italy");
                        }}
                    >
                        Rome Tiburtina Train Station - Italy
                    </li>

                    <p className="px-4 py-2 font-semibold flex items-center gap-1">
                        <FaHotel /> {t("locations.Hotel")}
                    </p>
                    <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                            handleSelect("Insert hotel or address");
                        }}
                    >
                        Insert hotel or address
                    </li>
                </ul>
            )}
        </fieldset>
    );
};

export default LocationInput;
