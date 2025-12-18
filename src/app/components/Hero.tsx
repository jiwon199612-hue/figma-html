import imgMain from "figma:asset/41ced8f1f819bc3490e11b36673151f13732feba.png";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[860px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgMain} 
          alt="Mamonde atmosphere hero" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 md:px-8 pb-[10%] md:pb-[15%]">
        <div className="max-w-[984px] w-full flex flex-col gap-4 md:gap-[18px]">
          <h1 className="font-['Instrument_Serif:Regular',sans-serif] text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-black leading-tight">
            Mamonde atmosphere
          </h1>
          <button className="bg-[#ce0000] text-white font-['Inter:Light',sans-serif] font-light text-[14px] md:text-[15px] px-[40px] md:px-[80px] py-[16px] md:py-[20px] self-start hover:bg-opacity-90 transition-all whitespace-nowrap">
            Read more +
          </button>
        </div>
      </div>
    </section>
  );
}