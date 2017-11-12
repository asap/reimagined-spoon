import React, { Component } from 'react';
import AttributeList from '../attributes/attribute-list';
import Species from '../races/star-trek';
const { species } = Species;

export default class NPC extends Component {
  state = {
    npc: {
      race: randomRace(),
      class: randomClass(),
    }
  };

  render () {
    const npc = this.state.npc;
    const refreshPage = () => {
      window.location.reload();
    };
    const refreshButtonStyles = {
      width: '300px',
      height: '40px',
      borderRadius: '20px',
      border: 0,
      fontRize: '1.5rem',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <div>
        <div>{npc.race.race}</div>
        <div>{npc.class}</div>
        <AttributeList modifiers={npc.race.stats} />
        <button style={refreshButtonStyles} type="button" onClick={ refreshPage}>Refresh</button>
      </div>
    );
  }
};


const classes = [
  'rogue', 'starship officer', 'mystic'
];

const randomRace = () => {
  const races = species;
  return races[Math.floor(Math.random() * races.length)];
};

const randomClass = () => {
  return classes[Math.floor(Math.random() * classes.length)];
};
