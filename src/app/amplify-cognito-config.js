'use client';

import {Amplify} from "aws-amplify";
import {NEXT_PUBLIC_USER_POOL_CLIENT_ID, NEXT_PUBLIC_USER_POOL_ID} from "@/globals/Constants";

export const authConfig = {
    Cognito: {
        userPoolId: String(NEXT_PUBLIC_USER_POOL_ID),
        userPoolClientId: String(NEXT_PUBLIC_USER_POOL_CLIENT_ID),
    },
}

Amplify.configure({
    Auth: authConfig,
}, {ssr: true});

export default function ConfigureAmplifyClientSide() {
    // console.log(`authConfig:`, authConfig);
    return null;
}
