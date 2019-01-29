import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import resources from '../../data/dictionary.json';

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'ru',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
