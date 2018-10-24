import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Register extends Component {
  render() {
    return (
      <div>
        <a href="/register/index.html">resister</a>
        <br />
        <a href="/login/index.html">login</a>
        <br />
        <a href="/">home</a>
      </div>
    )
  }
}
ReactDOM.render(<Register />, document.getElementById('root'));

