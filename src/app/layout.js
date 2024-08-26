import {Raleway} from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";
import {appName, appTagline} from "@/globals/Constants";

const raleway = Raleway({subsets: ['latin']});

export const metadata = {
    title: {
        absolute: '',
        default: `${appName} | ${appTagline}`,
        template: `%s | ${appName}`,
    },
    description: '',
};

function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={raleway.className}>
        <Theme accentColor='amber' grayColor='#B0B0B0' appearance={'dark'}>
            {/*<Theme appearance={'dark'}>*/}
            {children}
        </Theme>
        </body>
        </html>
    );
}

export default RootLayout;
