import React, {useState} from "react";
import {IUser} from "../../app/contracts";
import {Button, Form, Modal} from "react-bootstrap";
import {useActions} from "../../app/hooks";

interface UserFormProps {
    handleClose: () => void
    user?: IUser
    usersCount: number
    modalTitle: string
}

const UserForm: React.FC<UserFormProps> = (props: UserFormProps) => {

    const [name, setName] = useState(props.user ? props.user.name : '')
    const [phone, setPhone] = useState(props.user ? props.user.phone : '')
    const [email, setEmail] = useState(props.user ? props.user.email : '')
    const [website, setWebsite] = useState(props.user ? props.user.website : '')
    const {addUserToStore, updateUserFromStore} = useActions()

    const submitHandler = (e: any) => {
        e.preventDefault()
        const newUser: IUser = {
            name: name,
            id: (props.user && props.usersCount) ? props.user?.id : props.usersCount + 1,
            phone: phone,
            website: website,
            email: email,
        }
        props.user ? updateUserFromStore(newUser) : addUserToStore(newUser)
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
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                        }}
                        placeholder='name'/>
                    <Form.Control
                        className='mt-2'
                        type='text'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                        placeholder='email'/>
                    <Form.Control
                        className='mt-2'
                        type='text'
                        value={phone}
                        onChange={e => {
                            setPhone(e.target.value)
                        }}
                        placeholder='phone'/>
                    <Form.Control
                        className='mt-2'
                        type='text'
                        value={website}
                        onChange={e => {
                            setWebsite(e.target.value)
                        }}
                        placeholder='website'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={submitHandler} disabled={(!phone || !name || !website || !email)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default UserForm