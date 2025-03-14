import React from "react";

const Comp1 = () => {
  return (
    <div>
      {/* yaha main written things  start kiya hu  */}
      <div className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 mb-4">
            <a href="https://www.instagram.com/skhynix_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== ">
              {" "}
              <img src="insta.png" className="w-auto h-8" />
            </a>
            <a href="https://youtube.com/@skhynix?si=UX7tju6ku3nTOvRC">
              {" "}
              <img src="youtube.png" className="w-auto h-8" />
            </a>
          </div>

          {/* Disclaimer Text */}
          <p className="text-center md:text-xs lg:text-sm text-gray-600 mb-20">
            <span className="text-[#A5C403]">*</span>SK하이닉스 공식 인스타그램
            / 유튜브에서 DAILY를 확인할 수 있습니다.
            <br />
            (아이콘 클릭 시 해당 페이지로 이동합니다.)
          </p>

          {/* Main Content */}
          <div className="md:mb-14 md:mt-12">
            {/* English Subtitle */}
            <h2 className="text-center text-2xl font-bold text-[#9abb0f] mb-6">
              How To Make It
            </h2>

            {/* Korean Main Title */}
            <h1 className="text-center text-4xl font-bold text-gray-900 mb-10">
              단순한 이미지에서 몰입형 콘텐츠로
            </h1>

            {/* Korean Paragraphs */}
            <div className="space-y-1 text-xs mt-8">
              <p className="text-center">
                생성형 AI의 혁신은 DAILY 콘텐츠 제작 방식에도 변화를 가져왔다.
              </p>
              <p className="text-center">
                AI 자동화 덕분에 이미지, 영상 제작, 음원 추출 등 반복 작업
                시간이 크게 줄어, 스토리텔링에 집중하며 DAILY 콘텐츠의 표현
                범위를 확장해 나갈 수 있었다.
              </p>
              <p className="text-center">
                이번 에피소드에서는 DAILY 콘텐츠의 변화 과정 속의 기획 및 기술적
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

export default Comp1;
