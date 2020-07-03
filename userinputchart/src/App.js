import React, { Component } from "react";
import "./App.css";
import logo from './logo.svg';
import Form from "./components/Form";
import Grafico from "./components/Grafico";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      values: [],
      chartType: false
    };
  }

  addData = e => {
    e.preventDefault();

    const label = e.target.querySelector('[name="label"]').value;
    const value = e.target.querySelector('[name="value"]').value;
    const {labels, values } = this.state;
  
    labels.push(label);
    values.push(value);
    this.setState({
      ...this.state,
      
      values,
      labels
    });
    return false;
  };

  setChartType = e => {
    const chartType = e.currentTarget.value;
    this.setState({
      ...this.state,
      chartType
    });
  };

  render() {

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Form handleSubmit={this.addData} setChartType={this.setChartType} />
        <div className="App">
          <div className='modal'>  <Grafico
      
            labels={this.state.labels}
            values={this.state.values}
         
            chartType={this.state.chartType} />
          </div>
        </div>
      </div>
    );
  }
}