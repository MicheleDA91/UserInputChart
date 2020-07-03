import React, { Component } from "react";


export default class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
         
          <input type="text" name="label" placeholder="label" />
          <br />
          <input type="text" name="value" placeholder="valore" />
          <br />
          
         <select
          name="chartType"
          defaultValue={false}
          onChange={this.props.setChartType}
        >
          <option value={false}>Scegli grafico...</option>
          <option value="radar">Radar</option>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="bubble">Bubble</option>
        </select>
        <button type="submit">Aggiungi</button>
        </form>
       </div>
    );
  }
}
