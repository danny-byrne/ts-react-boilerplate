import * as React from "react";
import * as ReactDOM from "react-dom";
import UserComponent from "./components/UserComponent";

ReactDOM.render(
  <div>
    <UserComponent
      name="John Doe"
      age={26}
      address="87 Summer St, Boston, MA 02110"
      dob={new Date()}
    />
    <h1>This is a Typescript with React template</h1>
  </div>,
  document.getElementById("root")
);
