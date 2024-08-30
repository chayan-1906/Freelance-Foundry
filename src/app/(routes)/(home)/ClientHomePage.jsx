'use client';

import Image from "next/image";
import {appName, typewritingTexts} from "@/globals/Constants";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import {servicesPath, signInPath} from "@/globals/Routes";
import Services from "@/components/home/services";
import {Button} from "@/components/ui/button";
import {useCallback} from "react";
import {useRouter} from "next/navigation";

function ClientHomePage() {
    let router = useRouter();

    const handleSubmitCustomRequest = useCallback(() => {
        router.push(signInPath);
    }, [router]);

    return (
        <div className={'flex flex-col justify-center items-center mt-10'}>
            <Image src={'/assets/logo.png'} alt={'logo'} width={100} height={100} className={'w-24 sm:w-28 md:w-36 xl:w-48'}/>
            <p className={'text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold tracking-wide'}>{appName}</p>
            <p className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-center tracking-wide'}>Welcome to Quify!</p>

            {/** Get Job Referrals */}
            {/** Ace Mock Interviews */}
            {/** Find Your Mentor */}
            <div className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold tracking-wide mb-4'}>
                <Typewriter options={{strings: typewritingTexts, autoStart: true, loop: true}}/>
            </div>
            <p className={'mb-8 text-center'}>Unlock Your Career Potential with Expert Guidance</p>
            <Link href={servicesPath}>
                <Button>Explore Our Services</Button>
            </Link>

            {/** services */}
            <Services/>

            {/** submit custom request */}
            <div className={'flex flex-col gap-2'}>
                <p className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-center tracking-wide'}>Submit Your Custom Request</p>
                <p>Have specific needs for projects, assignments, exams, or business inquiries? Let us know!</p>
                <Button variant={'destructive'} className={'self-center'} onClick={handleSubmitCustomRequest}>Submit Custom Request</Button>
            </div>
        </div>
    );
}

export default ClientHomePage;
