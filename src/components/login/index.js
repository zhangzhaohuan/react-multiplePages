import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Login extends Component {
  render() {
    return (
      <div>
        <a href="/login/index.html">login</a>
        <br />
        <a href="/register/index.html">resister</a>
        <br />
        <a href="/">home</a>
      </div>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('root'));