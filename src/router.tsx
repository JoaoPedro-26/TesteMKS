import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './types/routes'
import Home from 'pages'

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.START} element={<Home/>}/>
        </Routes>
    )
}

export default Router