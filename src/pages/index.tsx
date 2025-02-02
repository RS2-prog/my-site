import { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle"
import { sections } from "@/types/sectionTypes";
import Header from "@/components/header/Header";
import ScrollBar from "@/components/ScrollBar";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const scrollY = window.scrollY;
      let adjustedScrollY;

      if (scrollY > lastScrollY) {
        adjustedScrollY = scrollY + sectionHeight / 5;
      } else {
        adjustedScrollY = scrollY + (sectionHeight * 4) / 5;
      }

      const newIndex = Math.floor(adjustedScrollY / sectionHeight);

      if (newIndex !== activeIndex) {
        setIsVisible(false);
        setTimeout(() => {
          setActiveIndex(newIndex);
          setIsVisible(true);
        }, 500);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, lastScrollY]);

  return (
    <div>
      <Header/>
      <ScrollBar/>
      <SectionTitle title={sections[activeIndex]?.title || ""} subtitle={sections[activeIndex]?.subtitle || ""} isVisible={isVisible} />
      {sections.map((_, index) => (
        < _.component 
          key={index}
          active={index===activeIndex}
        />
      ))}
    </div>
  );
}
