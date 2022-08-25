import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import Quote from "./Quote";

const quotes = [
  {
    quote:
      "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
    author: "Madeleine L'Engle",
  },
  {
    quote:
      "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    author: "Stephen King",
  },
  {
    quote: "We write to taste life twice, in the moment and in retrospect.",
    author: "Anaïs Nin",
  },
  {
    quote:
      "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
    author: "Mark Twain",
  },
  {
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    let actualQuote = quotes.at(Math.floor(Math.random() * quotes.length));
    this.state = {
      quote: actualQuote.quote,
      author: actualQuote.author,
    };
    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote = () => {
    this.setState(() => {
      let actualQuote = quotes.at(
        Math.floor(Math.random() * quotes.length - 1)
      );
      return {
        quote: actualQuote.quote,
        author: actualQuote.author,
      };
    });
  };

  render() {
    return (
      <div id="quote-box">
        <Quote quote={this.state.quote} author={this.state.author} />
        <div className="space-between">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_top">
            Tweet
          </a>
          <button onClick={this.nextQuote} id="new-quote">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
