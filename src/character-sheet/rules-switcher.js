import React, { Component } from 'react';
import Seeker from '../seeker';

export default class RulesSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select',
      system: {},
      options: [],
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log("changing", e.target.value);
    this.setState({
      value: e.target.value
    });
    this.setState({
      system: this.state.options
              .filter( op => op.name === e.target.value)
    });
    const thingie = this.state.options
              .filter( op => op.name === e.target.value);
    console.log("worked?", thingie);
    // filter is wrapping this item in an array.
    // TODO: find a better way of returning the actual
    // object
    console.log("changed", this.state.system);
  }
  componentDidMount = () => {
    Seeker.getRules(rules => {
      console.log("searching", rules);
      this.setState({
        options: rules
      });
    });
  }
  render() {
    const options = this.state.options.map((op, i) => {
      return <option key={i} value={op.name}>{op.label}</option>;
    });
    return (
      <div>
        <select
          value={this.state.value}
          onChange={this.onChange}
        >
          <option value="select">---</option>
          {options}
        </select>
      </div>
    );
  }
};
