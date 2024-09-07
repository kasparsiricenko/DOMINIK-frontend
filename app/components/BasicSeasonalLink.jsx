import { Layers } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";

export default function BasicSeasonalLink() {
    const {t} = useTranslation();
  return (
    <ButtonGradient to="/basic-seasonal" Icon={Layers}>
      {t("main.basicSeasonal")}
    </ButtonGradient>
  );
}