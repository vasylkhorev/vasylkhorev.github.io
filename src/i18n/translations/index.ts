export const index = [
    {
        params: {
            lang: 'en',
            pageTitle: "Vasyl Khorev",
            hiim: "Hi, I'm",
            myname: "Vasyl Khorev",
            welcometext: "Welcome to my personal website. I am a student of Informatics at the Faculty of Science at the Pavol Jozef Šafárik University in Košice. I am interested in web development and machine learning. Come and see my thesis.",
            aboutme: "About me",
        }
    },
    {
        params: {
            lang: 'sk',
            pageTitle: "Vasyl Khorev",
            hiim: "Ahoj, volám sa",
            myname: "Vasyl Khorev",
            welcometext: "Vitajte na mojej osobnej webovej stránke. Som študentom informatiky na Prírodovedeckej fakulte Univerzity Pavla Jozefa Šafárika v Košiciach. Zaujímam sa o vývoj webových stránok a strojové učenie. Pozrite si moju bakalársku prácu.",
            aboutme: "O mne",
        }
    },
    {
        params: {
            lang: 'ua',
            pageTitle: "Василь Хорев",
            hiim: "Привіт, мене звати",
            myname: "Василь Хорев",
            welcometext: "Ласкаво просимо на мою особисту веб-сторінку. Я навчаюся на спеціальності інформатика на факультеті природничих наук Університету Павла Йозефа Шафарика в Кошице. Я цікавлюся розробкою веб-сайтів та машинним навчанням. Перегляньте мою бакалаврську роботу.",
            aboutme: "Про мене",
        }
    },
];

export function getTranslationIndex(lang: string) : any {
    const translation = index.find((t: { params: { lang: string; }; }) => t.params.lang === lang);
    if (translation) {
        return translation.params;
    }
    return index[0];
}
