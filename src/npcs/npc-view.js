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
    return (
      <div>
        <div>{npc.race.race}</div>
        <div>{npc.class}</div>
        <AttributeList modifiers={npc.race.stats} />
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
