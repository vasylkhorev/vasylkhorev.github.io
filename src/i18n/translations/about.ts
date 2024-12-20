export const about = [
    {
        params: {
            lang: 'en',
            pageTitle: "About me",
            iamastudentof:"I am a student of",
            program:"Informatics",
            atthe:"at the",
            faculty:"Faculty of Science",
            attheuni:"at the",
            uni:"Pavol Jozef Šafárik University in Košice",
            iminterested :"I am interested in web development and ",
            machinelearning: "machine learning",
            comeandsee:"Come and see my bachelorThesis",
            skills: "Skills",
            experience: "Experience",

        }
    },
    {
        params: {
            lang: 'sk',
            pageTitle: "O mne",
            iamastudentof:"Som študentom",
            program:"Informatiky",
            atthe: "na",
            faculty: "Prírodovedeckej fakulte",
            attheuni: "na",
            uni: "Univerzite Pavla Jozefa Šafárika v Košiciach",
            iminterested: "Zaoberam sa vývojom webových stránok a ",
            machinelearning: "strojovým učením",
            comeandsee: "Pozri si moju bakalársku prácu",
            skills: "Zručnosti",
            experience: "Skúsenosti",

        }
    },
    {
        params: {
            lang: 'ua',
            pageTitle: "Про мене",
            iamastudentof: "Я навчаюся на спеціальності",
            program: "Інформатика",
            atthe: "на",
            faculty: "Факультеті природничих наук",
            attheuni: "в",
            uni: "Університеті Павла Йозефа Шафарика в Кошице",
            iminterested: "Цікавлюся розробкою веб-сайтів та ",
            machinelearning: "машинним навчанням",
            comeandsee: "Переглянь мою бакалаврську роботу",
            skills: "Навички",
            experience: "Досвід",
        }
    },
];

export function getTranslationAbout(lang: string) : any {
    const translation = about.find((t: { params: { lang: string; }; }) => t.params.lang === lang);
    if (translation) {
        return translation.params;
    }
    return about[0];
}
