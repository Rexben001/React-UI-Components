import React, {Component} from "react";
import "./App.css";

import HeaderComponent from './components/HeaderComponent/Header';
import DisplayComponent from "./components/DisplayComponents/CalculatorDisplay";
import ActionComponent from "./components/ButtonComponents/ActionButton";
import NumberComponent from "./components/ButtonComponents/NumberButton";

class App extends Component {
  state = {
    total: 0
  }

  buttonClicked = (event) => {
    if (this.state.total === 0)
    {
      this.setState({total: event.target.textContent })
    } else
    {
      this.setState({total: `${this.state.total} ${event.target.textContent}`})
    }
    if (event.target.textContent === '=')
    {
      const displayValue = this.state.total;
      const value = displayValue.split(' ').map((val, idx) => {
        if (val === 'X')
        {
          return displayValue[idx - 1] * displayValue[idx + 1]
        }
        // Number(val)
      });
      console.log(value);
    }
  }
  
  render() {
    return (
      <div className="App">
        <HeaderComponent headStyle="head-style" text="7"/>
        <DisplayComponent buttonStyle="display-style" total={this.state.total} text="0" />
        <div className="action-number">
          <ActionComponent buttonStyle="action-button clear" text="clear" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button red" text="÷" click={this.buttonClicked}/>
        </div>
        <div>
          <NumberComponent buttonStyle="number-button" text="7" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="8" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="9" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button red" text="X" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="4" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="5" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="6" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button red" text="–" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="1" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="2" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button" text="3" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button red" text="+" click={this.buttonClicked}/>
        </div>
        <div className="action-number">
          <ActionComponent buttonStyle="action-button" text="0" click={this.buttonClicked}/>
          <NumberComponent buttonStyle="number-button red" text="=" click={this.buttonClicked}/>
        </div>
      </div>
    );
  }
}

export default App;
