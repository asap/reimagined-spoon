import React, { Component } from 'react';
import AttributeView from './attribute-view';

export default class AttributeList extends Component {
  state = {
    attributes: this.props.attributes || [],
    modifiers: this.props.modifiers || [],
  }

  render() {
    const attributes = this.props.attributes.map((attr, i) => {
      attr.totalModifier = attr.modifier + attr.racialModifier;
      return <AttributeView key={i} attribute={attr} />
    });

    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-evenly',
    };

    const headerStyle = {
      padding: '0 10px',
      margin: '5px',
      width: '30px',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '0.5rem',
    };

    return (
      <div>
        <div style={rowStyle}>
          <span style={headerStyle}>Ability Name</span>
          <span style={headerStyle}>Ability Score</span>
          <span style={headerStyle}>Ability Modifier</span>
          <span style={headerStyle}>Racial Modifier</span>
          <span style={headerStyle}>Total Ability Modifier</span>
        </div>
        {attributes}
      </div>
    );
  }
}
