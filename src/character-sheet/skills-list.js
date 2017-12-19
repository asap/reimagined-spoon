import React, { Component } from 'react';
import Skills from '../skills/dnd';
import SkillsView from './skills-view';

export default class SkillsList extends Component {
  state = {
    skills: Skills.skills 
  };

  render() {
    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-evenly',
    }
    
    const wideColumn = {
      flex: '0 0 50%',
    };

    const headerStyle = {
      padding: '0 10px',
      margin: '5px',
      width: '30px',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '0.5rem',
    };

    const wideHeaderStyle = {
      ...wideColumn,
      ...headerStyle,
    };

    const abilities = this.props.abilities;

    const skills = this.state.skills.map((skill, i) => {
      return <SkillsView key={i} skill={skill} abilities={abilities}/>
    });

    return (
      <div>
        <div style={rowStyle}>
          <span style={wideHeaderStyle}>Skill Name</span>
          <span style={headerStyle}>Key Ability</span>
          <span style={headerStyle}>Skill Modifier</span>
          <span style={headerStyle}>=</span>
          <span style={headerStyle}>Ability Modifier</span>
          <span style={headerStyle}>+</span>
          <span style={headerStyle}>Ranks</span>
          <span style={headerStyle}>+</span>
          <span style={headerStyle}>Misc Bonus</span>
        </div>
        {skills}
      </div>
    );
  }
};
