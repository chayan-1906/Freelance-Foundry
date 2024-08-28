'use client';

import Image from "next/image";
import {appName} from "@/globals/Constants";
import {Button} from "@radix-ui/themes";
import {FaGoogle} from "react-icons/fa6";
import {MdOutlineArrowRight} from "react-icons/md";
import {useState} from "react";
import Link from "next/link";
import {signUpPath} from "@/globals/Routes";

function ClientLoginPage() {
    const [email, setEmail] = useState();

    return (
        <div className={'flex flex-col mt-20 p-6 px-12 sm:px-20 max-w-xl items-center border rounded-md gap-6'}>
            {/** header */}
            <div className={'flex flex-col items-center gap-4'}>
                <Image src={'/assets/logo.png'} alt={appName} width={100} height={100}/>
                {/*<p className={'text-3xl font-bold'}>{appName}</p>*/}
                <p className={'text-2xl xl:text-3xl font-bold text-center'}>Sign in to {appName}</p>
                <p className={'text-base xl:text-xl font-bold text-center'}>Welcome back! Please sign in to continue</p>
            </div>

            {/** body / content */}
            <div className={'flex flex-col w-full gap-6'}>
                <Button size={'3'} className={'!cursor-pointer'}><FaGoogle/>Continue with Google</Button>
                <div className={'flex w-full items-center gap-4'}>
                    <div className={'border-t w-3/4'}/>
                    <span className={'font-bold'}>or</span>
                    <div className={'border-t w-3/4'}/>
                </div>

                {/** email address */}
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-bold'}>Email Address</p>
                    <input className={'border w-full rounded-md p-2'} type={'email'}/>
                </div>

                <Button size={'3'} className={'!cursor-pointer'} disabled={!email}>Continue <MdOutlineArrowRight size={24}/></Button>
            </div>

            {/** footer */}
            <div>
                <p>Don&apos;t have an account? <Link href={signUpPath}><span className={'font-bold text-secondary'}>Sign Up</span></Link></p>
            </div>
        </div>
    );
}

export default ClientLoginPage;
