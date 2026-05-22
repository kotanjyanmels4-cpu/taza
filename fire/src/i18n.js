import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require("./locales/en/translation.json") },
      am: { translation: require("./locales/am/translation.json") },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
  export default i18n;