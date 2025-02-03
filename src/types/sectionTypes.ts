import HistorySection from "@/components/sections/HistorySection";
import ProfileSection from "@/components/sections/ProfileSection";
import SkillSection from "@/components/sections/SkillSection";
import Top from "@/components/sections/Top";
import TempSection from "@/components/TempSection";

// ホームページセクションプロパティ
export type Section = {
  title: string;
  subtitle: string;
  component: React.FC<SectionProps>;
};

// セクションコンポーネント共通プロパティ
export type SectionProps = {
  active: boolean;
}

// セクションリスト
export const sections: Section[] = [
  { title: "", subtitle: "", component: Top },
  { title: "Who I Am", subtitle: "自己紹介", component: ProfileSection },
  { title: "My Journey", subtitle: "経歴記録", component: HistorySection },
  { title: "Core Technologies", subtitle: "主要技術", component: SkillSection },
  { title: "Development Tools", subtitle: "基盤技術", component: TempSection },
  { title: "Beyond Skills", subtitle: "技術外面", component: TempSection },
  { title: "Next Stage", subtitle: "未来展望", component: TempSection },
];