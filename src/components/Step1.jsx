export default function Step1() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12  font-sans">
      {/* Step Header */}

      {/* Content Section */}
      <div className="flex max-lg:flex-col lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}

        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-[#A5C403] font-bold text-lg">STEP. 1</h3>
            <h2 className="text-2xl font-bold mt-2">기존 AI 콘텐츠 분석</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            초기 DAILY 콘텐츠는 AI가 생성한 정적 이미지와 3초의 짧은 영상으로
            구성되었다. SK하이닉스의 반도체 기술과 브랜드 아이덴티티를
            시각적으로 표현했지만, 더 깊이 있는 메시지를 전달하는 데는 한계가
            있었다.
          </p>
          <p className="text-gray-700 mt-6 leading-relaxed">
            따라서 우리는 100여 개가 넘는 AI 콘텐츠 제작 노하우를 바탕으로
            새로운 표현 방식을 연구했다.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-1 items-center gap-6">
          <div className="relative rounded-xl overflow-hidden ">
            <img
              src="Step1/img1.png"
              alt="AI chip glowing"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden ">
            <img
              src="Step1/img2.png"
              alt="AI chip night view"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
