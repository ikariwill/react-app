import React, { Component } from 'react';

export default class InputAutor extends Component {
  render() {
    return (
      <div className="field">
        <label htmlFor={this.props.id} className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input"
            id={this.props.id}
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            />
        </div>
      </div>
    );
  }
}
