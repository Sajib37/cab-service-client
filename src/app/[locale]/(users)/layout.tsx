import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/[locale]/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/shared/Navbar";
import SmallNav from "@/components/shared/SmallNav";

const roboto = Roboto({
    weight: ["400","500","600","700", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PickMe",
    description: "Fast. Safe. Reliable",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    let messages;
    try {
        messages = (await import(`../../../../messages/${locale}.json`))
            .default;
    } catch {
        notFound();
    }



    return (
        <html lang={locale} data-theme="light">
            <body className={roboto.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <SmallNav />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

