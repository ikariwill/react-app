import React, { Component } from 'react';

export default class PostButton extends Component {
  render() {
    return (
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Cadastrar</button>
        </div>
      </div>
    );
  }
}
