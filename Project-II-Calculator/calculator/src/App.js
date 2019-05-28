import React, {Component} from "react";
import "./App.css";

import HeaderComponent from './components/HeaderComponent/Header';
import DisplayComponent from "./components/DisplayComponents/CalculatorDisplay";
import ActionComponent from "./components/ButtonComponents/ActionButton";
import NumberComponent from "./components/ButtonComponents/NumberButton";

class App extends Component {
  state = {
    saveInput: '0'
  }

  buttonClicked = (num) => {
    this.setState({saveInput: `${this.state.saveInput}${num}`})
  }

  equalButton = () => {
    let total = this.state.saveInput;
    if (total.charAt(0) === '0')
    {
      total = total.substr(1);
          this.setState({ saveInput: eval(total) });
    }
    this.setState({ saveInput: eval(total) });
  }

  clearTotal = () => {
    this.setState({ saveInput: '0' });
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent headStyle="head-style" text="7"/>
        <DisplayComponent buttonStyle="display-style" total={this.state.saveInput} text="0" />
        <div className="action-number">
          <ActionComponent buttonStyle="action-button clear" text="clear" click={this.clearTotal}/>
          <NumberComponent buttonStyle="number-button red" text="÷" click={()=>this.buttonClicked('/')}/>
        </div>
        <div>
          <NumberComponent buttonStyle="number-button" text="7" click={()=>this.buttonClicked(7)}/>
          <NumberComponent buttonStyle="number-button" text="8" click={()=>this.buttonClicked(8)}/>
          <NumberComponent buttonStyle="number-button" text="9" click={()=>this.buttonClicked(9)}/>
          <NumberComponent buttonStyle="number-button red" text="X" click={()=>this.buttonClicked('*')}/>
          <NumberComponent buttonStyle="number-button" text="4" click={()=>this.buttonClicked(4)}/>
          <NumberComponent buttonStyle="number-button" text="5" click={()=>this.buttonClicked(5)}/>
          <NumberComponent buttonStyle="number-button" text="6" click={()=>this.buttonClicked(6)}/>
          <NumberComponent buttonStyle="number-button red" text="–" click={()=>this.buttonClicked('-')}/>
          <NumberComponent buttonStyle="number-button" text="1" click={()=>this.buttonClicked(1)}/>
          <NumberComponent buttonStyle="number-button" text="2" click={()=>this.buttonClicked(2)}/>
          <NumberComponent buttonStyle="number-button" text="3" click={()=>this.buttonClicked(3)}/>
          <NumberComponent buttonStyle="number-button red" text="+" click={()=>this.buttonClicked('+')}/>
        </div>
        <div className="action-number">
          <ActionComponent buttonStyle="action-button" text="0" click={()=>this.buttonClicked(0)}/>
          <NumberComponent buttonStyle="number-button red" text="=" click={this.equalButton}/>
        </div>
      </div>
    );
  }
}

export default App;
