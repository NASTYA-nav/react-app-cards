import React, {useState} from "react";
import {IPhoto} from "../../app/contracts";
import {Button, Form, Modal} from "react-bootstrap";
import {useActions} from "../../app/hooks";

interface PhotoFormProps {
    handleClose: () => void
    photo?: IPhoto
    photosCount: number
    modalTitle: string
}

const PhotoForm: React.FC<PhotoFormProps> = (props: PhotoFormProps) => {

    const [title, setTitle] = useState(props.photo ? props.photo.title : '')
    const [url, setUrl] = useState(props.photo ? props.photo.url : '')
    const {addPhotoToStore, updatePhotoFromStore} = useActions()

    const submitHandler = (e: any) => {
        e.preventDefault()
        const newPhoto = {
            title: title,
            url: url,
            id: (props.photo && props.photosCount) ? props.photo?.id : props.photosCount + 1,
        }
        props.photo ? updatePhotoFromStore(newPhoto) : addPhotoToStore(newPhoto)
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
                        value={url}
                        onChange={e => {
                            setUrl(e.target.value)
                        }}
                        placeholder='url'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={submitHandler} disabled={(!url || !title)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default PhotoForm