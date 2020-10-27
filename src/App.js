import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import quotes from './quotes';

function tweetButton(props) {
  return(
    <button>
      tweet
    </button>
  );
}

function Button(props) {
  return(
    <button id="newQuote"
      onClick={() => props.onClick()}
    >
      New Quote
    </button>
  );
}

//Parent of Button, Child of App
class Quote extends React.Component {
  constructor(props) {
    super(props);
    const rand = this.getRandomInt();
    this.state= {
      quote: quotes.quotes[rand].quote,
      author: "-" + quotes.quotes[rand].author,
    }
  }

  getRandomInt() {
    const max = quotes.quotes.length - 1;
    return Math.floor(Math.random() * (max));
  }

  handleClick() {
    const rand = this.getRandomInt();
    this.setState({
      quote: quotes.quotes[rand].quote,
      author: "-" + quotes.quotes[rand].author,
    });
  }

  Button() {
    return (
      <Button
        onClick={() => this.handleClick()}
      />
    );
  }

  render () {
    return (
      <div id="quote-box">
        <div id="text">
          {this.state.quote}
        </div>
        <div id="author">
          {this.state.author}
        </div>
        <div>
          {this.Button()}
        </div>
      </div>
    );
  }
}

//Parent
class App extends React.Component {
  render() {
    return (
      <div className="quoteEngine">
        <div className="quote">
          <Quote />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
