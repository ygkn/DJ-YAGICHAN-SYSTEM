import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {query: "", userName: ""};
  }
  
  inputQueryHandler(e) {
    this.setState({query: e.target.value});
  }
  
  inputUserNameHandler(e) {
    this.setState({userName: e.target.value});
  }
  
  render() {
    return (
      <div>
        <h1> DJ YAGICHAN SYSTEM </h1>
        <form>
          <input onInput={this.inputUserNameHandler.bind(this)} value={this.state.userName} placeholder="あなたの名前を入力…" />
          <input onInput={this.inputQueryHandler.bind(this)} value={this.state.query} placeholder="キーワード、URLを入力…" />
        </form>
        {(() => this.state.userName && <p>すっごーい！あなたは{this.state.userName}のフレンズなんだね！</p>)()}
      </div>
    )
  }
}

export default App;