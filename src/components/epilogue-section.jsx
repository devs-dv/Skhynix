export default function EpilogueSection() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#f3f7d2] to-[#dcf7eb] p-8 md:p-12">
        {/* Decorative dot pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient
                id="dotGradient"
                cx="75%"
                cy="50%"
                r="50%"
                fx="75%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#fff", stopOpacity: "0.3" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#fff", stopOpacity: "0" }}
                />
              </radialGradient>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="1" fill="#a8c486" fillOpacity="0.3" />
              </pattern>
            </defs>
            <path
              d="M0 0 Q 50 0, 100 0 Q 100 50, 100 100 L 0 100 Z"
              fill="url(#dots)"
              opacity="0.5"
            />
            <path
              d="M50 0 Q 75 25, 100 50 Q 75 75, 50 100 L 0 100 L 0 0 Z"
              fill="url(#dotGradient)"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-[#8b9a3d] font-medium text-sm mb-3">
            Epilogue
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            AI와 함께하는 매일의 도전
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-gray-800 max-w-3xl">
            <p>
              이번 에피소드에서 AI를 활용해 DAILY 콘텐츠를 어떻게 발전시켜
              왔는지 살펴보았다.
            </p>
            <p>
              매일 하나씩 쌓아가는 DAILY는 빠르게 변화하는 디지털 시대 환경에서,
              모든 일상에서 혁신적 편리함을 이끌어내는 과정을 생생하게 보여준다.
            </p>
            <p>
              AI는 프롬프트 작업와, 영상 연결 기술, AI 음성을 통해 콘텐츠
              완성도를 높이며, 창작 과정 전반에서 중요한 역할을 수행했다.
            </p>
            <p>
              AI의 인간의 업력은 무한한 가능성을 열어가며 발전하고 있으며,
              SK하이닉스는 이를 위해 데이터 처리와 처리 효율을 높이는 AI 메모리
              솔루션을 제공하며 AI 기반 창작 환경을 지원하고 있다.
            </p>
            <p>
              앞으로도 SK하이닉스는 DAILY를 바탕한 기술과 창의성을 결합한
              혁신적인 콘텐츠 제작을 선도할 것이다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
