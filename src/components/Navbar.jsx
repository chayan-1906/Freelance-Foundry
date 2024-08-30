'use client';

import Image from "next/image";
import Link from "next/link";
import {homePath, servicesPath} from "@/globals/Routes";
import {appName} from "@/globals/Constants";
import {Button} from "@/components/ui/button";
import {handleSignOut} from "@/utils/cognitoActions";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {authenticatedUser} from "@/utils/amplify-server-utils";

function Navbar() {
    let router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            await authenticatedUser();
        }

        checkAuth();
    }, []);

    return (
        <div className={'flex flex-1 fixed left-0 right-0 items-center justify-between bg-black'}>
            {/** navbar */}
            <Link href={homePath} className={'flex gap-1 md:gap-2 items-center p-4'}>
                <Image src={'/assets/logo.png'} alt={'logo'} width={100} height={100} className={'flex w-8 sm:w-12 md:w-16 xl:w-20'}/>
                <p className={'text-base sm:text-xl md:text-2xl xl:text-3xl font-bold tracking-wide'}>{appName}</p>
            </Link>

            {/** action buttons */}
            <div className={'flex gap-10 items-center px-8'}>
                <Link href={servicesPath}>
                    <Button variant={'ghost'} size={'4'} className={'!cursor-pointer'}>Services</Button>
                </Link>
                <Button variant={'ghost'} size={'4'} className={'!cursor-pointer'}>Work with us</Button>
                <Button variant={'destructive'} className={'!cursor-pointer'} onClick={() => handleSignOut(router)}>Logout</Button>
            </div>
        </div>
    );
}

export default Navbar;
