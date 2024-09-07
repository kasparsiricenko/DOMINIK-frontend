import { Megaphone } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";

export default function MarketingLink() {
    const {t} = useTranslation();
  return (
    <ButtonGradient to="/marketing" Icon={Megaphone}>
      {t("main.marketing")}
    </ButtonGradient>
  );
}