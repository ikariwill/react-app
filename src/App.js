import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <section className="hero is-info is-large">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a className="navbar-item">
                    Autor
                  </a>
                  <a className="navbar-item">
                    Livro
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
             Cadastro de Autor
            </p>

            <div className="columns is-mobile">
            <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <label className="label">Nome</label>
              <div className="control">
                <input className="input" type="text" placeholder="Nome"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Email"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Senha</label>
              <div className="control">
                <input className="input" type="password" placeholder="Senha"/>
              </div>
            </div>


            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Cadastrar</button>
              </div>

            </div>
            </div>
          </div>
        </div>
        </div>

      </section>
    );
  }
}

export default App;
