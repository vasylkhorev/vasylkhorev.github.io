export const languages = {
    en: 'English',
    sk: 'Slovenčina',
    ua: "Українська",
};

export const languagesThesis= [
    {params: {lang: 'en', 'thesis.title': "a"}},
    {params: {lang: 'sk'}},
    {params: {lang: 'ua'}},
];

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.thesis': 'Thesis',
        "allrightsreserved": "All rights reserved",

    },
    sk: {
        'nav.home': 'Domov',
        'nav.about': 'O mne',
        'nav.thesis': 'Bakalárska práca',
        "allrightsreserved": "Všetky práva vyhradené",
    },
    ua: {
        'nav.home': 'Головна',
        'nav.about': 'Про мене',
        'nav.thesis': 'Бакалаврська робота',
        "allrightsreserved": "Всі права захищені",},
} as const;