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
                 <ul className="hidden lg:block absolute text-base z-50  left-0 top-full mt-1 w-full bg-white text-black rounded shadow-lg max-h-64 overflow-y-auto">
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
        </label>

            
    );
};

export default LocationInput;
