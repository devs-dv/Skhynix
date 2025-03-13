import React from "react";


const Steps = () => {
  return (
    <div>
      <main className="min-h-screen bg-white">
        
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-12">
            AI 메모리 더 알아보기
          </h1>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-[#0a0a2e] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Company"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium mb-2">[Global No.1 AI Company]</h3>
                <p className="text-gray-700 text-sm mb-4">
                  글로벌 AI의 부동의 1위, SK하이닉스의 HBM
                </p>
                <button className="flex items-center text-sm border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-200 transition">
                  기사 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-white relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="DDR5 DRAM CXL Memory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium mb-2">
                  SK하이닉스, DDR5 DRAM CXL Memory
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  개발... CXL 메모리 성능계 혁명 나서
                </p>
                <button className="flex items-center text-sm border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-200 transition">
                  기사 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-[#0a0a2e] relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Future City AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium mb-2">
                  [FUTURE CITY] EP5. AIM - AI 성능을 극대화하는 차세대 솔루션
                </h3>
                <p className="text-gray-700 text-sm mb-4"></p>
                <button className="flex items-center text-sm border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-200 transition">
                  기사 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gray-100 rounded-full p-4 flex justify-between items-center mb-16">
            <div className="ml-4 text-lg font-medium">
              일상을 바꾸는 AI 이야기
            </div>
            <div className="text-sm font-medium">AI & LIFE 시리즈 모아보기</div>
          </div>
        </div>


      </main>
    </div>
  );
};

export default Steps;
