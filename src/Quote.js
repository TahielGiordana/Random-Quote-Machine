import React from "react";

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="space-between flex-column quote-text-wrapper">
        <p id="text">{this.props.quote}</p>
        <p id="author">- {this.props.author}</p>
      </div>
    );
  }
}

export default Quote;
