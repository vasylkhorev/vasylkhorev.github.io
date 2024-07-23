import {defaultLang, ui} from './ui';

export function getLangFromUrl(url: URL) {
    return getLangFromUrlString(url.pathname);
}

function getLangFromUrlString(url: string) {
    const [, lang] = url.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function replaceLangInUrl(url: URL, key: String) : String {
    return `/${key}/${url.pathname.substring(4)}`
}


export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        // @ts-ignore
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function getLocale(lang: string): string {
    if (lang === "ua") {
        return "uk-UA";
    } else if (lang === "sk") {
        return "sk-SK";
    } else {
        return "en-US";
    }
}

export const dateOptions: object = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

