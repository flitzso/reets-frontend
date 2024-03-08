import React from 'react';
import logoReets from '../components/imgs/logo-reets-50px.png';
import '../components/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="logoReets">
            <a href="#">
            <img src={logoReets} class="homeR"></img>
            </a>
            </div>
  <div class="containerNavBar container-fluid">
    <div className="ponto"></div>
    <a class="navbar-brand text-white" href="#">Ao Vivo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Programação</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Segurança</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Foruns</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Semanal</a>
        </li>
        <li class="login nav-item">
          <a class="nav-link text-warning" href="#" tabindex="-1" aria-disabled="true">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;