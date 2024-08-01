export const experience = [
    {
        params: {
            lang: 'en',
            now: "Now",
            pt_developer: "Part-time developer",
            ais: "University information system used in Slovakia. Currently, AiS2 is implemented at 16 universities in Slovakia and is available to more than 100,000 students of Slovak schools, which is more than 50% of all students of Slovak universities."
        }
    },
    {
        params: {
            lang: 'sk',
            now: "doteraz",
            pt_developer: "Part-time developer",
            ais: "Univerzitný informačný systém používaný na Slovensku. V súčasnosti je AiS2 implementovaný na 16 vysokých školách na Slovensku a k dispozícii ho má viac ako 100 tisíc študentov slovenských škôl, čo je viac ako 50% všetkých študentov slovenských vysokých škôl."
        }
    },
    {
        params: {
            lang: 'ua',
            now: "досі",
            pt_developer: "Розробник на часткову ставку",
            ais: "Університетська інформаційна система, яка використовується в Словаччині. На сьогоднішній день AiS2 реалізований в 16 університетах Словаччини і доступний для понад 100 000 студентів словацьких шкіл, що становить більше 50% всіх студентів словацьких університетів."
        }
    },
];

export function getTranslationExperience(lang: string): any {
    const translation = experience.find((t: { params: { lang: string; }; }) => t.params.lang === lang);
    if (translation) {
        return translation.params;
    }
    return experience[0];
}
