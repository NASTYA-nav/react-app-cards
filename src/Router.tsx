import {Route, Routes} from 'react-router-dom'
import Articles from "./components/Articles/articles"
import Photos from "./components/Photos/photos"
import Users from "./components/Users/users"

const Router = () => {
    return (
        <Routes>
            <Route element={<Articles/>} path='/articles'/>
            <Route element={<Articles/>} path='*'/>
            <Route element={<Photos/>} path='/photos'/>
            <Route element={<Users/>} path='/users'/>
        </Routes>
    );
}

export default Router