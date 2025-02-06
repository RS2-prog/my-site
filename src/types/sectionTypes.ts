import GoalSection from "@/components/sections/GoalSection";
import HistorySection from "@/components/sections/HistorySection";
import ProfileSection from "@/components/sections/ProfileSection";
import PRSection from "@/components/sections/PRSection";
import SkillSection from "@/components/sections/SkillSection";
import Top from "@/components/sections/Top";
import WorksSection from "@/components/sections/WorksSection";

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
  { title: "My Journey", subtitle: "これまでの歩み", component: HistorySection },
  { title: "Core Technologies", subtitle: "活用する技術", component: SkillSection },
  { title: "Personal Works", subtitle: "制作物", component: WorksSection },
  { title: "Beyond Skills", subtitle: "技術だけではない", component: PRSection },
  { title: "Next Stage", subtitle: "次なる目標", component: GoalSection },
];