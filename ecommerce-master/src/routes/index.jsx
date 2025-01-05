import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Shirt from '../pages/Shirt'
import Shirts from '../pages/Shirts'


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/shirt' element={<Shirt />} />
            <Route path='/shirts' element={<Shirts />} />
        </Routes>
    )
}

export default Router