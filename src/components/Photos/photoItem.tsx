import React, {useState} from "react";
import {IPhoto} from "../../app/contracts";
import {Button, Modal} from "react-bootstrap";
import PhotoForm from "./photoForm";
import {useActions} from "../../app/hooks";
import ConfirmationModal from "../Modals/confirmationModal";

interface UserItemProps {
    handleClose: () => void
    photo: IPhoto
    photosCount: number
}

const PhotoItem: React.FC<UserItemProps> = (props: UserItemProps) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)
    const {deletePhotoFromStore} = useActions()
    const handleCloseCreateModal = () => setIsOpenEditModal(false)
    const handleShowCreateModal = () => setIsOpenEditModal(true)

    const handleCloseConfirm = () => setIsOpenConfirmModal(false);
    const handleShowConfirm = () => setIsOpenConfirmModal(true);

    const handleDelete = () => {
        debugger;
        deletePhotoFromStore(props.photo.id)
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
                    <Modal.Title>{props.photo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.photo.url}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShowCreateModal}>Edit</Button>
                    <Button variant="primary" onClick={handleShowConfirm}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {isOpenEditModal && <PhotoForm
                photosCount={props.photosCount}
                handleClose={handleCloseCreateModal}
                photo={props.photo}
                modalTitle={'Edit photo'}/>}

            {isOpenConfirmModal &&
                <ConfirmationModal
                    onClickYes={handleDelete}
                    onClickNo={handleCloseConfirm}
                    modalMessage='Do you really want to delete this card?'/>}
        </>

    )
}

export default PhotoItem