import React, { useRef, useEffect } from "react";

const Hero = () => {

const containerRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Play all videos inside the container when visible
        containerRef.current.querySelectorAll("video").forEach((video) => {
          video.play();
        });
      } else {
        // Pause all videos when out of view
        containerRef.current.querySelectorAll("video").forEach((video) => {
          video.pause();
        });
      }
    },
    { threshold: 0.5 }
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    if (containerRef.current) {
      observer.unobserve(containerRef.current);
    }
  };
}, []);

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
      <div ref={containerRef} className="flex justify-end">
        <div className="grid grid-cols-4 gap-2 ml-[25%]">
          <div className="lg:mt-32 mt-8">
            <video
              src="/hero/c1r1.mp4"
              className="w-80 h-auto rounded-[16px]"
              muted
              autoPlay
              loop
              playsInline
            />
            <img src="/hero/c1r2.png" className="w-80 h-auto rounded-[16px]" />
          </div>
          <div>
            <video
              src="/hero/c2r1.mp4"
              className="w-80 h-auto rounded-[16px] max-md:rounded-lg"
              muted
              autoPlay
              loop
              playsInline
            />
            <video
              src="/hero/c2r2.mp4"
              className="w-80 h-auto rounded-[16px] max-md:rounded-lg"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
          <div className="lg:mt-36 mt-5">
            <video
              src="/hero/c3r1.mp4"
              className="w-80 h-auto rounded-[16px] max-md:rounded-lg"
              muted
              autoPlay
              loop
              playsInline
            />
            <video
              src="/hero/c3r2.mp4"
              className="w-80 h-auto rounded-[16px] max-md:rounded-lg"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
          <div className="lg:-mt-5">
            <video
              src="/hero/c4r1.mp4"
              className="w-80 h-auto rounded-[16px] max-md:rounded-lg "
              muted
              autoPlay
              loop
              playsInline
            />
            <video
              src="/hero/c4r2.mp4"
              className="w-80 h-auto rounded-[16px] max-md:rounded-lg"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
