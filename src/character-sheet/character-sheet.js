import React, { Component } from 'react';
import AttributeList from '../attributes/attribute-list';

export default class CharacterSheet extends Component {
  render() {
    return (
      <div>
        <div className="characterMeta">
          <div>Character Name</div>
          <div>Player</div>
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
        <AttributeList />
      </div>
    );
  }
};
