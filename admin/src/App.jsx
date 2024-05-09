import React from 'react'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Addproduct } from './Pages/Addproduct'
import { Listproduct } from './Pages/Listproduct'

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className=' flex '>
        <Sidebar />
        <Routes>
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/listproduct' element={<Listproduct />} />
        </Routes>
      </div>
    </div>
  )
}
