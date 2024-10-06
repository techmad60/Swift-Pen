import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
export default function Footer() {
    return (
        <footer className="px-6 py-8 space-y-6 flex flex-col lg:px-16 lg:items-center">
        <div className="space-y-6 lg:grid grid-cols-4 lg:gap-8 max-w-5xl lg:space-y-0 lg:justify-items-center w-full">
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Our Services</h2>
              <div className="flex flex-col space-y-6 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/bullet-brown.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Ghost Writing</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/bullet-brown.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Book cover Design</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/bullet-brown.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Book Editing</p>
                </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Contact Us</h2>
              <div className="flex flex-col space-y-6 ">
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
          </section>
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Follow Us</h2>
              <div className="flex flex-col space-y-6 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/instagram.svg"}
                    width={24}
                    height={24}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Instagram</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/facebook.svg"}
                    width={14}
                    height={14}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Facebook</p>
                </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-btn-one-color  text-sm font-medium pt-4">Get our App on</h2>
              <div className="flex flex-col space-y-4 ">
                <div className="flex items-center gap-4 mt-4">
                  <Image 
                    src={"/images/playStore.svg"}
                    width={24}
                    height={24}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Playstore</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={"/images/appStore.svg"}
                    width={20}
                    height={20}
                    alt="Hero Image"
                  />
                  <p className="text-btn-one-color text-xs">Appstore</p>
                </div>
            </div>
          </section>
        </div>

        <section className="flex flex-col justify-center lg:flex-row lg:items-center lg:justify-center lg:gap-[20rem] w-full lg:max-w-5xl">
          <form className="flex flex-col self-center  mt-16 lg:mt-24">
            <label className="text-text-color-one">Subscribe to our Newsletter</label>
            <input type="text" placeholder="Email" className="outline-none border-b pt-4 placeholder:text-xs"/>
            <button className="flex items-center self-end text-white p-2 gap-2 rounded-sm bg-[#786F21] mt-4">Send <span>
          <FaArrowRight /></span></button>
          </form>
          <div className="self-center mt-12 ">
            <Image 
              src={"/images/brownLogo.svg"}
              width={250}
              height={250}
              alt="Hero Image"
            />
          </div>
          
        </section>
        <p className="text-btn-two-color text-center text-xs mt-12 pt-24">Copyright 2024 &copy; All Rights Reserved</p>
      </footer>
    )
}