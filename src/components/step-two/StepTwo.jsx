import React from "react";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import FoohSection from "./FoohSection";
import CartoonSection from "./CartoonSection";

export const StepTwo = () => {
  return (
    <article className="rounded-[0px_0px_0px_0px]">
      <div className="w-full max-w-[1488px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <section className="w-[56%] max-md:w-full max-md:ml-0">
            <ContentSection />
          </section>
          <section className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <ImageSection />
          </section>
        </div>
      </div>
      <div className="mt-10 max-md:max-w-full">
        <FoohSection />
      </div>
      <CartoonSection />
    </article>
  );
};

export default StepTwo;
