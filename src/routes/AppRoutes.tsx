import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'

import Home from '../pages/home'
import CadastrarPortifolio from '../pages/portifolio/CadastrarPortifolio'
import ListagemPortifolios from '../pages/portifolio/ListagemPortifolio'
import CadastrarInformacoes from '../pages/curriculo/CadastrarInformacoes'
import CadastrarExperiencia from '../pages/curriculo/CadastrarExperiencia'
import ListagemExperiencia from '../pages/curriculo/ListagemExperiencia'


const AppRoutes:React.FC = () => {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes/>}/> 
            <Route path='/curriculo/experiencia/cadastro' element={<CadastrarExperiencia/>}/>    
            <Route path='/curriculo/experiencia/lista' element={<ListagemExperiencia/>}/> 
            <Route path='/portifolio/cadastro' element={<CadastrarPortifolio/>}/>  
            <Route path='/portifolio/listagem' element={<ListagemPortifolios/>}/> 
          </Routes>                   
      </Layout> 
  )
}

export default AppRoutes;
