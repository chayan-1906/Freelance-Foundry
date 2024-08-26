import {Raleway} from "next/font/google";
import "./globals.css";

const inter = Raleway({subsets: ['latin']});

export const metadata = {
    title: 'Quify - Unlock your Career Potential',
    description: '',
};

function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}

export default RootLayout;
