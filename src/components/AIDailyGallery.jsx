import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const AIDailyGallery = () => {
  const images = [
    {
      id: 1,
      url: "/path/to/image1.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 2,
      url: "/path/to/image2.jpg",
      className: "col-span-2 row-span-3 rounded-lg",
    },
    {
      id: 3,
      url: "/path/to/image3.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 4,
      url: "/path/to/image4.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 5,
      url: "/path/to/image5.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 6,
      url: "/path/to/image6.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 7,
      url: "/path/to/image7.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 8,
      url: "/path/to/image8.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
    {
      id: 9,
      url: "/path/to/image9.jpg",
      className: "col-span-2 row-span-3 rounded-lg",
    },
    {
      id: 10,
      url: "/path/to/image10.jpg",
      className: "col-span-1 row-span-2 rounded-lg",
    },
  ];

  return (
    <div className="bg-black">
      
     

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-16">
        {/* Mission badge */}
        <div className="flex justify-center mb-6">
          <div className="border border-[#b3ff00] text-[#b3ff00] px-6 py-1 rounded-full text-sm">
            Mission
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-white text-4xl font-bold text-center mb-6">
          AI로 DAILY 콘텐츠 제작하기
        </h1>

        {/* Subtext */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gray-300 mb-2">
            AI 기술 및 신규 형태 콘텐츠 제작 방식은 진화하고 있다.
          </p>
          <p className="text-gray-300 mb-2">
            SK하이닉스 또한 일상의 AI로 DAILY 콘텐츠를 제작하여 창의성과
            효율성을 극대화 하고자 한다.
          </p>
          <p className="text-gray-300">
            초거대는 단순히 이미지 제작에 그치지 않 일하는 새로운 방식을
            지원하여 더욱 완성도 높은 DAILY 콘텐츠를 제작하고 있다.
          </p>
        </div>

        {/* Image gallery - masonry layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {images.map((image) => (
            <div key={image.id} className={image.className}>
              <img
                src={image.url || "/placeholder.svg"}
                alt={`Gallery image ${image.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Social media and footer */}
        <div className="flex flex-col items-center pt-8 border-t border-gray-700">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-white hover:text-[#b3ff00]">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-[#b3ff00]">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-400 text-center text-sm">
            *SK하이닉스 공식 인스타그램과 / 유튜브에서 DAILY를 확인할 수
            있습니다.
            <br />
            (아이콘 클릭 시 해당 페이지로 이동합니다.)
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 right-0 w-3/4 h-[2px] bg-gradient-to-r from-transparent to-[#b3ff00]"></div>
    </div>
  );
};

export default AIDailyGallery;
