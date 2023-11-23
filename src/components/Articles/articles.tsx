import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react"
import {ArticlesService} from "../../services/articles-service";

interface Articles {
    userId: number
    id: number
    title: string
    body: string
}
function Articles() {
    const [articles, setArticles ] = useState([])
    useEffect(() => {

        const getArticles = async () => {
            const articles = await ArticlesService.getAll()
            setArticles(articles)
        }

        getArticles()
    }, [])

    return (
        <div>Articles
            {articles.map((a: Articles) => {
                return (
                    <div>{a.title}</div>
                )
            })}
        </div>
    );
}

export default Articles;