import React from "react";
// import BrowserRouter from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      // app: "",
    };
  }
  render() {
    return (
      <>
        <Sidebar />
        <Main />
      </>
    );
  }
}

export default App;
