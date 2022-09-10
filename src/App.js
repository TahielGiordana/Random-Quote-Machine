import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import Quote from "./Quote";
import { randomColor } from "./randomColor";
import { getRandomQuote } from "./getRandomQuote";

class App extends React.Component {
  constructor(props) {
    super(props);

    let color = randomColor();

    this.state = {
      quote: "",
      author: "",
      color: color,
    };
    this.nextQuote = this.nextQuote.bind(this);
    document.body.style.backgroundColor = color;
  }

  componentDidMount() {
    this.nextQuote();
  }

  async nextQuote() {
    let color = randomColor();

    let text, author;
    await fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        text = quote.content;
        author = quote.author;
        console.log(quote);
      });

    this.setState(() => {
      return {
        quote: text,
        author: author,
        color: color,
      };
    });
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div id="quote-box" style={{ color: this.state.color }}>
        <Quote quote={this.state.quote} author={this.state.author} />
        <div className="space-between">
          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              this.state.quote +
              " " +
              this.state.author
            }
            id="tweet-quote"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon-twitter"
              style={{ color: this.state.color }}
            />
          </a>
          <button
            onClick={this.nextQuote}
            id="new-quote"
            style={{ backgroundColor: this.state.color }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
