import ProfileSection from "@/components/sections/ProfileSection";
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
  { title: "My Journey", subtitle: "これまでの歩み", component: TempSection },
  { title: "My Tech Toolbox", subtitle: "活用するテック", component: TempSection },
  { title: "Beyond Tech", subtitle: "テックだけではない", component: TempSection },
  { title: "Strengths That Drive Me", subtitle: "私を支える強み", component: TempSection },
  { title: "Next Stage", subtitle: "次なる目標へ", component: TempSection },
];