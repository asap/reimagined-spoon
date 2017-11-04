import React, { Component } from 'react';
import AttributeView from './attribute-view';

export default class AttributeList extends Component {
  state = {
    attributes: abilities.map(stat => ({
      label: stat,
      value: stats[stat],
      modifier: mods[stats[stat]],
    }))
  }

  render() {
    const attributes = this.state.attributes.map((attr, i) => <AttributeView key={i} attribute={attr} />);

    const headerStyle = {
      padding: '0 10px',
      margin: '5px',
      width: '40px',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '0.7rem',
    };

    return (
      <div>
        <span style={headerStyle}>Ability Name</span>
        <span style={headerStyle}>Ability Score</span>
        <span style={headerStyle}>Ability Modifier</span>
        {attributes}
      </div>
    );
  }
}


const abilities = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

const mods = [
 -5, // Ignore 0th element
 -5,    // 1
 -4,-4, // 2-3
 -3,-3, // 4-5
 -2,-2, // 6-7
 -1,-1, // 8-9
  0,0,  // 10-11
  1,1,  // 12-13
  2,2,  // 14-15
  3,3,  // 16-17
  4,4,  // 18-19
  5,5,  // 20-21
];

const rand = () => {
  return Math.floor(Math.random() * mods.length) 
};

const stats = {};
abilities.forEach((k) => {
  stats[k] = rand();
});
