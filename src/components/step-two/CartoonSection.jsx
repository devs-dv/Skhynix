import React from "react";

export const CartoonSection = () => {
  return (
    <div className="flex w-full flex-col mt-[186px] px-[61px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-black text-[35px] font-bold tracking-[-0.35px] text-center max-md:max-w-full">
        AI 기반 카툰 & 피드 연결 콘텐츠
      </div>
      <div className="text-black text-[22px] font-normal leading-9 tracking-[-0.22px] mt-[22px] max-md:max-w-full">
        스토리 전달력을 강화하기 위해 한 컷으로 구성된 AI 카툰을 제작하고,
        <br />
        SNS 피드에서 자연스럽게 연결되는 콘텐츠를 구현했다.
      </div>
      <div className="self-stretch flex w-full items-start gap-[30px] flex-wrap mt-3.5 max-md:max-w-full">
        <div className="grow shrink basis-auto mt-[39px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a306e8ea63546e58b33404748af39d8befb5a898d00c4efbc52bbc58653120?placeholderIfAbsent=true"
                alt="AI Cartoon 1"
                className="aspect-[4/5] object-contain w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_2px_8.3px_0px_rgba(0,0,0,0.25)] grow max-md:mt-3"
              />
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac53755d8501bba24f39ee267919ed951ed6f995c948aa386027d926a95ead6e?placeholderIfAbsent=true"
                alt="AI Cartoon 2"
                className="aspect-[4/5] object-contain w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_2px_8.3px_0px_rgba(0,0,0,0.25)] grow max-md:mt-3"
              />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(165,196,3,1)] text-[23px] text-white font-bold text-center tracking-[-0.23px] leading-loose px-[27px] py-3 rounded-[80px] max-md:px-5">
          피드 연결
        </div>
      </div>
    </div>
  );
};

export default CartoonSection;
