'use client';

import Image from "next/image";
import {Button, Text} from "@radix-ui/themes";
import {appName, services, typewritingTexts} from "@/globals/Constants";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import {servicesPath} from "@/globals/Routes";
import Services from "@/components/home/services";

function ClientHomePage() {
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <Image src={'../assets/logo.svg'} alt={'logo'} width={100} height={100} className={'w-32 sm:w-40 md:w-52 xl:w-60'}/>
            <Text className={'text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold text-primary-foreground tracking-wide'}>{appName}</Text>
            <Text className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-primary-foreground text-center tracking-wide'}>Welcome to Quify!</Text>

            {/** Get Job Referrals */}
            {/** Ace Mock Interviews */}
            {/** Find Your Mentor */}
            <Text className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-primary-foreground tracking-wide mb-4'}>
                <Typewriter options={{strings: typewritingTexts, autoStart: true, loop: true}}/>
            </Text>
            <Text className={'mb-8 text-center'}>Unlock Your Career Potential with Expert Guidance</Text>
            <Link href={servicesPath}>
                <Button size={'3'} className={'!cursor-pointer'}>Explore Our Services</Button>
            </Link>

            {/** services */}
            <Services/>

            <div className={'h-40'}>

            </div>
        </div>
    );
}

export default ClientHomePage;
