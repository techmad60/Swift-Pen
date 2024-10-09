import Image from "next/image";
import { montsy, merri, changa } from "@/fonts/fonts";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Testimonials from "./Testimonials";
import Crafts from "./Crafts";

export default function Main () {

    return (
        <main className="">
            <section className="flex flex-col items-center text-center justify-center py-8 sm:p-8 lg:flex-row-reverse lg:px-16 lg:gap-16 xl:gap-44">
                <p className={`${montsy.className} text-xs text-h2-color lg:hidden description`}>We make things easy</p>
                <div className="py-4" >
                    <Image 
                    className="lg:w-[500px] hero"
                    src={"/images/hero.svg"}
                    width={295.6}
                    height={279}
                    alt="Hero Image"
                    />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:text-start">
                    <p className={`${montsy.className} text-xs text-h2-color hidden lg:flex lg:text-2xl description`}>WE MAKE THINGS EASY</p>
                    <h1 className={`${merri.className} text-sm text-h1-color lg:text-5xl`}><span className="action">Quit</span> <span className="action">the</span> <span className="action">Hunt</span></h1>

                    <p className="text-h2-color text-xs px-16 py-3 lg:px-0 lg:w-[250px] about">Searching for the perfect freelancer can be overwhelming. Let us simplify things</p>
                    <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:gap-4 lg:items-start">
                        {/* <button className="bg-btn-one-color text-white font-medium text-xs p-3 w-3/4 rounded-md lg:w-fit lg:p-2 lg:text-btn-two-color lg:bg-white">Try a demo</button> */}
                        <button className="bg-btn-two-color mt-4 text-white font-medium text-xs p-3 w-30 rounded-md lg:w-fit lg:p-3 lg:-order-1 lg:text-sm button duration-300 hover:bg-lime-500"><a href="mailto:engage@swiftpenenterprise.com?subject=Swift%20Pen%20Project&body=Project%20Name%3A%20(Please%20Prefill%20your%20Project%20Name)%0A%0ABrief%20Description%3A%20(Provide%20a%20compelling%20description%20that%20highlights%20your%20vision%20and%20key%20goals%20for%20this%20project)%0A%0AEstimated%20Project%20Timeline%3A%0A%0AStart%20Date%3A%0A%0AEstimated%20Budget%3A%0A%0A(Any%20other%20information)%0A%0ABest%20Regards%2C%0A(Your%20name)"></a>Get started</button>
                    </div>
                </div> 
            </section>

            <section className="flex flex-col items-center bg-btn-two-color py-4 rounded-md mt-8 sm:p-8 lg:flex-row lg:px-16 lg:justify-center lg:gap-12 lg:rounded-none xl:gap-24 about-container">
                <Image 
                    src={"/images/founder.svg"}
                    width={276}
                    height={348.28}
                    alt="Hero Image"
                    className="pt-6 lg:pt-0 lg:w-[24rem] xl:w-[29rem] founder"
                />
                <div className="flex flex-col items-center lg:items-start lg:text-start quote">
                    <div className="text-text-color-two">
                        <p className={`${changa.className} text-4xl pl-12 leading-none lg:text-8xl lg:pl-0`}>&quot;</p>
                        <p className="text-xs px-8 text-center text-text-color-two lg:text-start lg:px-0 lg:text-lg lg:w-[470px]">At Swift Pen, we simplify the freelancing process, ensuring you get reliable, high-quality services in ghostwriting, book editing, cover design, and more. With our dedicated administrator, Mr Raphael, we match your project with the best freelancer from our talented pool, guaranteeing timely delivery, exceptional quality, and budget-friendly solutions. Trust Swift Pen to bring your project to life.</p>
                    </div>
                    <Link href="/about">
                        <button className="text-xs text-text-color-three border-b hover:text-amber-400 duration-150 hover:border-b hover:border-amber-400 border-text-color-three pb-2 mt-8 lg:self-end lg:text-lg">Read more</button> 
                    </Link>
                    
                </div>
            </section>
            

            <section className="flex flex-col justify-center items-center py-8 px-6 bg-dot-pattern lg:px-16 services-container">
                <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4">Our Services</h2>
                <p className="text-text-color-five lg:text-2xl">Experience the Difference</p>
                <div className="py-4 px-6 grid grid-rows-3 grid-cols-1 space-y-12 w-full lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:space-x-4 lg:space-y-0 lg:mt-12 max-w-5xl">

                    <Link href="/services#ghost-writing">
                        <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full lg:flex-1 bg-white p-3 self-center shadow-md lg:mt-0 h-[18rem] rounded-md duration-300 hover:bg-yellow-100 service-1">
                            <div className="flex items-center w-full gap-4 justify-center mt-4">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <p className="flex items-center gap-4 text-text-color-four">Ghost Writing</p>
                            </div>
                            <p className="text-center px-4 text-text-color-four mt-2">Tell your story with our expert ghostwriting services. We write compelling narratives, articles, and books that reflect your own unique perspective and vision.</p>
                            <div className="flex self-end h-full text-[#15B7B2] items-end">
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>

                    <Link href="/services#book-cover">
                        <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full lg:flex-1 bg-white p-3 self-center shadow-md lg:mt-0 h-[18rem] rounded-md duration-300 hover:bg-yellow-100 service-2">
                            <div className="flex items-center w-full gap-4 justify-center mt-4">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <p className="flex items-center gap-4 text-text-color-four">Book Cover Design</p>
                            </div>
                            <p className="text-center px-4 text-text-color-four mt-2">We craft stunning book covers that grab attention and perfectly display the essence of your story. Get custom design!</p>
                            <div className="flex self-end h-full text-[#15B7B2] items-end">
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>

                    <Link href="/services#book-editing">
                        <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full lg:flex-1 bg-white p-3 self-center shadow-md lg:mt-0 h-[18rem] rounded-md duration-300 hover:bg-yellow-100 service-3">
                            <div className="flex items-center w-full gap-4 justify-center mt-4">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <p className="flex items-center gap-4 text-text-color-four">Book Editing</p>
                            </div>
                            <p className="text-center px-4 text-text-color-four mt-2">Fine-tune your manuscript with our expert editing services.</p>
                            <div className="flex self-end h-full text-[#15B7B2] items-end">
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>
                </div>
                <Crafts />
            </section>
            <Testimonials />
        </main>
    )
}
