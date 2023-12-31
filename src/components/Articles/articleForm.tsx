import React, {useState} from "react";
import {IArticle} from "../../app/contracts";
import {Button, Form, Modal} from "react-bootstrap";
import {useActions} from "../../app/hooks";

interface ArticleFormProps {
    handleClose: () => void
    article?: IArticle
    articleCount: number
    modalTitle: string
}

const ArticleForm: React.FC<ArticleFormProps> = (props: ArticleFormProps) => {

    const [title, setTitle] = useState(props.article ? props.article.title : '')
    const [body, setBody] = useState(props.article ? props.article.body : '')
    const {addArticleToStore, updateArticleFromStore} = useActions()
    // const {mutate} = useMutation(['create-article'], (article: Article) => ArticlesService.create(article),
    //     {
    //         onSuccess(){
    //             alert('Article is created')
    //         }
    //     })


    const submitHandler = (e: any) => {
        e.preventDefault()
        const newArticle = {
            body: body,
            title: title,
            id: (props.article && props.articleCount) ? props.article?.id : props.articleCount + 1,
            userId: 11
        }
        props.article ? updateArticleFromStore(newArticle) : addArticleToStore(newArticle)
        props.handleClose()
    }

    return (
        <Modal
            show={true}
            onHide={props.handleClose}
            backdrop="static"
        >
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type='text'
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value)
                        }}
                        placeholder='title'/>
                    <Form.Control
                        className='mt-2'
                        as="textarea"
                        rows={4}
                        value={body}
                        onChange={e => {
                            setBody(e.target.value)
                        }}
                        placeholder='text'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={submitHandler} disabled={(!body || !title)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ArticleForm