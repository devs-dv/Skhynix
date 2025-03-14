import React from "react";

const Step2 = () => {
  return (
    <div className="md:mt-40">
      <img
        src="Vectors/dot1.png"
        className="absolute w-72 h-auto -right-0 mt-56"
      />
      <div className="relative top-[72rem]">
        <img
          src="Vectors/dot2.png"
          className="w-64"
        />
        <img
          src="Vectors/dot3.png"
          className="w-44 mt-3"
        />
      </div>
      <div className="max-w-6xl flex mx-auto  px-4 py-8  relative">
        <div className="columns-2">
          <div>
            <p className="text-[#A5C403] text-xl font-bold mb-4">STEP.2</p>
            <h2 className="font-bold text-2xl mb-10">
              AI 콘텐츠 방식의 변화 – 차별화된 DAILY 콘텐츠
            </h2>
            <p>
              AI 기반 콘텐츠가 소셜미디어에서 대량으로 생산되는 가운데,
              <br />
              <p className="">
                DAILY는 차별화를 위해 기획 단계부터 접근 방식을 전환했다.
              </p>
            </p>
            <p className="text-[#A5C403] mt-8 text-xl font-bold">
              프롬프트 최적화
            </p>
            <p className="mt-4">
              실사와 유사한 표현을 유도하는 고정 키워드를 활용해 원하는 결과물을
              정밀하게 도출했다.
            </p>
            <p className="text-[#A5C403] mt-8 text-xl font-bold">
              레퍼런스 이미지 적용
            </p>
            <p className="mt-4">
              AI가 특정 스타일을 적용할 수 있도록,
              <br />
              참고하는 이미지를 학습시킨 후 역으로 프롬프트를 추출하여 이미지를
              생성했다.
            </p>
          </div>
          <img src="step2.2.png" className="w-96 mt-16" />
          <div className="space-y-3">
            <img src="step2.1.png" className=" w-96 h-auto" />
            <h2 className="font-bold text-2xl">
              <span className="text-[#A5C403]">*</span>FOOH(가상 옥외광고) 제작
            </h2>
            <p>
              기존에는 고도의 합성 기술이 필요한 작업이었지만,
              <br />
              AI를 활용해 더 효율적이면서도 현실적인 비주얼을 구현했다.
            </p>
            <p className="text-xs">
              *FOOH(Fake Out-Of-Home): OOH(Out of Home, 옥외광고) 앞에
              ‘Fake(가짜)’를 붙여 만든 합성어로, <br />
              디지털 기술(CGI)을 활용하여 만든 실제 존재하지 않는 가상의
              옥외광고. 주로 디지털 플랫폼과 소셜미디어에서 활용되며,
              <br />
              현실감 있는 연출로 몰입감을 높이고 비용 효율성과 바이럴 효과를
              극대화하는 마케팅 전략으로 주목받고 있다.
            </p>
          </div>
          <div className="mt-20 space-y-4 -ml-32">
            <h2 className="text-2xl font-bold">
              AI 기반 카툰 & 피드 연결 콘텐츠
            </h2>
            <p className="text-sm">
              스토리 전달력을 강화하기 위해 한 컷으로 구성된 AI 카툰을 제작하고,
              <br />
              SNS 피드에서 자연스럽게 연결되는 콘텐츠를 구현했다.
            </p>
            <img src="step2.3.png" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
