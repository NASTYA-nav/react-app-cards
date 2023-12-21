import React, {useState} from "react";
import {IUser} from "../../app/contracts";
import {Button, Card} from "react-bootstrap";
import UserItem from "./userItem";
import './styles.css'
import {CardTheme} from "../Enums/enums";

interface UserCardProps {
    user: IUser
    usersCount: number
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
    const [styles, setStyles] = useState('cardLightTheme')
    const [isOpenViewModal, setIsOpenViewModal] = useState(false)
    const handleCloseView = () => setIsOpenViewModal(false);
    const handleShowView = () => setIsOpenViewModal(true);

    const onChangeColor = () => {
        let theme = ''
        switch (styles) {
            case CardTheme.light:
                theme = CardTheme.dark
                break;
            case CardTheme.dark:
                theme = CardTheme.default
                break;
            case CardTheme.default:
                theme = CardTheme.light
                break;
            default:
                theme = CardTheme.light
                break;
        }
        setStyles(theme)
    }

    return (
        <>
            <Card className={`mt-2 mb-2 user-card ${styles}`}>
                <Card.Body>
                    <Card.Title>{props.user.name}</Card.Title>
                    <Card.Text>
                        <div>email: {props.user.email}</div>
                        <div>phone: {props.user.phone}</div>
                    </Card.Text>
                    <Button variant="outline-secondary" onClick={handleShowView}>View</Button>
                    <Button variant="outline-secondary" onClick={onChangeColor}>Change color</Button>
                </Card.Body>
            </Card>

            {isOpenViewModal && <UserItem articleCount={props.usersCount} handleClose={handleCloseView} user={props.user}/>}
        </>
    )
}

export default UserCard