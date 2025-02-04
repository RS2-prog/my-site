import { useEffect, useState } from "react";

const ScrollBar = () => {
  const numSections = 7;
  const [sectionHeight, setSectionHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSectionHeight(window.innerHeight);

      let timeoutId: NodeJS.Timeout;

      const handleScroll = () => {
        setScrollPosition(window.scrollY);
        setIsVisible(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setIsVisible(false), 500);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (index: number) => {
    if (sectionHeight > 0) {
      window.scrollTo({ top: index * sectionHeight, behavior: "smooth" });
    }
  };

  if (sectionHeight === 0) return null; 

  return (
    <div className={`fixed bottom-20 right-10 transition-opacity duration-500 ease-in-out z-[100] ${
      isVisible ? "opacity-100" : "opacity-50"
    }`}>
      <div className="flex flex-col items-center">
        {Array.from({ length: numSections }).map((_, index) => {
          const currentSectionStart = index * sectionHeight;
          const prevSectionStart = (index - 1) * sectionHeight;

          const barFill = scrollPosition >= prevSectionStart ? Math.min(1, (scrollPosition - prevSectionStart) / sectionHeight) : 0;
          const sectionFill = scrollPosition >= currentSectionStart ? 1 : (index === 0 ? 1 : 0);

          return (
            <div key={index} className="flex flex-col items-center">
              {index > 0 && (
                <div className="w-1 h-8 bg-gray-300 relative overflow-hidden">
                  <div
                    className="absolute w-full bg-black transition-all"
                    style={{ height: `${barFill * 100}%`, top: 0 }}
                  />
                </div>
              )}
              <button
                onClick={() => scrollToSection(index)}
                className="w-4 h-4 rounded-full bg-gray-300 relative overflow-hidden hover:bg-[#9ECED8] transition-all pointer-events-auto"
              >
                <div
                  className="absolute w-full h-full bg-black transition-all"
                  style={{ height: `${sectionFill * 100}%`, top: 0 }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollBar;
