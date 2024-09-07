import { Box } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";


export default function IlliquidStockLink() {
    const {t} = useTranslation();
  return (
    <ButtonGradient to="/illiquid-stock" Icon={Box}>
      {t("main.illiquidStock")}
    </ButtonGradient>
  );
}