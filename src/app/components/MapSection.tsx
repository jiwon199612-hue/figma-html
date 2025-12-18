import imgImage1 from "figma:asset/3124a7498036c7508dbca32417d95ca29ba3fd33.png";

export function MapSection() {
  return (
    <section id="map" className="w-full bg-black py-[100px] px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-[70px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[32px] md:text-[40px] text-white">
            Map
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light text-[16px] text-white max-w-[800px] px-4">
            A weekly email with our favorite articles about design, front-end development, technology, and start
          </p>
        </div>

        {/* Map Image */}
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={imgImage1} 
            alt="Location map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}