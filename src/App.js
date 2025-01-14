import React from "react";

import { Login } from "./form";
import {Register} from "./register";
import Header from "./header";
import Footer from "./footer";
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    // const { isLogginActive } = this.state;

    // if (isLogginActive) {
    //   this.rightSide.classList.remove("right");
    //   this.rightSide.classList.add("left");
    // } else {
    //   this.rightSide.classList.remove("left");
    //   this.rightSide.classList.add("right");
    // }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div>
      <Header/>
      <div className="App">
        <div>
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
            <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
          </div>
          
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
       <Button type="submit">{props.current}</Button>
      </div>
    </div>
  );
};

export default App;