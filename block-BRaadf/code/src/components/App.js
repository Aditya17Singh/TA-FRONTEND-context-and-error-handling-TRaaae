import React, { createContext } from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";

const DarkMode = createContext();
console.log(DarkMode);
class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
        <DarkMode.Provider value={this.state.isDarkMode , this.changeMode}>
          {<SwitchButton />}
        </DarkMode.Provider>
        {/* <SwitchButton isDarkMode={isDarkMode} changeMode={this.changeMode} /> */}
      </div>
    );
  }
}

export { DarkMode };
export default App;
