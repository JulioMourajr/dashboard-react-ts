import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layout'
import Home from './pages/home/Home'
import CadastrarPortifolio from './pages/portifolio/CadastrarPortifolio'
import ListagemPortifolios from './pages/portifolio/ListagemPortifolios'




const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <h1>Testando Importação do Layout</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>    
        <Route path='/portifolio/cadastro' element={<CadastrarPortifolio/>}/>  
        <Route path='/portifolio/listagem' element={<ListagemPortifolios/>}/>    
      </Routes>   
      </Layout> 
      
    </BrowserRouter>
       
  )
}

export default App
