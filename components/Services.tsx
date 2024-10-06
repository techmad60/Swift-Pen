import { montsy, merri } from "@/fonts/fonts";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Services () {
    return (
       
        <div className={`${montsy.className} flex flex-col justify-center items-center py-8 px-6 max-w-5xl self-center`}>
            <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Services</h2>
            <p className={`${merri.className} text-text-color-five lg:text-2xl`}>Experience the Difference</p>
            <div className="py-4 px-6 flex flex-col space-y-12 w-full lg:flex-row lg:space-y-0 lg:mt-12 space-x-4 lg:px-0">
                <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full bg-white p-3 self-center shadow-md lg:mt-0 h-[18rem] rounded-md">
                    <div className="flex items-center w-full gap-4 justify-center mt-4">
                        <Image 
                        src={"/images/bullet.svg"}
                        width={12}
                        height={12}
                        alt="Hero Image"
                        />
                        <p className="flex items-center gap-4 text-text-color-four">Ghost Writing </p>
                    </div>
                    <p className="text-center px-4 text-text-color-four mt-2">We craft stunning book covers that grab attention and perfectly display the essence of your story. Get custom design! </p>
                    <div className="flex self-end h-full text-[#15B7B2] items-end">
                        <FaArrowRight />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full bg-white p-4 self-center shadow-md lg:mt-0 h-[18rem] rounded-md">
                    <div className="flex items-center w-full gap-4 justify-center mt-4">
                        <Image 
                        src={"/images/bullet.svg"}
                        width={12}
                        height={12}
                        alt="Hero Image"
                        />
                        <p className="flex items-center gap-4 text-text-color-four">Book Cover Design </p>
                    </div>
                    <p className="text-center px-4 text-text-color-four mt-2">Tell your story with our expert ghostwriting services. We write compelling narratives, articles and books that reflect your own unique perspective and vision </p>
                    <div className="flex self-end h-full text-[#15B7B2] items-end">
                        <FaArrowRight />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full bg-white p-4 self-center shadow-md lg:mt-0 h-[18rem] rounded-md">
                    <div className="flex items-center w-full gap-4 justify-center mt-4">
                        <Image 
                        src={"/images/bullet.svg"}
                        width={12}
                        height={12}
                        alt="Hero Image"
                        />
                        <p className="flex items-center gap-4 text-text-color-four">Book Editing </p>
                    </div>
                    <p className="text-center px-4 text-text-color-four mt-2">Fine-tune your manuscript with our expert editing Services </p>
                    <div className="flex self-end h-full text-[#15B7B2] items-end">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
       
    )
}