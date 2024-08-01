export const skills = [
    {
        params: {
            lang: 'en',
            webdevelopment: "Web development",
            proficientin: "Proficient in HTML, CSS, JavaScript, and frameworks such as Angular and Astro.",
            springjava: "Experienced in using the Spring framework for building REST backend applications.",
            android: "Kotlin Android App Development",
            androidText: "Worked on Android application development using Kotlin.",

        }
    },
    {
        params: {
            lang: 'sk',
            webdevelopment: "Vývoj webových stránok",
            proficientin: "HTML, CSS, JavaScript a frameworky ako Angular a Astro.",
            springjava: "Skúsenosti s Spring frameworkom a vyvoj škálovateľných REST backendových aplikácií.",
            android: "Vývoj aplikácií pre Android v jazyku Kotlin",
            androidText: "Práca na vývoji aplikácií pre Android v jazyku Kotlin.",
        }
    },
    {
        params: {
            lang: 'ua',
            webdevelopment: "Веб-розробка",
            proficientin: "HTML, CSS, JavaScript та фреймворки, такі як Angular та Astro.",
            springjava: "Досвід використання Spring framework для створення REST бекенд додатків.",
            android: "Розробка додатків для Android на Kotlin",
            androidText: "Працював над розробкою додатків для Android на Kotlin.",
        }
    },
];

export function getTranslationSkills(lang: string) : any {
    const translation = skills.find((t: { params: { lang: string; }; }) => t.params.lang === lang);
    if (translation) {
        return translation.params;
    }
    return skills[0];
}
