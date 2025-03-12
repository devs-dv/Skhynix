"use client";

import { useState } from "react";

const AIMusicGenerator = () => {
  const [customMode, setCustomMode] = useState(true);
  const [lyricsMode, setLyricsMode] = useState(false);

  const musicTags = [
    { id: 1, name: "City Pop" },
    { id: 2, name: "BGM" },
    { id: 3, name: "futuristic" },
    { id: 4, name: "Musical style" },
    { id: 5, name: "Piano" },
    { id: 6, name: "Violin" },
    { id: 7, name: "rhythmic" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 top-0 w-full h-full bg-[url('https')] bg-no-repeat bg-contain"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Left side content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="text-lime-500 font-medium mb-2">STEP. 4</div>
          <h2 className="text-3xl font-bold mb-6">AI 음원 결합</h2>

          <p className="text-gray-700 mb-8">
            콘텐츠의 목적감을 높이기 위해 AI 오디오 음원을 결합한다.
            <br />
            프롬프트와 DAILY를 표현하는 문장과 키워드를 입력하는 것이 중요하다.
          </p>

          <h3 className="text-lime-500 font-medium text-xl mb-4">
            맞춤형 AI 음원 제작
          </h3>
          <p className="text-gray-700 mb-8">
            DAILY 콘텐츠의 분위기에 맞춰 음악 장르, 가사의 유무, 보컬 스타일을
            설정해 AI 음원을 생성한다.
          </p>

          <h3 className="text-lime-500 font-medium text-xl mb-4">
            사운드 디자인 최적화
          </h3>
          <p className="text-gray-700 mb-8">
            AI가 생성한 오디오 음원을 영상의 분위기에 맞춰 조정하고,
            <br />
            음악 길이를 편집에 맞춰도록 높인다
          </p>
        </div>

        {/* Right side UI */}
        <div className="lg:w-1/2">
          <div className="bg-black rounded-3xl p-6 max-w-md mx-auto">
            {/* Toggle switches */}
            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">맞춤 모드</span>
                <button
                  className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${
                    customMode
                      ? "bg-lime-400 justify-end"
                      : "bg-gray-600 justify-start"
                  }`}
                  onClick={() => setCustomMode(!customMode)}
                >
                  <span className="w-5 h-5 bg-white rounded-full block mx-0.5"></span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-white text-sm">가사</span>
                <button
                  className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${
                    lyricsMode
                      ? "bg-lime-400 justify-end"
                      : "bg-gray-600 justify-start"
                  }`}
                  onClick={() => setLyricsMode(!lyricsMode)}
                >
                  <span className="w-5 h-5 bg-white rounded-full block mx-0.5"></span>
                </button>
              </div>
            </div>

            {/* Music prompt section */}
            <div className="bg-gray-800 rounded-xl p-4 mb-6">
              <div className="text-gray-400 mb-4">Music Prompt</div>

              <div className="flex flex-wrap gap-2">
                {musicTags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-block px-3 py-1 rounded-full border border-lime-400 text-lime-400 text-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Generate button */}
            <button className="w-full py-4 bg-lime-400 rounded-full text-center font-medium">
              생성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMusicGenerator;
