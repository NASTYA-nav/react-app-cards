import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react"
import {IArticle} from "../../app/contracts";
import ArticleForm from "./articleForm";
import {Button, Spinner} from "react-bootstrap";
import {useActions} from "../../app/hooks";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import ArticleCard from "./articleCard";
import {RowColsClassName} from "../Enums/enums";

function Articles() {

    const {fetchPosts} = useActions()
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
    const [colPosts, setColPosts] = useState(2)
    const [visiblePostsCount, setVisiblePostsCount] = useState(colPosts)
    const {isLoading, error, data} = useSelector((state: RootState) => state.articles, shallowEqual)
    const [className, setClassName] = useState(RowColsClassName.two)

    const handleClose = () => setIsOpenCreateModal(false);
    const handleShow = () => setIsOpenCreateModal(true);
    const loadMore = () => {
        setVisiblePostsCount(prev => prev + colPosts)
    }

    const onChangeCardsCount = () => {
        debugger;
        className == RowColsClassName.two ? setClassName(RowColsClassName.three) : setClassName(RowColsClassName.two)
        colPosts == 3 ? setColPosts(2) : setColPosts(3)
    }

    useEffect(() => {
        debugger;
        if (data.length === 0) fetchPosts();
    }, [])

    if (error) return <div>Error! {error}</div>
    if (isLoading) return <Spinner animation="border"/>
    // store.subscribe(() => {
    //     console.log('store updating')
    //     console.log(store.getState())
    // })
    // Update user data using React Query mutation
    // const { data, isLoading, error } = useQuery(['articles'], () => ArticlesService.getAll()
    //     .then((res) => {
    //     debugger;
    //     setAllArticlesToStore(res)
    // }))
    //     useMutation(() => ArticlesService.getAll(), {
    //     onSuccess: (res) => {
    //         debugger;
    //         // Update Redux state with the updated user data
    //         setAllArticlesToStore(res);
    //     },
    // });

    return (
        <>
            <div className='d-inline-block flex-row'>
                <b>Article list</b>
                <Button variant="primary" className='m-2' size="sm" onClick={handleShow}>
                    Add Article
                </Button>
                <Button variant="primary" className='m-2' size="sm" onClick={onChangeCardsCount}>
                    {colPosts === 3 ? 'Make small cards' : 'Make big cards'}
                </Button>
            </div>

            {!data && <div >Articles are empty</div>}
            <div className={`border-0 m-2 ${className}`}>
                {data && data.slice(0, visiblePostsCount).map((a: IArticle) => {
                    return (
                        <div className="col" key={a.id}>
                            <ArticleCard articleCount={data.length} article={a} />
                        </div>
                    )
                })
                }
            </div>
            <Button onClick={loadMore} variant="primary" size="sm">
                Show more
            </Button>
            {isOpenCreateModal &&
                <ArticleForm handleClose={handleClose} articleCount={data.length} modalTitle={'Add article'}/>}
        </>
    );
}

export default Articles;