import React, { Component } from 'react';
import drop from 'lodash/drop';
import reverse from 'lodash/reverse';
import './App.css';
import './css/bulma.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {lista: [], nome: '', email: '', senha: ''};
    this.enviar = this.enviar.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  componentDidMount(){
    const url = 'http://cdc-react.herokuapp.com/api/autores';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let ultimos10 = drop(data, data.length - 10);
      this.setState({lista: reverse(ultimos10)});
    })
    .catch(err => {
      console.log(err);
    });
  }

  enviar(event){
    event.preventDefault();

    fetch('http://cdc-react.herokuapp.com/api/autores', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "nome": this.state.nome,
          "email": this.state.email,
          "senha": this.state.senha
        }
      )
    })
    .then(res => res.json())
    .then(data => {
      let ultimos10 = drop(data, data.length - 10);
      this.setState({lista: reverse(ultimos10)});
    })
    .catch(err => {
      console.log(err);
    });

    console.log("enviando");
  }

  setNome(event){
    this.setState({nome:event.target.value})
  }

  setEmail(event){
    this.setState({email:event.target.value})
  }

  setSenha(event){
    this.setState({senha:event.target.value})
  }

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

        <div className="content-hero">
          <div className="container has-text-centered">
            <p className="title">
              Cadastro de Autor
            </p>

            <div className="columns is-mobile">
              <div className="column is-three-fifths is-offset-one-fifth">
                <form onSubmit={this.enviar} method="post">
                  <div className="field">
                    <label className="label">Nome</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Nome"
                        value={this.state.nome}
                        onChange={this.setNome}
                        />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input" type="email" placeholder="Email"
                        value={this.state.email}
                        onChange={this.setEmail}/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Senha</label>
                    <div className="control">
                      <input className="input" type="password" placeholder="Senha"
                        value={this.state.senha}
                        onChange={this.setSenha}/>
                    </div>
                  </div>


                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-link">Cadastrar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="column is-three-fifths is-offset-one-fifth">
                <table className="table table-full">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      this.state.lista.map(autor =>{
                        return (
                          <tr key={autor.id}>
                            <td>{autor.nome}</td>
                            <td>{autor.email}</td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

      </section>
    );
  }
}

export default App;
