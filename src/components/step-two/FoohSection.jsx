import React from "react";

export const FoohSection = () => {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      <div className="w-[30%] max-md:w-full max-md:ml-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2289ea55566e56049d4aed19945ce4366ac74c5863cdcaae701096caee68ef0b?placeholderIfAbsent=true"
          alt="FOOH Advertisement"
          className="aspect-[486.40/608.00] object-contain w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15),0px_2px_8.3px_0px_rgba(0,0,0,0.25)] mt-[93px] max-md:max-w-full max-md:mt-10"
        />
      </div>
      <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-[26px]">
          <div className="text-[rgba(165,196,3,1)] text-[35px] font-bold tracking-[-0.35px] text-center self-center ml-4">
            *<span className="text-black">FOOH(가상 옥외광고) 제작</span>
          </div>
          <div className="flex w-[879px] max-w-full gap-5 text-[22px] text-black font-normal tracking-[-0.22px] leading-9 flex-wrap justify-between mt-[21px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d414a226d8c7241c12a19e61dcd09c6425a6bcef746884cf536fa07f3b26b2?placeholderIfAbsent=true"
              alt="FOOH Example"
              className="aspect-[1.7] object-contain w-[138px] shrink-0 max-w-full mt-1 rounded-[0px_0px_0px_0px]"
            />
            <div className="max-md:max-w-full">
              기존에는 고도의 합성 기술이 필요한 작업이었지만,
              <br />
              AI를 활용해 더 효율적이면서도 현실적인 비주얼을 구현했다.
            </div>
          </div>
          <div className="text-[rgba(122,121,121,1)] text-base font-normal leading-7 tracking-[-0.16px] max-md:max-w-full">
            <span className="text-[rgba(165,196,3,1)]">*</span>FOOH(Fake
            Out-Of-Home): OOH(Out of Home, 옥외광고) 앞에 'Fake(가짜)'를 붙여
            만든 합성어로,
            <br />
            디지털 기술(CGI)을 활용하여 만든 실제 존재하지 않는 가상의 옥외광고.
            주로 디지털 플랫폼과 소셜미디어에서 활용되며,
            <br />
            현실감 있는 연출로 몰입감을 높이고 비용 효율성과 바이럴 효과를
            극대화하는 마케팅 전략으로 주목받고 있다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoohSection;
