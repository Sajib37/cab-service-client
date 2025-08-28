"use client";
import {useTranslations} from 'next-intl';

const Index = () => {
    const t = useTranslations("homepage");
    return (
        <div>
          <div>
                <h1 className="text-2xl font-bold">{t("heroSection.tagline")}</h1>
                
        </div>
        </div>
    );
};

export default Index;