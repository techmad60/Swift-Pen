import Header from "@/components/Header";
import { montsy, merri } from "@/fonts/fonts";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function ContactPage () {
    return (
        <>
         <Header />
         <section className={`${montsy.className} lg:px-16 flex flex-col justify-center items-center w-full self-center bg-curved-pattern bg-[#F4F1D7]`}>
            <div>
                <h2 className="text-h2-color tracking-[0.4em] text-xs pt-4 text-center">Get in touch</h2>
                <p className={`${merri.className} text-text-color-five text-center lg:text-2xl`}>Contact Us</p>
            </div>
            <div className="bg-curved-pattern">
                <div className="flex flex-col justify-center items-center w-[15rem] shadow-md mt-8 rounded-md bg-white lg:w-[30rem] px-6 lg:px-12">
                    <Image 
                        src={"/images/reach.svg"}
                        width={100}
                        height={100}
                        alt="Hero Image"
                        />
                    <form className="flex flex-col justify-center items-center gap-2 lg:items-start lg:justify-start w-full">
                        <label htmlFor="Name"></label>
                        <input type="text" placeholder="Name" className="outline-none border-b p-2 placeholder:text-xs rounded-md w-full"/>
                        <label htmlFor="Email"></label>
                        <input type="email" placeholder="Email" className="outline-none border-b p-2 placeholder:text-xs rounded-md w-full"/>
                        <label htmlFor="Message"></label>
                        <input id="message" name="message"  placeholder="Type your message" className="outline-none border-b p-2 placeholder:text-xs rounded-md w-full"></input>
                        <button type="submit" className="text-white text-xs m-5 rounded-sm items-start lg:self-end text-center bg-btn-two-color w-[7rem] py-4">Send message</button>
                    </form>
                    
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row my-16 lg:gap-12">
                <div className="flex flex-col space-y-6 mt-8 lg:mt-0">
                    <div className="flex items-center gap-4 mt-4">
                        <Image 
                        src={"/images/location.svg"}
                        width={24}
                        height={24}
                        alt="Hero Image"
                        />
                        <p className="text-btn-one-color text-xs">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image 
                        src={"/images/phone.svg"}
                        width={20}
                        height={20}
                        alt="Hero Image"
                        />
                        <p className="text-btn-one-color text-xs">(684) 555-0102</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image 
                        src={"/images/mail.svg"}
                        width={20}
                        height={20}
                        alt="Hero Image"
                        />
                        <p className="text-btn-one-color text-xs">alma.lawson@example.com</p>
                    </div>
                </div>
            
                <div className="social-icons flex justify-center items-center space-x-4 m-12 lg:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={20} className="text-text-color-five" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} className="text-text-color-five" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={20} className="text-text-color-five" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={20} className="text-text-color-five" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} className="text-text-color-five" />
                    </a>
                </div>
            </div>
            
         </section>
        </>
    )
}