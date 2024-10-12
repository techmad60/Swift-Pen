//FAQS PAGE
import Header from "@/components/Header";
import { montsy, merri } from "@/fonts/fonts";
import Image from "next/image";
export default function Faqs() {
    return (
        <>
            <Header />
            <section className={`${montsy.className} bg-dot-pattern lg:px-16 flex flex-col justify-center items-center w-full self-center`}>
                <div className="bg-[#F4F1D7] py-4 rounded-md">
                    <div>
                        <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4 text-center">Get answers</h2>
                        <p className={`${merri.className} text-text-color-five text-center lg:text-2xl`}>Frequently asked Questions</p>
                    </div>
                    <div className="flex flex-col px-6 py-8 text-sm text-slate-600 lg:grid grid-cols-2 lg:gap-12 max-w-5xl">
                        <div className="text-center flex-flex-col lg:text-start">
                            <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">WHAT IS GHOSTWRITING AND HOW DOES IT WORK?</h2>
                            </div>
                            <p className="px-6 py-4">Ghostwriting is the process where a professional writer creates content on behalf of another person, who is credited as the author. Our process begins with an initial consultation to understand your ideas, goals, and voice. From there, we draft the content, allowing for revisions to ensure the final product aligns with your vision.
                            </p>

                            <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">HOW DO YOU ENSURE THAT THE BOOK WILL REFLECT MY VOICE AND IDEAS?</h2>
                            </div>
                            <p className="px-6 py-4">We take the time to get to know you through detailed interviews, discussions, and questionnaires. This helps us understand your voice, style, and the message you want to convey. Throughout the writing process, we provide drafts for your review and feedback, ensuring the final manuscript is authentic to your voice.
                            </p>

                            <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">  HOW LONG DOES IT TAKE TO COMPLETE A GHOST WRITING PROJECT?</h2>
                            </div>
                            <p className="px-6 py-4">The timeline for ghostwriting varies depending on the project&apos;s scope, such as the length of the book and the amount of research required. On average, a full-length book can take anywhere from 3 to 12 months to complete. We provide a more specific timeline during the consultation phase.
                            </p>
                            <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium"> WHAT IS THE COSTS OF YOUR SERVICES?</h2>
                            </div>
                            <p className="px-6 py-4">Our pricing depends on the type and scope of the project. Ghostwriting projects are typically billed at a flat rate, which we determine based on factors like length and complexity. Editing, cover design, and other services have varying rates, often starting at [Insert Price]. We&apos;re happy to provide a detailed quote after an initial discussion of your needs.
                            </p>
                            <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                <Image 
                                src={"/images/bullet.svg"}
                                width={12}
                                height={12}
                                alt="Hero Image"
                                />
                                <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">WILL I OWN THE RIGHTS TO THE WORK YOU CREATE?</h2>
                            </div>
                            <p className="px-6 py-4">Yes, once the project is complete and the final payment is made, you will own all rights to the work. You are free to publish, distribute, or modify it as you see fit, with no further obligations to us.
                            </p>
                        </div>
                        
                        <div>
                            <div className="flex flex-col text-center text-sm text-slate-600 lg:text-start">
                                <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                    <Image 
                                    src={"/images/bullet.svg"}
                                    width={12}
                                    height={12}
                                    alt="Hero Image"
                                    />
                                    <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">HOW DO YOU HANDLE CONFIDENTIALITY?</h2>
                                
                                </div>
                                <p className="px-6 py-4">We take confidentiality very seriously. All projects are handled with the utmost discretion, and we are happy to sign a Non-Disclosure Agreement (NDA) to protect your privacy and intellectual property.
                                </p>
                            </div>

                            <div className="flex flex-col text-center text-sm text-slate-600 lg:text-start">
                                <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                    <Image 
                                    src={"/images/bullet.svg"}
                                    width={12}
                                    height={12}
                                    alt="Hero Image"
                                    />
                                    <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">CAN I SEE SAMPLES OF YOUR PREVIOUS WORK?</h2>
                                </div>
                                <p className="px-6 py-4">Yes, we can provide samples upon request, either anonymized or with the consent of previous clients. We also have a portfolio section on our website showcasing some of our past projects, particularly in book cover design and editing.
                                </p>
                            </div>

                            <div className="flex flex-col text-center text-sm text-slate-600 lg:text-start">
                                <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                    <Image 
                                    src={"/images/bullet.svg"}
                                    width={12}
                                    height={12}
                                    alt="Hero Image"
                                    />
                                    <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">What is the difference between developmental editing, copy editing, and proofreading?</h2>
                                </div>
                                <p className="px-6 py-4">Developmental Editing focuses on the structure, content, and overall flow of your manuscript. It involves making suggestions to improve the story, character development, pacing, and more.
                                </p>
                                <p className="px-6 py-4">Copy Editing is about refining your text for clarity, style, and consistency, while also correcting grammar, punctuation, and syntax.
                                </p>
                                <p className="px-6 py-4">Proofreading is the final step in the editing process, where we catch any remaining typos, misspellings, and formatting errors.
                                </p>
                            </div>

                            <div className="flex flex-col text-center text-slate-600 text-sm lg:text-start">
                                <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                    <Image 
                                    src={"/images/bullet.svg"}
                                    width={12}
                                    height={12}
                                    alt="Hero Image"
                                    />
                                    <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">What if I&apos;m not satisfied with the final product?</h2>
                                </div>
                                <p className="px-6 py-4">Our goal is to exceed your expectations. We work closely with you throughout the process to ensure you&apos;re happy with the final product. We offer revisions at various stages, and we won&apos;t consider a project complete until you&apos;re fully satisfied.
                                </p>
                            </div>
                            <div className="flex flex-col text-center text-slate-600 text-sm lg:text-start">
                                <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                                    <Image 
                                    src={"/images/bullet.svg"}
                                    width={12}
                                    height={12}
                                    alt="Hero Image"
                                    />
                                    <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">HOW DO I GET STARTED?</h2>
                                </div>
                                <p className="px-6 py-4">Getting started is easy! Simply contact us through our website, and we&apos;ll schedule an initial consultation to discuss your project in detail. After that, we&apos;ll provide a proposal outlining the scope, timeline, and cost of the project. Once you approve, we&apos;ll begin the work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
   
        </>
       
    )
}