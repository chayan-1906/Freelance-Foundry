import Image from "next/image";
import Link from "next/link";
import {homePath} from "@/globals/Routes";
import {appName} from "@/globals/Constants";
import Button from "@/components/reusable/Button";

function Navbar() {
    return (
        <div className={'flex flex-1 items-center justify-between bg-primary-200'}>
            {/** navbar */}
            <Link href={homePath} className={'flex gap-2 items-center'}>
                <Image src={'../assets/logo.svg'} alt={'logo'} width={100} height={100}/>
                <p className={'text-base sm:text-xl md:text-2xl xl:text-3xl font-bold text-primary-foreground tracking-wide'}>{appName}</p>
            </Link>

            {/** action buttons */}
            <div>

            </div>
        </div>
    );
}

export default Navbar;
