import React from "react";

export const ImageSection = () => {
  return (
    <div className="grow mt-8 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-9/12 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09221d8f538c6a85f485f34f6c9d24f57c414e7bc32ad88f4a08a822195ff637?placeholderIfAbsent=true"
            alt="AI Generated Content"
            className="aspect-[422/527] object-contain w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_2px_8.3px_0px_rgba(0,0,0,0.25)] grow mt-11 max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/842bf3d488377e5ecd0bb4a71935d19f8acd68aa062d1378a286a6d1d0907349?placeholderIfAbsent=true"
            alt="Additional Content"
            className="aspect-[1.75] object-contain w-[138px] shrink-0 max-w-full rounded-[0px_0px_0px_0px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
