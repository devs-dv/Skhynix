import React from "react";

const Step2 = () => {
  return (
    <div className="max-w-6xl flex mx-auto px-4 py-8 bg-white relative">
      <div className="columns-2">
        <div>
          <p className="text-[#A5C403]">STEP.2</p>
          <h2>AI 콘텐츠 방식의 변화 – 차별화된 DAILY 콘텐츠</h2>
          <p>
            AI 기반 콘텐츠가 소셜미디어에서 대량으로 생산되는 가운데,
            <br />
            <p>DAILY는 차별화를 위해 기획 단계부터 접근 방식을 전환했다.</p>
          </p>
          <p className="text-[#A5C403]">프롬프트 최적화</p>
          <p>
            실사와 유사한 표현을 유도하는 고정 키워드를 활용해 원하는 결과물을
            정밀하게 도출했다.
          </p>
          <p className="text-[#A5C403]">레퍼런스 이미지 적용</p>
          <p>
            AI가 특정 스타일을 적용할 수 있도록,
            <br />
            참고하는 이미지를 학습시킨 후 역으로 프롬프트를 추출하여 이미지를
            생성했다.
          </p>
        </div>
        <div><img src="step2.1.png" className=""/></div>
      </div>
    </div>
  );
};

export default Step2;
