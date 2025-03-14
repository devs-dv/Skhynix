export default function AIContentSection() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12">
        {/* Decorative Background Pattern */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('')" }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-[#A5C403] font-bold text-lg mb-3">
            STEP. 3
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            AI 영상 콘텐츠의 확장
          </h2>

          <p className="text-sm leading-relaxed text-gray-800 max-w-3xl mb-6">
            기존 DAILY 영상은 단순 무비 처리 방식이었으나, 완성도 높은 영상
            제작을 위해 AI 기술을 적극 활용했다.
          </p>

          <h3 className="text-2xl font-bold text-[#A5C403] mb-4">
            AI 릴스 제작
          </h3>

          <p className="text-sm leading-relaxed text-gray-800 max-w-3xl mb-8">
            AI가 앞뒤 영상의 흐름을 분석하여 자연스럽게 연결한 긴 영상으로
            확장해 전달력을 강화했다.
          </p>

          {/* Image Cards */}
          <div className="flex flex-col-1 items-center md:flex-row gap-0 relative">
            {/* Left Image (Overlap Right) */}
            <div className="rounded-2xl overflow-hidden relative md:-mr-20 z-0">
              <img
                src="Step3/img1.png"
                alt="Image 1"
                className="w-full object-cover"
              />
            </div>

            {/* Middle Image (Overlap Both Sides) */}
            <div className="rounded-2xl overflow-hidden relative z-10">
              <img
                src="Step3/img3.png"
                alt="Image 2"
                className="w-full object-cover"
              />
            </div>

            {/* Right Image (Overlap Left) */}
            <div className="rounded-2xl overflow-hidden relative md:-ml-20 z-0">
              <img
                src="Step3/img2.png"
                alt="Image 3"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
