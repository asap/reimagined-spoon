import React, { Component } from 'react';
import Seeker from '../seeker';

export default class RulesSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select',
      options: [],
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    if (e.target.value === 'select') return false;

    const selectedSystem = this.state.options.find(op => op.name === e.target.value);
    
    this.setState({
      value: e.target.value,
    });

    this.props.updateSystem(selectedSystem);
  }
  componentDidMount = () => {
    Seeker.getRules(rules => {
      this.setState({
        options: rules
      });
    });
  }
  render() {
    const options = this.state.options.map((op, i) => {
      return <option key={i} value={op.name}>{op.label}</option>;
    });

    const rulesSwitcherStyles = {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    };

    return (
      <div style={rulesSwitcherStyles}>
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
