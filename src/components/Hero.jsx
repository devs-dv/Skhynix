import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-black text-white py-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block bg-green-600 text-black text-sm font-bold px-4 py-1 rounded-full">
            EP.7
          </span>
          <h1 className="text-5xl font-bold leading-tight">
            가장 생생한 <br /> AI 체험기
          </h1>
          <p className="text-lg text-gray-300">
            모든 일상에 AI가 스며드는 시대 - SK하이닉스 뉴스룸이 생성형 AI를
            직접 사용하고 AI의 가능성과 변화할 미래 모습을 탐구합니다
          </p>
        </div>

        {/* Right Content - Image Gallery */}
        <div className="grid grid-cols-4 gap-4">
          <img src="sample.png"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
