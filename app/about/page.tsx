import Header from "@/components/Header";
import Founder from "@/components/Founder";
import { montsy, merri } from "@/fonts/fonts";
export default function AboutPage () {
    return (
        <div>
            <Header/>
            <section className={`${montsy.className} bg-btn-two-color rounded-md sm:p-8 py-8 lg:rounded-none lg:px-16 flex flex-col justify-center`}>
                <Founder />
                <div className="text-xs px-8 text-center text-text-color-two lg:text-start lg:px-0 lg:text-lg flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 w-full max-w-5xl self-center xl:gap-24 lg:mt-4" id="text-container">
                    <div className="">
                        <p className=""> Our goal is to ensure that your projects are completed on time, within budget, and to your exact specifications.
                        When you partner with us, you&apos;re not just hiring a freelancer; you&apos;re gaining a team dedicated to your project&apos;s success. We guarantee that your work will be delivered on time, meet your standards, and exceed your expectations—all without breaking the bank. </p>

                        <p className="py-4 ">
                        Swift Pen is here to make your life easier. Let us take the burden off your shoulders, so you can focus on what matters most. Choose us, and experience the difference of working with a team that truly cares about your success.
                        </p>
                    </div>
                    
                   <div>
                       <h1 className={`${merri.className} text-2xl mt-6 mb-2 lg:mt-0`}>How do we achieve this?</h1>
                        <p className="">It&apos;s simple. We&apos;ve streamlined the freelancing process so you don&apos;t have to worry about sorting through countless freelancers to find the right fit. </p>
                        <p className="">When you choose Swift Pen, our dedicated administrator, Mr. Raphael, takes the lead. He carefully matches your project with the best freelancer from our pool of talented professionals, ensuring that you receive the highest quality of service.</p>
                   </div>
                   
                </div>
                
            </section>
        </div>
    )
}