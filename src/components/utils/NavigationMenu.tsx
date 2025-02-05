import { motion } from "motion/react";
import React, { useEffect } from "react";

export type PageContentProps = {
  id: string;
  label: string;
  offset?: number;
};

type NavigationProps = {
  sections: PageContentProps[];
}

const NavigationMenu: React.FC<NavigationProps> = ({ sections }) => {
  // 各セクションのオフセット値を取得
  useEffect(() => {
    const updateOffsets = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          section.offset = element.getBoundingClientRect().top + window.scrollY - 50;
        }
      });
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets); 

    return () => window.removeEventListener("resize", updateOffsets);
  }, [sections]);

  // スクロール処理
  const scrollToSection = (offset: number | undefined) => {
    if (offset !== undefined) {
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-[15%] right-[15%] p-4 z-10 border-l-[1px] border-black">
      <div className="font-mono text-[16pt] mb-6">Index</div>
      <ul className="flex flex-col space-y-6">
        {sections.map((section) => (
          <li key={section.id}>
            <motion.button
              initial={{ marginLeft: "0" }}
              whileHover={{ marginLeft: "8px "}}
              transition={{ duration: 0.5}}
              onClick={() => scrollToSection(section.offset)}
              className=""
            >
              {section.label}
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
