// This is a simple Globe icon implementation for the example

import { Globe } from "lucide-react";

const CustomButton = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 border rounded-md text-sm font-medium transition hover:bg-gray-100 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ imgSrc, title, description, link }) => (
  <div className="w-full md:w-1/3 rounded-2xl overflow-hidden  bg-[#F5F5F5]">
    <div className="relative overflow-hidden">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0" />
    </div>
    <div className="p-4">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <p className="text-base font-semibold text-foreground">{description}</p>
      <button
        href={link}
        className="inline-block font-bold mt-4 bg-secondary hover:bg-secondary/80 px-4 py-1 rounded-full border-2 border-black bg-white"
      >
        기사 보기 →
      </button>
    </div>
  </div>
);


function SKHynixAIPage() {
  const cardData = [
    {
      imgSrc: "Feature Card/Card1.png",
      title: "[Global No.1 AI Company]",
      description: "글로벌 시장 부동의 1위, SK하이닉스의 HBM",
      link: "#",
    },
    {
      imgSrc: "Feature Card/Card2.png",
      title: "SK하이닉스, DDR5 DRAM CXL Memory",
      description: "개발... CXL 메모리 생태계 확장 나서",
      link: "#",
    },
    {
      imgSrc: "Feature Card/Card3.png",
      title: "[FUTURE CITY] EP5. AiM – AI 성능을 극대화",
      description: "하는 최적의 솔루션",
      link: "#",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 text-center">
        <h1 className="text-2xl font-bold">AI 메모리 더 알아보기</h1>
      </header>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>

      {/*Bar Section*/}
      <section className="hidden md:block max-w-6xl mx-auto px-4 py-20 rounded-2xl bg-[#F5F5F5] my-8 ">
        <div className="flex justify-between items-center rounded-full border border-black bg-[#F5F5F5] p-4 mx-32">
          <span className="ml-4 font-bold">일상을 바꾸는 AI 이야기</span>
          <button className="rounded-full text-xs font-medium">
            AI & LIFE 시리즈 모아보기
          </button>
        </div>
      </section>

      <section className="block lg:hidden max-w-6xl mx-auto px-4 py-10 rounded-2xl bg-[#F5F5F5] text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-black mb-6">
          일상을 바꾸는 AI 이야기
        </h2>

        {/* Button */}
        <button className="flex items-center justify-between bg-black text-white font-medium rounded-full px-6 py-3 w-fit mx-auto">
          AI & LIFE 시리즈 모아보기
          <span className="ml-3 flex items-center justify-center w-8 h-8 bg-white text-black rounded-full">
            →
          </span>
        </button>
      </section>

      {/* Footer */}
      <img src="Footer.png" className=""></img>
      {/* <footer className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-sm mr-2">We Do Technology</span>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                COPYRIGHT © SK HYNIX INC. ALL RIGHTS RESERVED.
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>문의하기</span>
              <span>개인정보처리방침</span>
              <span>뉴스룸 운영정책</span>
              <span>뉴스룸 이용안내</span>
              <Globe />
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}

export default SKHynixAIPage;
