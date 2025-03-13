import React from "react";
import Hero from "./Hero";
import { Instagram, Youtube } from "lucide-react";
const ImageShow = () => {
  return (
    <div>
      <Hero />
      {/* ye wale mei maine mission dala h yaha se  */}
      <section className="w-full flex flex-col items-center text-center">
        <div className="w-[180px] max-w-full text-3xl text-[rgba(165,196,3,1)] font-bold whitespace-nowrap text-center tracking-[-0.3px] leading-none mt-[162px] px-9 py-[15px] rounded-[100px] border-[rgba(165,196,3,1)] border-solid border-[3px] max-md:mt-10 max-md:px-5">
          Mission
        </div>
        <h2 className="text-white text-6xl font-bold leading-none tracking-[-0.6px] text-center mt-[18px] max-md:max-w-full max-md:text-[40px]">
          AI로 DAILY 콘텐츠 제작하기
        </h2>
        <p className="text-white text-[22px] font-normal leading-6 tracking-[-0.22px] text-center mt-[37px] max-md:max-w-full">
          AI 기술 발전과 함께 콘텐츠 제작 방식도 진화하고 있다.
          <br />
          SK하이닉스 또한 생성형 AI로 DAILY 콘텐츠를 제작하며 창작 방식을 확장해
          나가고 있다.
          <br />
          초기에는 단순한 이미지 제작에 그쳤으나 현재는 새로운 방식을 적용하여
          더욱 완성도 높은 DAILY 콘텐츠를 제작하고 있다.
        </p>
      </section>
      {/* yaha tak */}

      {/* yaha se wo images add kiye h maine dekh le  */}
      {/* Steps Section */}
      <section className="self-stretch z-10 mr-[59px] mt-[199px] -mb-4 max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Step content implementation */}
          <div className="w-[41%] max-md:w-full max-md:ml-0">
            <div className="w-full max-md:max-w-full max-md:mt-[34px]">
              <div className="max-md:max-w-full grid grid-cols-2 gap-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/2db98f8053e58044fbc148753c0d23b1a2bdf950b246a10623189d92f425b54e?placeholderIfAbsent=true"
                  className="aspect-[0.8] object-contain w-full mt-[189px] rounded-[20px] max-md:mt-10"
                  alt="Step visualization 1"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/ed30c71a077921b34a9d0d82274b63a7dea2bf1d8d83d9a2004a9cf833f3e2c4?placeholderIfAbsent=true"
                  className="aspect-[0.55] object-contain w-full grow rounded-[20px] max-md:mt-10"
                  alt="Step visualization 2"
                />
              </div>
              <div className="mt-3.5 max-md:max-w-full grid grid-cols-2 gap-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/05ef08a8f620b3a88d06faae0dc92a5343ad1a9c5b3af6f1cc47b058ec09c310?placeholderIfAbsent=true"
                  className="aspect-[4/5] object-contain w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_2px_8.3px_0px_rgba(0,0,0,0.25)] grow max-md:mt-10"
                  alt="Step content 1"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/89ef0a02955521eb191e0d9683237d2c19f9ba0886835d90cef2b8d611b6c167?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-full mt-[18px] rounded-[20px] max-md:mt-10"
                  alt="Step content 2"
                />
              </div>
            </div>
          </div>
          <div className="w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="grow mt-[124px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/76dafa893ceeb58d3224ea8d5b4b66182593fd68ec6b3b146b0ed4406ea25519?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full rounded-[20px]"
                alt="Step visualization 3"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/335a2250b174995bf4639a7a9c5af0b227d036b98bc6c0eece938f643b3baf28?placeholderIfAbsent=true"
                className="aspect-[0.56] object-contain w-full mt-8 rounded-[20px]"
                alt="Step visualization 4"
              />
            </div>
          </div>
          <div className="w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-[246px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/c55047680be2a3749c757dbddb3c593d1e6e3c8ac008c6908e4f45e230f0afa1?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full rounded-[20px]"
                alt="Step visualization 5"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/5c1dc5564bfb0749cf5daecea412adbae85b27cc03b33144b574d166a9542669?placeholderIfAbsent=true"
                className="aspect-[0.8] object-contain w-full mt-8 rounded-[20px]"
                alt="Step visualization 6"
              />
            </div>
          </div>
          <div className="w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-[58px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/13166226c937544b502a8b538523282e14516aab185f5e26e2961645296a1f9d?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full rounded-[20px]"
                alt="Step visualization 7"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b624aebf840145948b8dfe1fdfb17748/09e834bf0bec215c2aa968c6b69a0eaeeb56a95b7a2c092329ef2c5dd1e15299?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full mt-8 rounded-[20px]"
                alt="Step visualization 8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* yaha main written things  start kiya hu  */}
      <div className="min-h-screen bg-gradient-to-br from-[#f8f9f0] to-[#f5f7e8] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 mb-4">
            <a href="#" className="text-[#E1306C]">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#FF0000]">
              <Youtube size={24} />
            </a>
          </div>

          {/* Disclaimer Text */}
          <p className="text-center text-sm text-gray-600 mb-20">
            *SK8R이너스 공식 인스타그램 / 유튜브에서 DAILY를 확인할 수
            있습니다.*
            <br />
            (이미지 클릭 시 해당 페이지로 이동합니다.)
          </p>

          {/* Main Content */}
          <div className="space-y-10">
            {/* English Subtitle */}
            <h2 className="text-center text-2xl font-medium text-[#9abb0f]">
              How To Make It
            </h2>

            {/* Korean Main Title */}
            <h1 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
              단순한 이미지에서 몰입형 콘텐츠로
            </h1>

            {/* Korean Paragraphs */}
            <div className="space-y-4 text-gray-700 mt-8">
              <p className="text-center">
                일상적 AI의 혁신은 DAILY 콘텐츠 제작 방식에도 변화를 가져왔다.
              </p>
              <p className="text-center">
                AI 기술을 더 넓에 이미지, 영상 제작, 음원 추출 등 많은 작업
                시간이 크게 줄어, 스토리텔링에 집중하며 DAILY 콘텐츠의 효과
                방법을 확장해 나갈 수 있었다.
              </p>
              <p className="text-center">
                이런 에피소드에서는 DAILY 콘텐츠의 편집 과정 속의 기획 및 기술적
                접근 방식을 소개한다.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* yaha per khatam  */}
    </div>
  );
};

export default ImageShow;
