import i18next from 'i18next';
import i18nextXHRBackend from 'i18next-xhr-backend';

const instance = i18next.createInstance()

export default function i18n({ locale, baseUrl = '' }) {
  return instance.use(i18nextXHRBackend).init({
    lng: locale,
    fallbackLng: 'en',
    keySeparator: '$',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${baseUrl}assets/locale/messages_{{lng}}.json`,
      crossDomain: true,
    },
  });
}
