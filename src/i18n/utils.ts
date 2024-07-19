import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
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

