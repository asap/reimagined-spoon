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
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
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
          onChange={this.onChange.bind(this)}
        >
          <option value="select">---</option>
          {options}
        </select>
      </div>
    );
  }
};
