import React from "react";

const Hero = () => {
  return (
    <section className="max-md:h-60">
      {/* Left Content */}

      <div className="flex flex-col items-center justify-center absolute lg:w-[50%] max-md:p-2 backdrop-blur-md lg:h-full h-60">
        <div className="space-y-6 lg:text-xl max-md:text-[8px]">
          <p className=" font-bold rounded-full flex items-center max-md:gap-2 gap-5">
            <span className="bg-[#A5C403] px-6 py-2 max-md:px-3 max-md:py-1 rounded-full text-white">
              EP.7
            </span>
            <span className="text-[#A5C403]">
              AI로 매일 콘텐츠를 제작한다면
            </span>
          </p>
          <h1 className="lg:text-8xl text-lg font-black text-white leading-tight">
            가장 생생한 <br /> AI 체험기
          </h1>
          <p className="lg:text-lg text-white">
            모든 일상에 AI가 스며드는 시대 -<br /> SK하이닉스 뉴스룸이{" "}
            <span className="text-[#A5C403]">생성형 AI를 직접 사용하고</span>{" "}
            <br />
            <span className="text-[#A5C403]">
              AI의 가능성과 변화할 미래 모습
            </span>
            을 탐구합니다
          </p>
        </div>
      </div>

      {/* Right Content - Image Gallery */}
      <div className="flex justify-end">
        <div className="grid grid-cols-4 gap-2 ml-[25%]">
          <div className="lg:mt-32 mt-8">
            <img src="sample.png" className="w-80 h-auto" />
            <img src="sample.png" className="w-80 h-auto" />
          </div>
          <div>
            <img src="sample.png" className="w-80 h-auto" />
            <img src="sample.png" className="w-80 h-auto" />
          </div>
          <div className="lg:mt-36 mt-5">
            <img src="sample.png" className="w-80 h-auto" />
            <img src="sample.png" className="w-80 h-auto" />
          </div>
          <div className="lg:-mt-5">
            <img src="sample.png" className="w-80 h-auto" />
            <img src="sample.png" className="w-80 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
