import React, {useState} from "react";
import {IUser} from "../../app/contracts";
import {Button, Modal} from "react-bootstrap";
import UserForm from "./userForm";
import {useActions} from "../../app/hooks";
import ConfirmationModal from "../Modals/confirmationModal";

interface UserItemProps {
    handleClose: () => void
    user: IUser
    articleCount: number
}

const UserItem: React.FC<UserItemProps> = (props: UserItemProps) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)
    const {deleteUserFromStore} = useActions()
    const handleCloseCreateModal = () => setIsOpenEditModal(false)
    const handleShowCreateModal = () => setIsOpenEditModal(true)

    const handleCloseConfirm = () => setIsOpenConfirmModal(false);
    const handleShowConfirm = () => setIsOpenConfirmModal(true);

    const handleDelete = () => {
        debugger;
        deleteUserFromStore(props.user.id)
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
                    <Modal.Title>{props.user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>email: {props.user.email}</div>
                    <div>phone: {props.user.phone}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShowCreateModal}>Edit</Button>
                    <Button variant="primary" onClick={handleShowConfirm}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {isOpenEditModal && <UserForm
                usersCount={props.articleCount}
                handleClose={handleCloseCreateModal}
                user={props.user}
                modalTitle={'Edit user'}/>}

            {isOpenConfirmModal &&
                <ConfirmationModal
                    onClickYes={handleDelete}
                    onClickNo={handleCloseConfirm}
                    modalMessage='Do you really want to delete this card?'/>}
        </>

    )
}

export default UserItem