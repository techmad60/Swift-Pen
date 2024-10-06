import Header from "@/components/Header";
import Services from "@/components/Services";
import Image from "next/image";
import { montsy } from "@/fonts/fonts";
export default function ServicePage () {
    return (
        <>
          <Header />
          <section className={`${montsy.className} bg-dot-pattern lg:px-16 flex flex-col justify-center items-center w-full self-center`}>
            <Services />
            <div className="flex flex-col px-6 text-sm text-slate-600 lg:grid grid-cols-2 lg:gap-12 max-w-5xl">
                <div className="text-center flex-flex-col lg:text-start">
                    <p className="p-6">At Swiftpen, we offer a comprehensive suite of services tailored to help you achieve your writing and publishing goals. Whether you need expert ghostwriting, meticulous editing, or a striking book cover, we have you covered. Explore what we can do for you below:</p>
                    <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                        <Image 
                        src={"/images/bullet.svg"}
                        width={12}
                        height={12}
                        alt="Hero Image"
                        />
                        <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">GHOST WRITING SERVICES</h2>
                    </div>
                    <p className="px-6 py-4">Bring your story to life without lifting a pen. Our professional ghostwriting services are designed to transform your ideas into well-crafted narratives that resonate with your target audience.</p>
                    <p className="px-6 py-4"><span className="text-text-color-one font-medium">Full-Length Books</span> <br /> From fiction to non-fiction, we deliver complete books that capture your unique voice.</p>
                    <p className="px-6 py-4"><span className="text-text-color-one font-medium">Autobiographies & Memoirs</span> <br /> Share your life&apos;s journey with expertly written and compelling narratives.
                    </p>
                    <p className="px-6 py-4"><span className="text-text-color-one font-medium">Business Writing</span> <br /> From thought leadership articles to white papers, we help you establish your authority in your field.</p>
                    <p className="px-6 py-4"><span className="text-text-color-one font-medium">Pricing</span> <br /> Custom packages available</p>
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
                            <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">BOOK EDITING SERVICES</h2>
                        
                        </div>
                        <p className="px-6 py-4">Perfect your manuscript with our thorough editing services. We offer various levels of editing to meet your specific needs, ensuring your work is polished and publication-ready.</p>

                        <p className="px-6 py-4"><span className="text-text-color-one font-medium">Substantive Editing</span> <br/> Improve the structure, content, and overall impact of your manuscript</p>

                        <p className="px-6 py-4"><span className="text-text-color-one font-medium">Line Editing</span> <br /> Refine your writing at the sentence level for clarity, flow, and style.</p>

                        <p className="px-6 py-4"><span className="text-text-color-one font-medium">Proofreading</span> <br /> Eliminate minor errors to ensure a clean, professional final product.
                        </p>
                        <p className="px-6 py-4">Pricing: Starting at [Insert Price]</p>
                    </div>

                    <div  className="flex flex-col text-center text-slate-600 text-sm lg:text-start">
                        <div className="flex items-center w-full gap-4 justify-center mt-4 lg:justify-start">
                            <Image 
                            src={"/images/bullet.svg"}
                            width={12}
                            height={12}
                            alt="Hero Image"
                            />
                            <h2 className="text-text-color-one text-center text-lg lg:text-start tracking-widest font-medium">BOOK COVER DESIGN</h2>
                        </div>
                        <p className="px-6 py-4">Your book&apos;s cover is its first impression. Our design team creates visually appealing and marketable covers that entice readers to pick up your book.</p>
                        <p className="px-6 py-4"><span className="text-text-color-one font-medium">Custom Cover Design</span> <br /> Bespoke designs that reflect your book&apos;s genre and tone.</p>
                        <p className="px-6 py-4"><span className="text-text-color-one font-medium">E-Book & Print Ready</span> <br /> High-resolution designs formatted for both digital and physical distribution.</p>
                        <p className="px-6 py-4"><span className="text-text-color-one font-medium">Pricing</span> <br /> Starting at [Insert Price]</p>
                    </div>
                </div>
            </div>
          </section>
          
        </>
    )
}