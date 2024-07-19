export const thesisTranslations = [
    {
        params: {
            lang: 'en',
            thesisTitle: "Methods of association rules and their applications",
            thesisAuthor: "Vasyl Khorev",
            pageTitle: "Thesis",
            "author.label": "Author",
            "thesis.supervisor": "Thesis supervisor",
            "thesis.consultant": "Consultant",
            "presentation": "Presentation",
            "essay": "Essay",
            "thesis": "Thesis",
            "goals.label": "Goals",
            "goals.1": "Describe known algorithms for generating association rules.",
            "goals.2": "Implement known algorithms for generating association rules and compare their advantages and disadvantages.",
            "goals.3": "Apply the implemented algorithms to a selected dataset.",
            "whatisAR": "What is Association Rule?",
            "whatisAR.answer1": "Association occurs when several events are interrelated. It indicates that certain data (or events found in the data) are associated with other data or events resulting from the data. For example, a study conducted in a supermarket may show that 65% of visitors who buy potato chips will also buy Coca-Cola, and if there is a discount for such a set they will buy it 85% of the time.",
            "whatisAR.answer2": "If the store has information about such an association, it is easy for managers to judge how effective the discount is." +
                "These associations are called rules. Those that exceed a certain threshold are considered interesting. Such rules help in decision making and explanation.",
            "class": "w-1/2 sm:w-1/5"
        }
    },
    {
        params: {
            lang: 'sk',
            thesisTitle: "Metódy asociačných pravidiel a ich aplikácie",
            thesisAuthor: "Vasyl Khorev",
            pageTitle: "Bakalárska práca",
            "author.label": "Autor",
            "thesis.supervisor": "Vedúci práce",
            "thesis.consultant": "Konzultant",
            "presentation": "Prezentácia",
            "essay": "Esej",
            "thesis": "Práca",
            "goals.label": "Ciele",
            "goals.1": "Popísať známe algoritmy na generovanie asociačných pravidiel.",
            "goals.2": "Implementovať známe algoritmy na generovanie asociačných pravidiel a porovnať ich výhody a nevýhody.",
            "goals.3": "Aplikovať implementované algoritmy na vybraný dataset.",
            "whatisAR": "Čo sú to asociačné pravidlá?",
            "whatisAR.answer1": "K asociácii dochádza vtedy, keď niekoľko udalostí navzájom súvisí. Intuitívne by sme mohli asociácie popísať\n" +
                "            takým spôsobom, že určité údaje (alebo udalosti nájdené v údajoch) sú spojené s inými údajmi alebo\n" +
                "            udalosťami vyplývajúcimi z týchto údajov. Napríklad štúdia vykonaná v supermarkete môže ukázať, že 65% návštevníkov, ktorí si kúpili\n" +
                "            zemiakové lupienky, si kúpia aj Coca-Colu, a ak existuje zľava pre takýto súbor, kúpia si ju v 85% prípadov.",
            "whatisAR.answer2": "Takéto vyhľadávanie odhaľuje skryté súvislosti v zdanlivo nesúvisiacich údajoch. Tieto súvislosti sa nazývajú asociačné pravidlá. Tie, ktoré presahujú určitú hra\n" +
                "            nicu, sa považujú za zaujímavé.  Takéto pravidlá dávajú možnosť prijať opatrenia na základe nájdených vzorov. Pomáhajú tiež pri rozhodovaní a vysvetľovaní.",
            "class": "sm:w-1/3"
        }
    },
    {
        params: {
            lang: 'ua',
            thesisTitle: "Методи асоціативних правил та їх застосування",
            thesisAuthor: "Василь Хорев",
            pageTitle: "Бакалаврська робота",
            "author.label": "Автор",
            "thesis.supervisor": "Науковий керівник",
            "thesis.consultant": "Консультант",
            "presentation": "Презентація",
            "essay": "Есе",
            "thesis": "Робота",
            "goals.label": "Мета роботи",
            "goals.1": "Описати відомі алгоритми для генерації асоціативних правил.",
            "goals.2": "Реалізувати відомі алгоритми для генерації асоціативних правил та порівняти їх переваги та недоліки.",
            "goals.3": "Застосувати реалізовані алгоритми до вибраного набору даних.",
            "whatisAR": "Що таке асоціативні правила?",
            "whatisAR.answer1": "Асоціація виникає, коли кілька подій пов'язані між собою. Інтуїтивно ми можемо описати асоціації " +
                "таким чином, що певні дані (або події, знайдені в даних) пов'язані з іншими даними або" +
                " з іншими даними або подіями, що випливають з цих даних. Наприклад, дослідження, проведене в супермаркеті, може показати, що 65% відвідувачів, які купили" +
                 " картопляні чіпси, також придбають кока-колу, а якщо на такий набір діє знижка, то вони придбають її у 85% випадків.",
            "whatisAR.answer2": "Такі пошуки виявляють приховані зв'язки у, здавалося б, не пов'язаних між собою даних. Ці зв'язки називаються асоціативними правилами. Ті з них, які виходять за межі конкретної гри" +
                " вважаються цікавими.  Такі правила дають можливість діяти на основі знайдених закономірностей. Вони також допомагають у прийнятті рішень і поясненні.",
            "class": "w-1/2 sm:w-1/5"
        }
    },
];

export function getTranslation(lang: string) : any {
    const translation = thesisTranslations.find(t => t.params.lang === lang);
    if (translation) {
        return translation.params;
    }
    return thesisTranslations[0];
}