import React, {useState} from "react";
import {Article} from "../../hooks/contracts";
import {Button, Modal} from "react-bootstrap";
import {useActions} from "../../app/hooks";

interface ArticleFormProps {
    handleClose: () => void
    article? : Article
    articleCount?: number
}

const ArticleForm: React.FC<ArticleFormProps> = (props: ArticleFormProps ) => {

    const [title, setTitle] = useState(props.article ? props.article.title : '')
    const [body, setBody] = useState(props.article ? props.article.body : '')
    const {addArticleToStore} = useActions()
    // const {mutate} = useMutation(['create-article'], (article: Article) => ArticlesService.create(article),
    //     {
    //         onSuccess(){
    //             alert('Article is created')
    //         }
    //     })

    const submitHandler = (e: any) => {
        e.preventDefault()
        debugger;
        addArticleToStore({
            body: body,
            title: title,
            id: 0,
            userId: 11
        })
        props.handleClose()
    }

    return (
        <Modal
            show={true}
            onHide={props.handleClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={submitHandler}>
                    <input value={props.article ? props.article.userId : 11} type='hidden' placeholder='userId'></input>
                    <input value={1 + 1} type='hidden' placeholder='id'></input>
                    <input
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value)
                        }}
                        placeholder='title'></input>
                    <input
                        value={body}
                        onChange={e => {
                            setBody(e.target.value)
                        }}
                        placeholder='body'></input>

                    <button>Save</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ArticleForm