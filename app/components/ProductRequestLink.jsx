import { Package } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";

export default function ProductRequestLink() {
    const {t} = useTranslation();
  return (
    <ButtonGradient to="/product-request" Icon={Package}>
      {t("main.productRequest")}
    </ButtonGradient>
  );
}