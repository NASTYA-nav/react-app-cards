import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {ArticlesService} from "../services/articles-service";
import {Article} from "./contracts";

enum ArticleKeys {
    ARTICLES = 'articles',
    GET_BY_ID = 'get-articles-by-id',
}

function useArticles(): UseQueryResult<Article[]> {
    return useQuery([ArticleKeys.ARTICLES], () => ArticlesService.getAll())
}

// function useArticle(id: number): UseQueryResult<Article> {
//     return useQuery([ArticleKeys.GET_BY_ID, id], () => ArticlesService.getById(id),{
//         select: ({data}) => data,
//         enabled: !!id
//     })
// }

export { useArticles }