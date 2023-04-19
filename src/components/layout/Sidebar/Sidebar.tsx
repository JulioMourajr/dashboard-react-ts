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
          <NavLink to="/curriculo/cadastro/resumo" className={styles.active}>
            Cadastrar Resumo
          </NavLink>
        </li>
        <li>
          <NavLink to="/curriculo/cadastro/experiencia-academica" className={styles.active}>
            Cadastrar Experiencia Academica
          </NavLink>
        </li>
        <li>
          <NavLink to="/curriculo/cadastro/experiencia-profissional" className={styles.active}>
            Cadastrar Experiencia Profissional
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
      </nav>
    </div>
  )
}

export default SideBar