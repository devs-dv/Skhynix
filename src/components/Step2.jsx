import React from "react";

const Step2 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white font-sans relative">
      {/* Background dots pattern */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 opacity-20 pointer-events-none">
        <div className="grid grid-cols-12 gap-2">
          {Array(120)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-lime-400"></div>
            ))}
        </div>
      </div>

      {/* Step 2 Header */}
      <div className="mb-4">
        <h2 className="text-lime-500 font-bold text-xl">STEP. 2</h2>
      </div>

      {/* Main Title Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            AI 콘텐츠 방식의 변화{" "}
            <span className="font-normal">- 차별화된 DAILY 콘텐츠</span>
          </h1>

          <p className="text-gray-700 mb-8">
            AI 기반 콘텐츠가 소셜미디어에서 대량으로 생산되는 가운데,
            <br />
            DAILY는 차별화를 위해 기획 단계부터 접근 방식을 전환했다.
          </p>

          <div className="mb-8">
            <h3 className="text-lime-500 font-bold text-xl mb-3">
              프롬프트 최적화
            </h3>
            <p className="text-gray-700">
              실시간 유사한 표현을 유도하는 고정 키워드를 활용해 원하는 결과물을
              정밀하게 도출했다.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lime-500 font-bold text-xl mb-3">
              레퍼런스 이미지 적용
            </h3>
            <p className="text-gray-700">
              AI가 특정 스타일을 적용할 수 있도록,
              <br />
              결과물은 이미지를 학습시킨 후 역으로 프롬프트를 추출하여 이미지를
              생성했다.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-lime-500 text-white px-4 py-1 rounded-full font-bold">
              FOOH
            </span>
          </div>
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-white/80 text-gray-700 px-2 py-1 rounded text-sm">
              DAILY
            </span>
          </div>
          <img
            src="/placeholder.svg?height=500&width=400"
            alt="Black monolith display in autumn field"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="absolute bottom-2 right-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K5CX8ULEILZ80ik6wo9X2EXuXMJ5zq.png"
              alt="SK hynix logo"
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>

      {/* FOOH Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <span className="text-lime-500 mr-2">*</span>
          <h3 className="text-xl font-bold">FOOH(가상 육아광고) 제작</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-gray-200">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-white/80 text-gray-700 px-2 py-1 rounded text-sm">
                  DAILY
                </span>
              </div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Child looking at a drawing"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-lime-500 text-white px-3 py-1 rounded-full text-sm">
                  카툰 형식
                </span>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-gray-200">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="AI generated image"
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 right-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K5CX8ULEILZ80ik6wo9X2EXuXMJ5zq.png"
                  alt="SK hynix logo"
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-700 mb-4">
              기존에는 고도화 없이 기술이 필요한 작업이었지만,
              <br />
              AI를 활용해 더 효율적이면서도 현실적인 비주얼을 구현했다.
            </p>

            <p className="text-gray-600 text-sm mb-8">
              *FOOH(take Out-Of-Home): OOH(Out of Home, 옥외광고)와 Fake(가짜)를
              합친 합성 용어이다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
