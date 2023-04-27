import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css'

const SideBar:React.FC = ()=>{
  return(
    <div className={styles.sidebar}>
      <nav className={styles.navigation}> 
      <ul>
        <li>
          <NavLink to="/" className={styles.active}>
            <h3>Home</h3>
          </NavLink>
        </li>
      </ul>
      <h3>Currículo</h3>
      <ul>
        <li>
          <NavLink to="/curriculo/informacoes/cadastro" className={styles.active}>
            Cadastrar Informações
          </NavLink>
        </li>
        <li>
          <NavLink to="/curriculo/experiencia/cadastro" className={styles.active}>
            Cadastrar Experiencia
          </NavLink>
        </li>
        <li>
          <NavLink to="/curriculo/experiencia/lista" className={styles.active}>
            Lista de Experiencias
          </NavLink>
        </li>
      </ul>
      <h3>Portifolio</h3>
      <ul>
          <li>
            <NavLink to="/portifolio/cadastro" className={styles.active}>
              Cadastrar Portifolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/portifolio/listagem" className={styles.active}>
              Listagem de Portifolios
            </NavLink>
          </li>
      </ul>

      <ul>
        <li>
          <NavLink to="/login" className={styles.active}>
            <h3>Logout</h3>
          </NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default SideBar