import React, { Component } from 'react';
import AttributeList from '../attributes/attribute-list';
import SkillsList from './skills-list';

export default class CharacterSheet extends Component {
  state = {
    character: {
      name: "Guy",
      player: "This Guy",
    },
    attributes: abilities.map(stat => ({
      label: stat,
      value: stats[stat],
      modifier: mods[stats[stat]],
      racialModifier: 0,
      totalModifier: 0,
    })),
    abilities: {},
  };

  render() {
    const character = this.state.character;
    character['attributes'] = this.state.attributes;
    character['abilities'] = this.state.attributes.reduce((abilities, ability) => {
      abilities[ability.label] = ability.modifier;
      return abilities;
    }, {});
    console.log("char", character);

    return (
      <div>
        <div className="characterMeta">
          <div>Character Name: {character.name}</div>
          <div>Player: {character.player} </div>
          <div>Class(s)</div>
          <div>Level</div>
          <div>Race</div>
          <div>Alignment</div>
          <div>Deity</div>
          <div>Size</div>
          <div>Age</div>
          <div>Gender</div>
          <div>Height</div>
          <div>Eyes</div>
          <div>Hair</div>
          <div>Skin</div>
        </div>
        <AttributeList attributes={character.attributes} />
        <SkillsList abilities={character.abilities}  />
      </div>
    );
  }
};

const abilities = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

// TODO: Should probably return more realistic numbers.
// Maybe a simplified pick method?
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
  return Math.floor(Math.random() * mods.length);
};

const stats = {};
abilities.forEach((k) => {
  stats[k] = rand();
});
