import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class SkillsView extends Component {
  render () {
    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-evenly',
    }
    
    const wideColumn = {
      flex: '0 0 50%',
    };

    const cellStyle = {
      display: 'inline-block',
      margin: '5px',
      width: '30px',
      padding: '0 10px',
      textAlign: 'center',
    };

    const wideCellStyle = {
      ...wideColumn,
      ...cellStyle,
      textAlign: 'left',
    };

    const skill = this.props.skill;
    const abilities = this.props.abilities;
    const abilityModifier = abilities[skill.ability];

    return (
      <div style={rowStyle}>
        <span style={wideCellStyle}>{skill.label}</span>
        <span style={cellStyle}>{skill.ability}</span>
        <span style={cellStyle}>0</span>
        <span style={cellStyle}>=</span>
        <span style={cellStyle}>{abilityModifier}</span>
        <span style={cellStyle}>+</span>
        <span style={cellStyle}>0</span>
        <span style={cellStyle}>+</span>
        <span style={cellStyle}>0</span>
      </div>
    );
  };
};

SkillsView.propTypes = {
  skill: PropTypes.object.isRequired,
}
