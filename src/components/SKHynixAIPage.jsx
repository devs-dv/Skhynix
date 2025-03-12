// This is a simple Globe icon implementation for the example

import { Globe } from "lucide-react";

const CustomButton = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 border rounded-md text-sm font-medium transition hover:bg-gray-100 ${className}`}
    {...props}
  >
    {children}
  </button>
);



function SKHynixAIPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 text-center">
        <h1 className="text-2xl font-bold">AI 메모리 더 알아보기</h1>
      </header>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://openui.fly.dev/openui/600x400.svg"
                alt="SK hynix CXL Memory"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-yellow-300 opacity-30" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-foreground">
                SK하이닉스, DDR5 DRAM CXL Memory
              </h2>
              <p className="text-muted-foreground">
                개발… CXL 메모리 생태계 확장 나서
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded"
              >
                {" "}
                기사 보기 →{" "}
              </a>
            </div>
          </div>

          {/*  making the card 2 here DV */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://openui.fly.dev/openui/600x400.svg"
                alt="SK hynix CXL Memory"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-yellow-300 opacity-30" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-foreground">
                SK하이닉스, DDR5 DRAM CXL Memory
              </h2>
              <p className="text-muted-foreground">
                개발… CXL 메모리 생태계 확장 나서
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded"
              >
                {" "}
                기사 보기 →{" "}
              </a>
            </div>
          </div>
          {/* ending here   */}
          {/*  making the card 3 here  DV */}
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://openui.fly.dev/openui/600x400.svg"
                alt="SK hynix CXL Memory"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-yellow-300 opacity-30" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-foreground">
                SK하이닉스, DDR5 DRAM CXL Memory
              </h2>
              <p className="text-muted-foreground">
                개발… CXL 메모리 생태계 확장 나서
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded"
              >
                {" "}
                기사 보기 →{" "}
              </a>
            </div>
          </div>
          {/* ending here   */}
        </div>
      </section>

       <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 my-8">
        <div className="flex justify-between items-center rounded-full border border-gray-200 bg-white p-4">
          <span className="ml-4 font-medium">일상을 바꾸는 AI 이야기</span>
          <div variant="ghost" size="sm" className="rounded-full text-xs">
            AI & LIFE 시리즈 모아보기
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-sm mr-2">We Do Technology</span>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                COPYRIGHT © SK HYNIX INC. ALL RIGHTS RESERVED.
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>문의하기</span>
              <span>개인정보처리방침</span>
              <span>뉴스룸 운영정책</span>
              <span>뉴스룸 이용안내</span>
              <Globe />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default SKHynixAIPage;
