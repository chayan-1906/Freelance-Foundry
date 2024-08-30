import {Raleway} from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import {appName, appTagline} from "@/globals/Constants";
import ConfigureAmplifyClientSide from "@/app/amplify-cognito-config";

const raleway = Raleway({subsets: ['latin']});

export const metadata = {
    title: {
        absolute: '',
        default: `${appName} | ${appTagline}`,
        template: `%s | ${appName}`,
    },
    description: '',
}

function RootLayout({children}) {
    return (
        <html lang="en" className={'dark'}>
        <body className={raleway.className}>
            <ConfigureAmplifyClientSide/>
            {children}
        </body>
        </html>
    );
}

export default RootLayout;
