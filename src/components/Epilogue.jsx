export default function EpilogueSection() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden  p-8 md:p-12">
        <div
          className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('bg.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-[#708600] font-bold text-sm mb-8">Epilogue</div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            AI와 함께하는 매일의 도전
          </h2>

          <div className=" text-sm leading-relaxed text-gray-800 max-w-3xl">
            <p>
              이번 에피소드에서 AI를 활용해 DAILY 콘텐츠를 어떻게 발전시켜
              왔는지 살펴보았다.
            </p>
            <p>
              매일 하나씩 쌓여가는 DAILY는 빠르게 변화하는 디지털 시대
              한복판에서, 또는 일상에서 혁신적 변화를 이끌어내는 과정을 생생하게
              보여준다.
            </p>
            <div className="my-4"/>
            <p>
              AI는 프롬프트 최적화, 영상 연결 기술, AI 음원을 통해 콘텐츠
              완성도를 높이며, 창작 과정 전반에서 중요한 역할을 수행했다.
            </p>
            <p>AI와 인간의 협력은 무한한 가능성을 열어가며 발전하고 있으며,</p>
            <p>
              SK하이닉스는 이를 위해 데이터 저장과 처리 효율을 높이는 AI 메모리
              솔루션을 제공하며 AI 기반 창작 환경을 지원하고 있다.
            </p>
            <p>
              앞으로도 SK하이닉스는 DAILY를 비롯한 기술과 창의성을 결합한
              혁신적인 콘텐츠 제작을 선도할 것이다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
