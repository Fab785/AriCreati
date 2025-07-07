import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Aricreati!",
      hero: {
        italys_most: "ITALY'S MOST",
        exciting: "Exciting",
        creative_company: "Creative Company",
        description: "As multi-award-winning artists across Italy, Aricreati are known as the artisans of the creative sector.",
        tagline: "Good Creations, Real Artists, Great Vibes.",
        discover_more: "DISCOVER MORE",
      },
      // Add more keys and translations here...
    }
  },
  it: {
    translation: {
      welcome: "Benvenuto in Aricreati!",
      hero: {
        italys_most: "IL PIÙ FAMOSO IN ITALIA",
        exciting: "Entusiasmante",
        creative_company: "Azienda Creativa",
        description: "Come artisti pluripremiati in tutta Italia, Aricreati sono conosciuti come gli artigiani del settore creativo.",
        tagline: "Buone creazioni, veri artisti, grandi vibrazioni.",
        discover_more: "SCOPRI DI PIÙ",
      },
      // Italian translations...
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;

