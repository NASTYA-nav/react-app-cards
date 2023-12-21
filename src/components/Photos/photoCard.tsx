import React, {useState} from "react";
import {IPhoto} from "../../app/contracts";
import {Button, Card} from "react-bootstrap";
import PhotoItem from "./photoItem";
import './styles.css'
import {CardTheme} from "../Enums/enums";

interface PhotoCardProps {
    photo: IPhoto
    photosCount: number
}

const PhotoCard: React.FC<PhotoCardProps> = (props: PhotoCardProps) => {
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
            <Card className={`mt-2 mb-2 photo-card ${styles}`}>
                <Card.Img variant="top" src={props.photo.url} />
                <Card.Body>
                    <Card.Text>{props.photo.title}</Card.Text>
                    <Button variant="outline-secondary" onClick={handleShowView}>View</Button>
                    <Button variant="outline-secondary" onClick={onChangeColor}>Change color</Button>
                </Card.Body>
            </Card>

            {isOpenViewModal && <PhotoItem photosCount={props.photosCount} handleClose={handleCloseView} photo={props.photo}/>}
        </>
    )
}

export default PhotoCard