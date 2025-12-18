import svgPaths from "./svg-uv5358e2a6";
import imgFrame7 from "figma:asset/a848e002d71b2121817a1fa23f30aa6d6687b432.png";
import imgFrame8 from "figma:asset/b7b1843a4cf88949062b4a38fc5c592dec88d2ec.png";
import imgFrame9 from "figma:asset/7ecfbe3a48cbb97f4ca5344410fb452e49ec2c51.png";
import imgFrame10 from "figma:asset/e7878fbe2f5f686846186fee0d6ff01b041d2ad9.png";
import imgFrame11 from "figma:asset/b5dd09a905220eccb959705d9e50a578633c801a.png";
import imgImage1 from "figma:asset/3124a7498036c7508dbca32417d95ca29ba3fd33.png";
import imgMain from "figma:asset/41ced8f1f819bc3490e11b36673151f13732feba.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[320px] relative shrink-0 w-[420px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
}
type WrapperProps = {
  text: string;
};

function Wrapper({ children, text }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-0 relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[50px] py-0 relative w-full">
                <p className="basis-0 font-['Inter:Light',sans-serif] font-light grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black text-center">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ce0000] text-[24px] text-center w-full">{text}</p>
      <Wrapper text="our favorite articles about design, front-end development, technology" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ce0000] text-[24px] text-center w-full">{text}</p>
      <Wrapper text="our favorite articles about design, front-end development, technology, and start" />
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#ce0000] text-[40px] w-full">{text}</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[16px] text-black w-full">{text1}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-1.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
          <g id="Group">
            <path d={svgPaths.p5444600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p247da900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LucideLabBagHand() {
  return (
    <div className="overflow-clip relative shrink-0 size-[80px]" data-name="lucide-lab:bag-hand">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#ce0000] content-stretch flex items-center pb-[54px] pt-[40px] px-[40px] relative rounded-[80px] shrink-0 size-[160px]">
      <LucideLabBagHand />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[420px]">
      <Frame1 />
      <Text text="Title 4" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_20.83%]" data-name="Group">
      <div className="absolute inset-[-1.5%_-2.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 69">
          <g id="Group">
            <path d={svgPaths.p1e4082c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p35ec5d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LucideLabDress() {
  return (
    <div className="overflow-clip relative shrink-0 size-[80px]" data-name="lucide-lab:dress">
      <Group1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ce0000] content-stretch flex items-center pb-[54px] pt-[40px] px-[40px] relative rounded-[80px] shrink-0 size-[160px]">
      <LucideLabDress />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[420px]">
      <Frame7 />
      <Text text="Title 4" />
    </div>
  );
}

function IconParkOutlineHighHeeledShoes() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="icon-park-outline:high-heeled-shoes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="icon-park-outline:high-heeled-shoes">
          <path d={svgPaths.p1a701f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ce0000] content-stretch flex items-center pb-[54px] pt-[40px] px-[40px] relative rounded-[80px] shrink-0 size-[160px]">
      <IconParkOutlineHighHeeledShoes />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[420px]">
      <Frame13 />
      <Text text="Title 4" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame8 />
      <Frame3 />
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-start px-0 py-[100px] relative shrink-0 w-[1300px]" data-name="about">
      <Helper text="About" text1="A weekly email with our favorite articles about design, front-end development, technology, and start" />
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <Wrapper1>
      <div className="absolute bg-[#ce0000] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame7} />
    </Wrapper1>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[420px]">
      <Frame14 />
      <Text1 text="Title 4" />
    </div>
  );
}

function Frame16() {
  return (
    <Wrapper1>
      <div className="absolute bg-[#ce0000] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame8} />
    </Wrapper1>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[420px]">
      <Frame16 />
      <Text1 text="Title 4" />
    </div>
  );
}

function Frame18() {
  return (
    <Wrapper1>
      <div className="absolute bg-[#ce0000] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame9} />
    </Wrapper1>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[420px]">
      <Frame18 />
      <Text1 text="Title 4" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame15 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <Wrapper1>
      <div className="absolute bg-[#ce0000] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame10} />
    </Wrapper1>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[420px] relative shrink-0 w-[420px]">
      <Frame21 />
      <Text1 text="Title 4" />
    </div>
  );
}

function Frame23() {
  return (
    <Wrapper1>
      <div className="absolute bg-[#ce0000] inset-0" />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[196.99%] left-[0.01%] max-w-none top-[-70.15%] w-full" src={imgFrame11} />
      </div>
    </Wrapper1>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[420px] relative shrink-0">
      <Frame23 />
      <Text1 text="Title 4" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-center justify-center px-0 py-[100px] relative shrink-0 w-full">
      <Helper text="Portfolio" text1="A weekly email with our favorite articles about design, front-end development, technology, and start" />
      <Frame20 />
      <Frame5 />
    </div>
  );
}

function Po() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="po">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center text-white w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[40px] w-full">Map</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[16px] w-full">A weekly email with our favorite articles about design, front-end development, technology, and start</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[500px] relative shrink-0 w-[1301px]">
      <div className="absolute h-[500px] left-0 top-0 w-[1301px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[178.55%] left-[-0.01%] max-w-none top-[-66.59%] w-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-center justify-center px-0 py-[100px] relative shrink-0 w-full">
      <Frame25 />
      <Frame10 />
    </div>
  );
}

function Map() {
  return (
    <div className="bg-black h-[879px] relative shrink-0 w-full" data-name="map">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[860px] w-[1920px]">
      <About />
      <Po />
      <Map />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#ce0000] content-stretch flex items-center justify-center px-[80px] py-[20px] relative shrink-0">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[15px] text-nowrap text-white">Read more +</p>
    </div>
  );
}

function Tit() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] h-[191px] items-start justify-center left-[309px] top-[604px] w-[984px]" data-name="tit">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[60px] text-black text-nowrap">Mamonde atmosphere</p>
      <Frame />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[860px] left-0 top-0 w-[1920px]">
      <div className="absolute h-[860px] left-0 top-0 w-[1920px]" data-name="main">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[148.84%] left-[0.03%] max-w-none top-[-9.21%] w-full" src={imgMain} />
          </div>
        </div>
      </div>
      <Tit />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[313px] top-[53px] w-[1297px]">
      <button className="block cursor-pointer font-['Instrument_Serif:Italic',sans-serif] italic leading-[0] relative shrink-0 text-[#ce0000] text-[40px] text-left text-nowrap">
        <p className="leading-[normal]">Maath</p>
      </button>
      <div className="content-stretch cursor-pointer flex font-['Inter:Medium',sans-serif] font-medium gap-[91px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
        <button className="block relative shrink-0">
          <p className="leading-[normal] text-nowrap">About</p>
        </button>
        <button className="block relative shrink-0">
          <p className="leading-[normal] text-nowrap">Portfolio</p>
        </button>
        <button className="block relative shrink-0">
          <p className="leading-[normal] text-nowrap">Map</p>
        </button>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <Frame12 />
      <Frame11 />
      <Frame9 />
    </div>
  );
}