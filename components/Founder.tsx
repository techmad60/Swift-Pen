import Image from "next/image";
import { changa } from "@/fonts/fonts";
export default function Founder() {
    return (
        <section className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-12 xl:gap-24">
            <Image 
                src={"/images/founder.svg"}
                width={276}
                height={348.28}
                alt="Hero Image"
                className="lg:pt-0 lg:w-[24rem] xl:w-[32rem]"
            />
            <div className="flex flex-col items-center lg:items-start lg:text-start">
                <div className="text-text-color-two py-4">
                    <p className="text-xs px-8 text-center text-text-color-two lg:text-start lg:px-0 lg:text-lg lg:w-[470px] ">At Swift Pen, we simplify the freelancing process, ensuring you get reliable, high-quality services in ghostwriting, book editing, cover design, and more. With our dedicated administrator, Mr Raphael, we match your project with the best freelancer from our talented pool, guaranteeing timely delivery, exceptional quality, and budget-friendly solutions. Trust Swift Pen to bring your project to life.</p>
                </div>
            </div>
        </section>
    )
}