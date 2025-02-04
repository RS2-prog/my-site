import React, { useEffect, useState } from "react";

export type PageContentProps = {
  id: string;
  label: string;
  offset?: number;
};

const NavigationMenu = ( sections: PageContentProps[] ) => {
  // 各セクションのオフセット値を取得
  useEffect(() => {
    const updateOffsets = () => {
      const offsets = {};
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          section.offset = element.getBoundingClientRect().top + window.scrollY;
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
    <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-10">
      <ul className="flex gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.offset)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
