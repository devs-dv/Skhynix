const ResponsiveImageGallery = () => {
  return (
    <div className="relative min-h-screen bg-zinc-900 p-4 md:p-6 overflow-hidden">
      {/* Background dots pattern */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <div className="w-full h-full bg-[radial-gradient(circle,_#666_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
      </div> */}
      {/* Hero Section */}
      {/* <section className="container mx-auto pt-12 pb-8 px-4">
        <div className="max-w-4xl">
          <div className="inline-block bg-[#a7da00] text-black text-xs px-3 py-1 rounded-full mb-4">
            AI 이미지 생성 서비스
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            가장 생생한
            <br />
            AI 제작기
          </h1>
          <div/> */}
      <div className="relative bg-black min-h-screen">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 z-10">
              <div className="inline-flex items-center bg-[#a7da00] rounded-full px-4 py-1 mb-6">
                <span className="text-black font-bold">EP. 7</span>
              </div>

              <div className="mb-6">
                <div className="text-[#a7da00] text-sm mb-2">
                  AI로 매일 콘텐츠를 제작한다면
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  가장 생생한
                  <br />
                  AI 체험기
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  모든 일상에 AI가 스며드는 시대 -<br />
                  SK하이닉스 뉴스룸이{" "}
                  <span className="text-[#a7da00]">
                    생성형 AI를 직접 사용하고
                  </span>
                  <br />
                  <span className="text-[#a7da00]">
                    AI의 가능성과 변화할 미래 모습
                  </span>
                  을 탐구합니다
                </p>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="lg:w-1/2 grid grid-cols-6 gap-3 z-10">
              {/* Top row */}
              <div className="col-span-2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="AI Generated 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="AI Generated 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="AI Generated 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Middle row */}
              <div className="col-span-3">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="AI Generated 4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="AI Generated 5"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Bottom row */}
              <div className="col-span-2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="AI Generated 6"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="AI Generated 7"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt="AI Generated 8"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal line */}
      <div className="absolute bottom-0 right-0 w-[2px] h-[300px] bg-blue-500 rotate-[30deg] translate-x-[100px] translate-y-[50px] hidden md:block"></div>

      {/* Image gallery - masonry style layout */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {/* First column */}
          <div className="space-y-3 md:space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Colorful robot toy with bubbles"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x350"
                alt="Glass sphere with miniature scene"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="space-y-3 md:space-y-4">
            <div className="relative aspect-[3/5] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/350x600"
                alt="Person underwater with digital effect"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x350"
                alt="Aerial view of circuit board"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
          </div>

          {/* Third column - only visible on md+ screens */}
          <div className="hidden md:flex flex-col space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/250x250"
                alt="Circuit board with processor"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
            <div className="relative flex-1 rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x600"
                alt="Urban cityscape with tall buildings"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
          </div>

          {/* Fourth column - only visible on lg+ screens */}
          <div className="hidden lg:flex flex-col space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x350"
                alt="Traditional Asian building with cherry blossoms"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x350"
                alt="Cute robot character"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
          </div>

          {/* Fifth column - only visible on lg+ screens */}
          <div className="hidden lg:flex flex-col space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x350"
                alt="Person with digital interface"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://via.placeholder.com/300x350"
                alt="Digital wave on laptop"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                  SK hynix
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only additional images (3rd column equivalent) */}
        <div className="grid grid-cols-2 gap-3 mt-3 md:hidden">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Circuit board with processor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                SK hynix
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden">
            <img
              src="https://via.placeholder.com/300x600"
              alt="Urban cityscape with tall buildings"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <div className="bg-black/30 px-2 py-1 rounded text-xs text-white font-medium">
                SK hynix
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageGallery;
