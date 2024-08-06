export interface ArticleI {
    id: number;
    html?: boolean;
    name_en: string;
    name_ukr: string;
    answer_en: string;
    answer_ukr: string;
}

export interface AllArticlesI {
    id: number;
    link: string;
    name_en: string;
    name_ukr: string;
    description_en: string;
    description_ukr: string;
    articles: ArticleI[]
}