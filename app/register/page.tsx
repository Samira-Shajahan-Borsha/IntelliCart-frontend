"use client";

// import { RegisterForm } from "../(admin)/admin/auth/_components/register-form";
import LogoSquare from "@/components/logo-square";
import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "@/components/auth/register/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="h-screen w-screen flex bg-black text-zinc-100 antialiased">
      
      {/* Left side — Image & Branding (Dark Cinema Overlay) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-zinc-950 border-r border-zinc-800">
        <Image
          src="https://imgs.search.brave.com/FVpTr3m6nbVGIzqxeX4HARAfSVErC8Hqri2Uyd3FY4M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/Ni8yOC8xNC8yMi9q/ZXN1cy04ODU5NjAw/XzY0MC5qcGc" 
          alt="Store Creation Background"
          fill
          priority
          className="object-cover opacity-30 blend-luminosity" 
        />
        {/* gradient black overlay*/}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        
        <div className="relative z-10 flex flex-col justify-between p-16 h-full text-white">
          {/* Top Brand Tag */}
          <div className="flex items-center gap-2">
            <LogoSquare />
            <span className="font-semibold tracking-wider uppercase text-sm text-zinc-300">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </span>
          </div>

          {/* Bottom Branding Texts */}
          <div className="max-w-md">
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME || "InteliCart"}
            </h1>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Manage your store, orders, and customers — seamlessly powered with AI assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Right side — Form Container (Pure Black UI) */}
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-between p-8 md:p-12 lg:p-16 bg-black">
        
        {/* Mobile View Top Logo */}
        <div className="flex lg:hidden items-center gap-2 self-start mb-4">
          <LogoSquare />
          <span className="font-bold text-sm uppercase tracking-wider text-white">
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </span>
        </div>

        {/* Center — Register Form Card */}
        <div className="w-full max-w-md flex flex-col justify-center flex-1 my-auto">
          {/* <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Create an Account</h2>
            <p className="text-sm text-zinc-400 mt-2">
              Get started by creating your secure administrator store account.
            </p>
          </div> */}
          
          {/* RegisterForm component */}
          <RegisterForm />
        </div>

        {/* Bottom — Premium Monochrome Footer */}
        <div className="w-full max-w-md border-t border-zinc-800 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p className="text-zinc-400">
            Already have an account?{" "}
            <Link 
              href="/login"
              className="font-medium text-white hover:text-zinc-300 underline underline-offset-4 transition-colors"
            >
              Sign in
            </Link>
          </p>
          
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
