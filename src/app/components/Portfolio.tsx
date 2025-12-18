import imgFrame7 from "figma:asset/a848e002d71b2121817a1fa23f30aa6d6687b432.png";
import imgFrame8 from "figma:asset/b7b1843a4cf88949062b4a38fc5c592dec88d2ec.png";
import imgFrame9 from "figma:asset/7ecfbe3a48cbb97f4ca5344410fb452e49ec2c51.png";
import imgFrame10 from "figma:asset/e7878fbe2f5f686846186fee0d6ff01b041d2ad9.png";
import imgFrame11 from "figma:asset/b5dd09a905220eccb959705d9e50a578633c801a.png";

interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
}

function PortfolioItem({ image, title, description }: PortfolioItemProps) {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-[420px]">
      <div className="w-full h-[320px] rounded-lg overflow-hidden bg-[#ce0000] relative group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
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

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-[#fafafa] py-[100px] px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-[70px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[40px] text-[#ce0000]">
            Portfolio
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light text-[16px] text-black max-w-[800px]">
            A weekly email with our favorite articles about design, front-end development, technology, and start
          </p>
        </div>

        {/* Portfolio Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          <PortfolioItem
            image={imgFrame7}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
          <PortfolioItem
            image={imgFrame8}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
          <PortfolioItem
            image={imgFrame9}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
        </div>

        {/* Portfolio Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center max-w-[860px] mx-auto">
          <PortfolioItem
            image={imgFrame10}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
          <PortfolioItem
            image={imgFrame11}
            title="Title 4"
            description="our favorite articles about design, front-end development, technology"
          />
        </div>
      </div>
    </section>
  );
}