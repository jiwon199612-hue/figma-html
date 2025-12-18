export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/30 to-transparent">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Instrument_Serif:Italic',sans-serif] italic text-[32px] md:text-[40px] text-[#ce0000] hover:opacity-80 transition-opacity"
          >
            Maath
          </button>
          <div className="flex gap-8 md:gap-[91px] items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-white hover:opacity-80 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-white hover:opacity-80 transition-opacity"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('map')}
              className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-white hover:opacity-80 transition-opacity"
            >
              Map
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}