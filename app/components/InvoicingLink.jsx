import { FileText } from "lucide-react";
import ButtonGradient from './ButtonGradient';
import { useTranslation } from "react-i18next";

export default function InvoicingLink() {
    const {t} = useTranslation();
  return (
    <ButtonGradient to="/invoicing" Icon={FileText}>
      {t("main.invoicing")}
    </ButtonGradient>
  );
}