import 'bootstrap/dist/css/bootstrap.min.css';
import {useActions} from "../../app/hooks";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {useEffect, useState} from "react";
import {RowColsClassName} from "../Enums/enums";
import {Button, Spinner} from "react-bootstrap";
import {IPhoto} from "../../app/contracts";
import PhotoCard from "./photoCard";
import PhotoForm from "./photoForm";

function Photos() {
    const {fetchPhotos} = useActions()
    const {isLoading, error, data} = useSelector((state: RootState) => state.photos)

    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
    const [colPhotos, setColPhotos] = useState(2)
    const [visiblePhotosCount, setVisiblePhotosCount] = useState(colPhotos)
    const [className, setClassName] = useState(RowColsClassName.two)

    const handleClose = () => setIsOpenCreateModal(false);
    const handleShow = () => setIsOpenCreateModal(true);
    const loadMore = () => {
        setVisiblePhotosCount(prev => prev + colPhotos)
    }

    const onChangeCardsCount = () => {
        debugger;
        className == RowColsClassName.two ? setClassName(RowColsClassName.three) : setClassName(RowColsClassName.two)
        colPhotos == 3 ? setColPhotos(2) : setColPhotos(3)
    }

    useEffect(() => {
        if (data.length == 0) fetchPhotos();
    }, [])

    if (error) return <div>Error! {error}</div>
    if (isLoading) return <Spinner animation="border"/>
    return (
        <>
            <div className='d-inline-block flex-row'>
                <b>Photo list</b>
                <Button variant="primary" className='m-2' size="sm" onClick={handleShow}>
                    Add Photo
                </Button>
                <Button variant="primary" className='m-2' size="sm" onClick={onChangeCardsCount}>
                    {colPhotos === 3 ? 'Make small cards' : 'Make big cards'}
                </Button>
            </div>

            {!data && <div >Photos are empty</div>}
            <div className={`border-0 m-2 ${className}`}>

                {data && data.slice(0, visiblePhotosCount).map((p: IPhoto) => {
                    return (
                        <div className="col" key={p.id}>
                            <PhotoCard photosCount={data.length} photo={p}/>
                        </div>
                    )
                })
                }
            </div>
            <Button onClick={loadMore} variant="primary" size="sm">
                Show more
            </Button>
            {isOpenCreateModal &&
                <PhotoForm handleClose={handleClose} photosCount={data.length} modalTitle={'Add Photo'}/>}
        </>
    );
}

export default Photos;