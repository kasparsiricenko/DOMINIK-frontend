import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end space-x-4">
      <button onClick={() => changeLanguage('en')} className="p-2">English</button>
      <button onClick={() => changeLanguage('ru')} className="p-2">Русский</button>
      <button onClick={() => changeLanguage('lv')} className="p-2">Latviešu</button>
    </div>
  );
}