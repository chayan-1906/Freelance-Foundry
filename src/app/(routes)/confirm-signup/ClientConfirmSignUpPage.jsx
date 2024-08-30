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
import {handleConfirmSignUp, handleSignUp} from "@/utils/cognitoActions";
import {useRouter} from "next/navigation";

function ClientConfirmSignUpPage() {
    const [form, setForm] = useState({
        email: '',
        code: '',
    });
    let router = useRouter();

    return (
        <div className={'flex flex-col mt-20 p-6 px-12 sm:px-20 max-w-xl items-center border rounded-md gap-6'}>
            {/** header */}
            <div className={'flex flex-col items-center gap-4'}>
                <Image src={'/assets/logo.png'} alt={appName} width={100} height={100}/>
                {/*<p className={'text-3xl font-bold'}>{appName}</p>*/}
                <p className={'text-2xl xl:text-3xl font-bold text-center'}>Please confirm your account</p>
            </div>

            {/** body / content */}
            <div className={'flex flex-col w-full gap-6'}>
                {/** email address */}
                <div className={'flex flex-col gap-2'}>
                    <Label htmlFor={'email'} className={'font-bold'}>Email Address</Label>
                    <Input id={'email'} className={'border w-full rounded-md p-2'} type={'email'} onChange={(e) => setForm({...form, email: e.target.value})}/>
                </div>

                {/** code */}
                <div className={'flex flex-col gap-2'}>
                    <Label htmlFor={'code'} className={'font-bold'}>Code</Label>
                    <Input id={'code'} className={'border w-full rounded-md p-2'} type={'number'} onChange={(e) => setForm({...form, code: e.target.value})}/>
                </div>

                <Button disabled={!form.email || !form.code} onClick={() => handleConfirmSignUp(null, form, router)}>Confirm <MdOutlineArrowRight size={24}/></Button>
                <Button disabled={!form.email || !form.code} onClick={() => handleSignUp(null, form, router)}>Resend Verification Code <MdOutlineArrowRight size={24}/></Button>
            </div>

            {/** footer */}
            <div>
                <p>Already have an account? <Link href={signInPath}><span className={'font-bold text-destructive'}>Sign In</span></Link></p>
            </div>
        </div>
    );
}

export default ClientConfirmSignUpPage;
