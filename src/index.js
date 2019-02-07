import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <span className="date">Today at 6pm</span>
        </div>
        <div className="text">nice blog post</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
