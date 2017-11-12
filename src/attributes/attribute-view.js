import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AttributeView extends Component {
  render () {
    const attribute = this.props.attribute;

    const labelStyle = {
      padding: '10px',
      margin: '5px',
      width: '40px',
      backgroundColor: '#999',
      display: 'inline-block',
      textAlign: 'center',
    };

    const rowStyle = {
      display: 'flex',
      justifyContent: 'space-evenly',
    };

    const cellStyle = {
      padding: '10px',
      margin: '5px',
      width: '40px',
      backgroundColor: '#ddd',
      border: '1px solid #999',
      display: 'inline-block',
      textAlign: 'center',
    };

    return (
      <div style={rowStyle}>
        <span style={labelStyle} className="label">{attribute.label}</span>
        <span style={cellStyle} className="value">{attribute.value}</span>
        <span style={cellStyle} className="value">{attribute.modifier}</span>
        <span style={cellStyle} className="race">{attribute.racialModifier}</span>
        <span style={cellStyle} className="total">{attribute.totalModifier}</span>
      </div>
    );
  }
}

AttributeView.propTypes = {
  attribute: PropTypes.object.isRequired,
}

export default AttributeView;
