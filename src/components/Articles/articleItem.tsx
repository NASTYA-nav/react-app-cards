import React, {useState} from "react";
import {IArticle} from "../../app/contracts";
import {Button, Modal} from "react-bootstrap";
import ArticleForm from "./articleForm";
import {useActions} from "../../app/hooks";
import ConfirmationModal from "../Modals/confirmationModal";

interface ArticleItemProps {
    handleClose: () => void
    article: IArticle
    articleCount: number
}

const ArticleItem: React.FC<ArticleItemProps> = (props: ArticleItemProps) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)
    const {deleteArticleFromStore} = useActions()
    const handleCloseCreateModal = () => setIsOpenEditModal(false)
    const handleShowCreateModal = () => setIsOpenEditModal(true)

    const handleCloseConfirm = () => setIsOpenConfirmModal(false);
    const handleShowConfirm = () => setIsOpenConfirmModal(true);

    const handleDelete = () => {
        debugger;
        deleteArticleFromStore(props.article.id)
        handleCloseConfirm()
        props.handleClose()
    };

    return (
        <>
            <Modal
                show={true}
                onHide={props.handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.article.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShowCreateModal}>Edit</Button>
                    <Button variant="primary" onClick={handleShowConfirm}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {isOpenEditModal && <ArticleForm
                articleCount={props.articleCount}
                handleClose={handleCloseCreateModal}
                article={props.article}
                modalTitle={'Edit article'}/>}

            {isOpenConfirmModal &&
                <ConfirmationModal
                    onClickYes={handleDelete}
                    onClickNo={handleCloseConfirm}
                    modalMessage='Do you really want to delete this card?'/>}
        </>

    )
}

export default ArticleItem