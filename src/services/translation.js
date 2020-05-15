import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { generateLocalResources } from "../locales";
import i18nConfig from "../config/i18n";

export async function loadTranslations() {
  const resources = generateLocalResources();

  return i18n.use(initReactI18next).init({
    ...i18nConfig,
    resources,
  });
}
