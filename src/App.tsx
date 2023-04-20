import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layout'
import Home from './pages/home'
import CadastrarPortifolio from './pages/portifolio/CadastrarPortifolio/CadastrarPortifolio'
import ListagemPortifolios from './pages/portifolio/ListagemPortifolio'
import CadastrarInformacoes from './pages/curriculo/CadastrarInformacoes'
import CadastrarExperiencia from './pages/curriculo/CadastrarExperiencia'





const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes/>}/> 
          <Route path='/curriculo/experiencia/cadastro' element={<CadastrarExperiencia/>}/>    
          <Route path='/portifolio/cadastro' element={<CadastrarPortifolio/>}/>  
          <Route path='/portifolio/listagem' element={<ListagemPortifolios/>}/>    
        </Routes>       
      </Layout>       
    </BrowserRouter>
       
  )
}

export default App
