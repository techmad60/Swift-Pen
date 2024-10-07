"use client";
import { useState} from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import Image from "next/image";
import { montsy } from "@/fonts/fonts";
import FormButton from "@/components/FormButton";
import HorizontalLine from "@/components/HorizontalLine";
import GoogleButton from "@/components/GoogleButton";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <div className={`${montsy.className} flex flex-col justify-center items-center font-light text-sm text-color-one`}>
      <Image 
        src={"/images/logo.svg"}
        width={100}
        height={100}
        alt="Hero Image"
        />
        <form  className={`flex flex-col justify-center shadow-md px-12 rounded-[10px] w-72 bg-white`}>
            <label className="pt-6 pb-1">Email</label>
            <input 
            type="email" 
            name="email" 
            required 
            autoFocus 
            className="rounded-[10px] border p-2" 
            
            />
            <label className="pt-6 pb-1">Password</label>
            <div className="relative">
            <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                required 
                className="rounded-[10px] border p-2 w-full" 
            />
            <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute inset-y-0 right-3 flex items-center text-btn-two-color"
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
        
            <p className="mt-3 text-btn-two-color cursor-pointer duration-300 hover:text-primary-color">
            Forgot Password?
            </p>
        
            <FormButton ButtonText="Login"/>
        </form>
        <p className="mt-8">Don&apos;t have an account? 
            <Link href="/signup">
            <span className="text-btn-two-color cursor-pointer duration-300 hover:text-primary-color"> Sign up</span>
            </Link>
        </p>
        <HorizontalLine />
        <GoogleButton text="Sign in"/>
    </div>
  );
}
