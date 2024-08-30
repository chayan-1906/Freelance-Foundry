'use client';

import Image from "next/image";
import {appName} from "@/globals/Constants";
import {FaGoogle} from "react-icons/fa6";
import {MdOutlineArrowRight} from "react-icons/md";
import {useState} from "react";
import Link from "next/link";
import {signInPath} from "@/globals/Routes";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {handleSignUp} from "@/utils/cognitoActions";
import {useRouter} from "next/navigation";

function ClientSignUpPage() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    let router = useRouter();

    return (
        <div className={'flex flex-col mt-20 p-6 px-12 sm:px-20 max-w-xl items-center border rounded-md gap-6'}>
            {/** header */}
            <div className={'flex flex-col items-center gap-4'}>
                <Image src={'/assets/logo.png'} alt={appName} width={100} height={100}/>
                {/*<p className={'text-3xl font-bold'}>{appName}</p>*/}
                <p className={'text-2xl xl:text-3xl font-bold text-center'}>Sign up to {appName}</p>
                {/*<p className={'text-base xl:text-xl font-bold text-center'}>Welcome back! Please sign in to continue</p>*/}
            </div>

            {/** body / content */}
            <div className={'flex flex-col w-full gap-6'}>
                <Button className={'flex gap-3'}><FaGoogle/>Continue with Google</Button>
                <div className={'flex w-full items-center gap-4'}>
                    <div className={'border-t w-3/4'}/>
                    <span className={'font-bold'}>or</span>
                    <div className={'border-t w-3/4'}/>
                </div>

                {/** username */}
                <div className={'flex flex-col gap-2'}>
                    <Label htmlFor={'username'} className={'font-bold'}>UserName</Label>
                    <Input id={'username'} className={'border w-full rounded-md p-2'} type={'name'} onChange={(e) => setForm({...form, username: e.target.value})}/>
                </div>

                {/** email address */}
                <div className={'flex flex-col gap-2'}>
                    <Label htmlFor={'email'} className={'font-bold'}>Email Address</Label>
                    <Input id={'email'} className={'border w-full rounded-md p-2'} type={'email'} onChange={(e) => setForm({...form, email: e.target.value})}/>
                </div>

                {/** password */}
                <div className={'flex flex-col gap-2'}>
                    <Label htmlFor={'password'} className={'font-bold'}>Password</Label>
                    <Input id={'password'} className={'border w-full rounded-md p-2'} type={'password'} onChange={(e) => setForm({...form, password: e.target.value})}/>
                </div>

                <Button disabled={!form.username || !form.email || !form.password} onClick={() => handleSignUp(null, form, router)}>Create Account <MdOutlineArrowRight size={24}/></Button>
            </div>

            {/** footer */}
            <div>
                <p>Already have an account? <Link href={signInPath}><span className={'font-bold text-destructive'}>Sign In</span></Link></p>
            </div>
        </div>
    );
}

export default ClientSignUpPage;
