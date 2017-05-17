import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {goTo: ""};
  }
  render(){
    return (
      <div>
        <Logo />
        <Link to={`/${this.state.goTo}`}>投稿画面へ</Link>
        <Link to={`/${this.state.goTo}/dashboard`}>管理画面へ</Link>
        <input type="text" onInput={e => this.setState({goTo: e.target.value})} />
      </div>
    );
  }
};

export default Login;
