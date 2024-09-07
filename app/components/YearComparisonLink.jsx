import { TrendingUp } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";

export default function YearComparisonLink() {
    const {t} = useTranslation();
  return (
    <ButtonGradient to="/year-comparison" Icon={TrendingUp}>
      {t("main.yearComparison")}
    </ButtonGradient>
  );
}