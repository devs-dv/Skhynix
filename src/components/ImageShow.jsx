import React, { useRef, useEffect } from "react";
import Hero from "./Hero";

const ImageShow = () => {
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
    <div className="">
      <div className="bg-[linear-gradient(to_bottom,#000000,#000000,#4D4D4D,#C5C5C5,#FFFFFF)] max-md:p-1">
        <Hero />
        {/* ye wale mei maine mission dala h yaha se  */}
        <section className="w-full flex flex-col items-center text-center lg:pt-28 max-md:mt-5 max-md:mb-12 ">
          <div className=" max-w-full text-xl max-md:text-base text-[#A5C403] border-2 border-[#A5C403] px-8 py-2 max-md:py-1 max-md:px-6 rounded-full">
            Mission
          </div>
          <h2 className="text-white text-5xl max-md:text-xl font-bold leading-none text-center mt-5 max-md:max-w-full max-md:text-[40px]">
            AI로 DAILY 콘텐츠 제작하기
          </h2>
          <p className="text-white text-sm max-md:text-xs mt-10">
            AI 기술 발전과 함께 콘텐츠 제작 방식도 진화하고 있다.
            <br />
            SK하이닉스 또한 생성형 AI로 DAILY 콘텐츠를 제작하며 창작 방식을
            확장해 나가고 있다.
            <br />
            초기에는 단순한 이미지 제작에 그쳤으나 현재는 새로운 방식을 적용하여
            더욱 완성도 높은 DAILY 콘텐츠를 제작하고 있다.
          </p>
        </section>
        {/* yaha tak */}

        {/* yaha se wo images add kiye h maine dekh le  */}
        {/* for larger screens */}
        <section
          ref={containerRef}
          className="md:p-20 flex items mt-48 max-lg:hidden"
        >
          <div className="grid grid-cols-5">
            <div>
              <video
                // ref={videoRef}
                src="/ImageGallery/c1r1.mp4"
                className="p-4 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                // ref={videoRef}
                src="/ImageGallery/c1r2.mp4"
                className="rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />{" "}
            </div>
            <div className="-mt-32">
              <video
                // ref={videoRef}
                src="/ImageGallery/c2r1.mp4"
                className="p-2 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />{" "}
              <video
                // ref={videoRef}
                src="/ImageGallery/c2r2.mp4"
                className="p-2 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />{" "}
            </div>
            <div className="-mt-8">
              <video
                src="/ImageGallery/c3r1.mp4"
                className="p-4 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                src="/ImageGallery/c3r2.mp4"
                className="p-4 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />{" "}
            </div>
            <div className="mt-10">
              <video
                src="/ImageGallery/c4r1.mp4"
                className="p-4 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                src="/ImageGallery/c4r2.mp4"
                className="p-4 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />{" "}
            </div>
            <div className="-mt-20">
              <img src="ImageGallery/c5r1.png" className="p-4" />
              <video
                // ref={videoRef}
                src="/ImageGallery/c5r2.mp4"
                className="p-4 rounded-[32px]"
                muted
                playsInline
                autoPlay
                loop
              />{" "}
            </div>
          </div>
        </section>
        {/*for mobile screens*/}
        <section ref={containerRef} className="md:p-20 flex items lg:hidden">
          <div className=" columns-2">
            {/*Column 1 */}
            <video
              // ref={videoRef}
              src="/ImageGallery/c1r1.mp4"
              className="p-2 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              // ref={videoRef}
              src="/ImageGallery/c1r2.mp4"
              className="rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              src="/ImageGallery/c3r1.mp4"
              className="p-2 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              src="/ImageGallery/c3r2.mp4"
              className="p-2 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              // ref={videoRef}
              src="/ImageGallery/c5r2.mp4"
              className="p-2 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            {/*Column 2 */}
            <video
              // ref={videoRef}
              src="/ImageGallery/c2r1.mp4"
              className="p-2 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              src="/ImageGallery/c4r2.mp4"
              className="p-2 rounded-[32px] max-md:mb-20"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              src="/ImageGallery/c4r1.mp4"
              className="p-2 -mt-20 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <video
              // ref={videoRef}
              src="/ImageGallery/c2r2.mp4"
              className="p-2 rounded-[32px]"
              muted
              playsInline
              autoPlay
              loop
            />{" "}
            <img src="ImageGallery/c5r1.png" className="p-2" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageShow;
