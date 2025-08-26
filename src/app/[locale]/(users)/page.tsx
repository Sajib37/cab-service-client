"use client";

import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("homepage");

    return (
        <div>
            <h1 className="text-2xl font-bold">{t("title")}</h1>
            <p>{t("description")}</p>
        </div>
    );
}
