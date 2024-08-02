import { Route, Routes } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import NewItemPage from './../pages/NewItemPage/NewItemPage'

const AppRoutes = () => {

    return (

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/crear' element={<NewItemPage />} />

        </Routes>
    )
}

export default AppRoutes