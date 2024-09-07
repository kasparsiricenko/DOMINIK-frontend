import { DollarSign } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";

export default function ProfitLink() {
  const {t} = useTranslation();
  return (
    <ButtonGradient to="/profit" Icon={DollarSign}>
      {t("main.profit")}
    </ButtonGradient>
  );
}