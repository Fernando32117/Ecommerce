"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState<"sign-in" | "sign-up">("sign-in");

  const Logo = () => (
    <Link href="/" className="group">
      <div className="flex items-center gap-0.5">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          E
        </span>
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          C
        </span>
        <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          O
        </span>
        <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          M
        </span>
        <span className="bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          M
        </span>
        <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          E
        </span>
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          R
        </span>
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          C
        </span>
        <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-3xl">
          E
        </span>
      </div>
      <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></div>
    </Link>
  );

  const TabNavigation = () => (
    <div className="bg-muted text-muted-foreground inline-flex h-9 w-full items-center justify-center rounded-lg p-[3px]">
      <button
        onClick={() => setActiveTab("sign-in")}
        className={`focus-visible:ring-ring/50 inline-flex h-[calc(100%-1px)] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 ${
          activeTab === "sign-in"
            ? "bg-background text-foreground dark:border-input dark:bg-input/30 shadow-sm"
            : "text-foreground dark:text-muted-foreground"
        }`}
      >
        Entrar
      </button>
      <button
        onClick={() => setActiveTab("sign-up")}
        className={`focus-visible:ring-ring/50 inline-flex h-[calc(100%-1px)] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 ${
          activeTab === "sign-up"
            ? "bg-background text-foreground dark:border-input dark:bg-input/30 shadow-sm"
            : "text-foreground dark:text-muted-foreground"
        }`}
      >
        Criar conta
      </button>
    </div>
  );

  const ImageSection = () => (
    <div className="hidden lg:block lg:flex-1">
      <div className="relative h-full w-full">
        <Image
          src="/login.jpg"
          alt="Authentication illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );

  const FormSection = () => (
    <div className="flex-1 lg:flex lg:items-center lg:justify-center lg:bg-gray-50 lg:px-8">
      <div className="w-full max-w-md p-6 lg:max-w-lg">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>
          <TabNavigation />
        </div>
        <AnimatePresence mode="wait">
          {activeTab === "sign-in" ? (
            <motion.div
              key="sign-in"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <SignInForm />
            </motion.div>
          ) : (
            <motion.div
              key="sign-up"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <SignUpForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {activeTab === "sign-in" ? (
          <motion.div
            key="sign-in-layout"
            className="flex h-screen w-full flex-col lg:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FormSection />
            <ImageSection />
          </motion.div>
        ) : (
          <motion.div
            key="sign-up-layout"
            className="flex h-screen w-full flex-col lg:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ImageSection />
            <FormSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Authentication;
