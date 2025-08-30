"use client";

import { useState } from "react";
import { useTranslations } from "use-intl";
import { MdOutlineLocalAirport } from "react-icons/md";
import { GiCruiser } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

interface LocationInputProps {
    className?: string;
    label: string;
    value: string;
    onChange: (val: string) => void;
}

const LocationInput = ({
    className,
    label,
    value,
    onChange,
}: LocationInputProps) => {
    const t = useTranslations("homepage.heroSection");

    const locations = [
        t("locations.name1"),
        t("locations.name2"),
        t("locations.name3"),
        t("locations.name4"),
        t("locations.name5"),
        t("locations.name6"),
        t("locations.name7"),
        t("locations.name8"),
        t("locations.name9"),
        t("locations.name10"),
        t("locations.name11"),
        t("locations.name12"),
        t("locations.name13"),
        t("locations.name14"),
        t("locations.name15"),
        t("locations.name16"),
        t("locations.name17"),
        t("locations.name18"),
        t("locations.name19"),
        t("locations.name20")
    ];

    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelect = (val: string) => {
        onChange(val); // update parent state
        setQuery("");
        setShowDropdown(false);
    };

    return (
        <label className={`${className} input text-base md:text-lg h-10 md:h-16`}>
            <FaChevronCircleRight className="text-gray-400 text-2xl" />
            <input
                required
                type="text"
                placeholder={`${label}`}
                value={value || query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    onChange("");
                    setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />



             {showDropdown && (
                 <ul className="  absolute  top-full  text-base z-50  left-0 t mt-1 w-full bg-white text-black rounded shadow-lg max-h-64 overflow-y-auto">
                    {
                        locations.map((loc, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                    handleSelect(loc);
                                }}
                            >
                                {loc}
                            </li>
                        ))
                    }
                 </ul>
             )}
        </label>

            
    );
};

export default LocationInput;
