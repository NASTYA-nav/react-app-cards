import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react"
import {Article} from "../../hooks/contracts";
import {useArticles} from "../../hooks/useArticles.hooks";
import ArticleForm from "./articleForm";
import {Modal, Spinner} from "react-bootstrap";

function Articles() {
    const articles = useArticles()
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)

    const handleClose = () => setIsOpenCreateModal(false);
    const handleShow = () => setIsOpenCreateModal(true);
    if (articles.error) return <div>Error!</div>
    if (articles.isLoading) return <Spinner animation="border" />

    return (
        <>
            <button onClick={handleShow}>Add Article</button>
            {articles.data != null ? (
                articles.data.map((a: Article) => {
                return (
                    <div>{a.title}</div>
                )
            })) : <div>Articles is empty</div>}
            {isOpenCreateModal && <ArticleForm handleClose={handleClose}/>}
        </>
    );
}

export default Articles;