"use client";
import Footer from "@/components/footer";
import NavbarModel from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import blog1 from "/public/blogDemo.jpg";
import WiderBlog from "@/components/wider-blog";
import BlogCard from "@/components/blog-card";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen  flex-col items-center justify-between ">
        <div className="container mx-auto  py-8 px-6 lg:px-0">
          {" "}
          {/* Container with padding and margin */}
          <header className="flex justify-between items-center">
            <NavbarModel />
          </header>
          <main>
            <section className="hero text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Best for Lip Care!!</h2>
              <p className="text-gray-700 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            <section className=" my-8">
              <WiderBlog
                linkText="view"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat."
                imageSrc={blog1}
                title="Lorem ipsum"
              />
            </section>

            <section>
              <BlogCard />
            </section>
            <section className="info text-center py-16">
              <h2>What is Lorem Ipsum?</h2>
              <p className="text-gray-700 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </section>
          </main>
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
