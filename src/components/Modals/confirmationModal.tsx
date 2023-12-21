import React, {useState} from "react";
import {IArticle} from "../../app/contracts";
import {Button, Modal} from "react-bootstrap";

interface ConfirmationModalProps {
    onClickYes: () => void
    onClickNo: () => void
    article?: IArticle
    articleCount?: number
    modalMessage: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = (props: ConfirmationModalProps) => {

    return (
        <Modal
            size="sm"
            show={true}
            onHide={props.onClickNo}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Body>
                {props.modalMessage}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.onClickYes()}>Yes</Button>
                <Button variant="primary" onClick={props.onClickNo}>No</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal