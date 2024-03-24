import Image from "next/image";
import React from "react";

const WiderBlog = ({ imageSrc, title, description, linkText }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className=" h-60 w-full object-cover md:h-full md:w-[400px]"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mx-autos">
            {title}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {linkText}
          </a>
          <p className="mt-2 text-ellipsis overflow-clip    line-clamp-4 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WiderBlog;
