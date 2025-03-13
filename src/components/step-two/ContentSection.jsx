import React from "react";

export const ContentSection = () => {
  return (
    <div className="flex flex-col text-[22px] text-black font-bold tracking-[-0.22px] max-md:max-w-full max-md:mt-10">
      <div className="text-[rgba(165,196,3,1)] text-3xl tracking-[-0.3px]">
        STEP. 2
      </div>
      <div className="text-[44px] tracking-[-0.44px] text-center mt-5 max-md:max-w-full">
        AI 콘텐츠 방식의 변화 <span className="text-[35px]">– </span>
        <span className="font-medium text-[35px]">차별화된 DAILY 콘텐츠</span>
      </div>
      <div className="font-normal leading-9 mt-[34px] max-md:max-w-full">
        AI 기반 콘텐츠가 소셜미디어에서 대량으로 생산되는 가운데,
        <br />
        DAILY는 차별화를 위해 기획 단계부터 접근 방식을 전환했다.
      </div>
      <div className="text-[rgba(165,196,3,1)] text-[35px] tracking-[-0.35px] text-center mt-11 max-md:mt-10">
        프롬프트 최적화
      </div>
      <div className="font-normal leading-loose self-stretch mt-[19px] max-md:max-w-full">
        실사와 유사한 표현을 유도하는 고정 키워드를 활용해 원하는 결과물을
        정밀하게 도출했다.
      </div>
      <div className="text-[rgba(165,196,3,1)] text-[35px] tracking-[-0.35px] text-center mt-12 max-md:mt-10">
        레퍼런스 이미지 적용
      </div>
      <div className="font-normal leading-9 mt-[18px] max-md:max-w-full">
        AI가 특정 스타일을 적용할 수 있도록,
        <br />
        참고하는 이미지를 학습시킨 후 역으로 프롬프트를 추출하여 이미지를
        생성했다.
      </div>
    </div>
  );
};

export default ContentSection;
