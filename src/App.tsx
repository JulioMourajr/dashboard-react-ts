import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Login from './pages/login'
import AppRoutes from './routes/AppRoutes'






const App:React.FC = () => {
  return (
    <BrowserRouter>      
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<AppRoutes/>}/>       
      </Routes>       
    </BrowserRouter>
       
  )
}

export default App
