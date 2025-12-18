export function Footer() {
  return (
    <footer className="w-full bg-black py-8 px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-['Inter:Light',sans-serif] font-light text-[14px] text-white/70 text-center md:text-left">
          © 2024 Maath. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a 
            href="#about" 
            className="font-['Inter:Light',sans-serif] font-light text-[14px] text-white/70 hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#portfolio" 
            className="font-['Inter:Light',sans-serif] font-light text-[14px] text-white/70 hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="#map" 
            className="font-['Inter:Light',sans-serif] font-light text-[14px] text-white/70 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
