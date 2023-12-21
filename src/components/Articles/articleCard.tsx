import React, {useState} from "react";
import {IArticle} from "../../app/contracts";
import {Button, Card} from "react-bootstrap";
import ArticleItem from "./articleItem";
import './styles.css'
import {CardTheme} from "../Enums/enums";

interface ArticleCardProps {
    article: IArticle
    articleCount: number
}

const ArticleCard: React.FC<ArticleCardProps> = (props: ArticleCardProps) => {
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
            <Card className={`mt-2 mb-2 post-card ${styles}`}>
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                        {props.article.body}
                    </Card.Text>
                    <Button variant="outline-secondary" onClick={handleShowView}>View</Button>
                    <Button variant="outline-secondary" onClick={onChangeColor}>Change color</Button>
                </Card.Body>
            </Card>

            {isOpenViewModal && <ArticleItem articleCount={props.articleCount} handleClose={handleCloseView} article={props.article}/>}
        </>
    )
}

export default ArticleCard