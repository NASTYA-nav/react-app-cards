import 'bootstrap/dist/css/bootstrap.min.css';
import {useActions} from "../../app/hooks";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {Button, Spinner} from "react-bootstrap";
import {IUser} from "../../app/contracts";
import UserCard from "./userCard";
import UserForm from "./userForm";
import {RowColsClassName} from "../Enums/enums";

function Users() {
    const {fetchUsers} = useActions()
    const {isLoading, error, data} = useSelector((state: RootState) => state.users)

    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
    const [colUsers, setColUsers] = useState(2)
    const [visibleUsersCount, setVisibleUsersCount] = useState(colUsers)
    const [className, setClassName] = useState(RowColsClassName.two)

    const handleClose = () => setIsOpenCreateModal(false);
    const handleShow = () => setIsOpenCreateModal(true);
    const loadMore = () => {
        setVisibleUsersCount(prev => prev + colUsers)
    }

    const onChangeCardsCount = () => {
        debugger;
        className == RowColsClassName.two ? setClassName(RowColsClassName.three) : setClassName(RowColsClassName.two)
        colUsers == 3 ? setColUsers(2) : setColUsers(3)
    }

    useEffect(() => {
        if (data.length == 0) fetchUsers();
    }, [])

    if (error) return <div>Error! {error}</div>
    if (isLoading) return <Spinner animation="border"/>
    return (
        <>
            <div className='d-inline-block flex-row'>
                <b>User list</b>
                <Button variant="primary" className='m-2' size="sm" onClick={handleShow}>
                    Add User
                </Button>
                <Button variant="primary" className='m-2' size="sm" onClick={onChangeCardsCount}>
                    {colUsers === 3 ? 'Make small cards' : 'Make big cards'}
                </Button>
            </div>

            {!data && <div >Users are empty</div>}
            <div className={`border-0 m-2 ${className}`}>
                {data && data.slice(0, visibleUsersCount).map((u: IUser) => {
                    return (
                        <div className="col" key={u.id}>
                            <UserCard usersCount={data.length} user={u}/>
                        </div>
                    )
                })
                }
            </div>
            <Button onClick={loadMore} variant="primary" size="sm">
                Show more
            </Button>
            {isOpenCreateModal &&
                <UserForm handleClose={handleClose} usersCount={data.length} modalTitle={'Add User'}/>}
        </>
    );
}

export default Users;