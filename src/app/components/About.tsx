import svgPaths from "../../imports/svg-uv5358e2a6";

function BagHandIcon() {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <path 
          d={svgPaths.p5444600} 
          stroke="white" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
        <path 
          d={svgPaths.p247da900} 
          stroke="white" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
}

function DressIcon() {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 69">
        <path 
          d={svgPaths.p1e4082c0} 
          stroke="white" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
        <path 
          d={svgPaths.p35ec5d00} 
          stroke="white" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
}

function ShoesIcon() {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <path 
          d={svgPaths.p1a701f80} 
          stroke="white" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-[420px] group">
      <div className="bg-[#ce0000] rounded-[80px] w-[160px] h-[160px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {icon}
      </div>
      <div className="flex flex-col gap-[10px] items-center w-full">
        <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[24px] text-[#ce0000] text-center">
          {title}
        </h3>
        <p className="font-['Inter:Light',sans-serif] font-light text-[16px] text-black text-center px-[50px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="w-full bg-white py-[100px] px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-[70px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[40px] text-[#ce0000]">
            About
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light text-[16px] text-black max-w-[800px]">
            A weekly email with our favorite articles about design, front-end development, technology, and start
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          <ServiceCard
            icon={<BagHandIcon />}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
          <ServiceCard
            icon={<DressIcon />}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
          <ServiceCard
            icon={<ShoesIcon />}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
        </div>
      </div>
    </section>
  );
}