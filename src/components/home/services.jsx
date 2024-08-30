import {services} from "@/globals/Constants";
import Link from "next/link";

function Services() {
    return (
        <div className={'my-10 p-10 flex flex-col w-full items-center gap-8 border rounded-2xl border-dashed'}>
            <p className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text- tracking-wide'}>Quify Services</p>

            <div className={'flex flex-wrap gap-10 justify-center'}>
                {
                    services.map((service) => (
                        <Link href={service.route} key={service.label} className={'flex flex-col w-52 h-52 p-4 gap-3 items-center rounded-lg border'}>
                            <p className={'text-primary font-bold text-base md:text-xl xl:text-2xl text-center'}>{service.label}</p>
                            <p className={'text-gray-400 font-semibold text-center'}>{service.description}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
