export const blog = [
    {
        params: {
            lang: 'en',
            pageTitle: "Blog",
        }
    },
    {
        params: {
            lang: 'sk',
            pageTitle: "Blog",
        }
    },
    {
        params: {
            lang: 'ua',
            pageTitle: "Блог",
        }
    },
];

export function getTranslationBlog(lang: string) : any {
    const translation = blog.find((t: { params: { lang: string; }; }) => t.params.lang === lang);
    if (translation) {
        return translation.params;
    }
    return blog[0];
}
