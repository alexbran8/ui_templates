import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

// process.env.NODE_ENV == "development" ? location = "./" : location = "/public"
console.log('ENV',process.env.NODE_ENV)
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    ns: ["translations"],
    backend: {
      /* translation file path */
      loadPath: `./assets/i18n/{{ns}}/{{lng}}.json`,
    },
    fallbackLng: "en",
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
 
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
