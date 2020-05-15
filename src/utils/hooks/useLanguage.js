import { useTranslation } from "react-i18next";

function useLanguage() {
  const { t, i18n } = useTranslation();

  return {
    t,
    currentLang: i18n.language,
    changeLang: (locale) => i18n.changeLanguage(locale),
  };
}

export default useLanguage;
