"use client";
import Footer from "@/components/footer";
import NavbarModel from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import ceo from "/public/ceo.jpeg";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <NavbarModel />
        <div className=" text-4xl mx-8 text-center py-8">Glamstic blog site under construction</div>
        <div className=" text-3xl mx-16">
          <p className=" text-base font-mono max-w-screen-md">
            Introducing the visionary behind it all – our esteemed founder, a
            trailblazer who has shaped our journey with passion and purpose.
            Meet the driving force behind Glamstick, a visionary leader whose
            dedication and innovation have been instrumental in bringing our
            dreams to life. Get to know the architect of our success, as we
            proudly introduce the heart and soul of our organization
          </p>
          <div className=" text-center py-8">SHANA PA</div>
          <div className="flex flex-row justify-center ">
            <Image alt="founder" src={ceo} height={500} />
          </div>
        </div>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
