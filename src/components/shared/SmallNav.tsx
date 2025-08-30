"use client";
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '@/assets/logo.png';

const SmallNav = () => {
    return (
        <section className="fixed top-0 left-0 w-full z-50 lg:hidden">
            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content bg-brand-primary flex items-center justify-between p-2 text-white">

                    <label
                        htmlFor="my-drawer"
                        className='text-2xl'
                    >
                        <AiOutlineMenu />
                    </label>

                    <h1 className='text-xl text-white font-bold'>Pick<span className='text-brand-secondary'>Me</span></h1>

                    <Image
                        src={logo}
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SmallNav;
