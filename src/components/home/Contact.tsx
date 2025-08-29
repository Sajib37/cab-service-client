import { useTranslations } from 'next-intl';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    const t= useTranslations("homepage.contactSection")
    return ( 
        <section className='max-w-screen-xl mx-auto bg-[#05203C] py-16  mt-24'>
            <h2 className='text-4xl text-center font-bold text-[#DBE2EF]'>{t("title")}</h2>
            <div className='mt-4'>
            </div>


            <section className='flex mt-10 flex-col md:flex-row justify-around'>
                <div className='flex gap-2 items-center'>
                    <FaPhone className='text-white text-6xl' />
                    <div>
                        <h3 className='text-white text-2xl'>{t("call.type")}</h3>
                        <p className='text-white'>{ t("call.value")}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaWhatsapp className='text-white text-6xl' />
                    <div>
                        <h3 className='text-white text-2xl'>{t("whatsapp.type")}</h3>
                        <p className='text-white'>{ t("whatsapp.value")}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <HiOutlineMail className='text-white text-6xl' />
                    <div>
                        <h3 className='text-white text-2xl'>{t("email.type")}</h3>
                        <p className='text-white'>{ t("email.value")}</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;