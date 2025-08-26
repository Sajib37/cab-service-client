"use client";
import {useTranslations} from 'next-intl';

const Index = () => {
    const t = useTranslations("homepage");
    return (
        <div>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
        </div>
    );
};

export default Index;