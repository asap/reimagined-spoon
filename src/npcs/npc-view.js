import React, { Component } from 'react';
import AttributeList from '../attributes/attribute-list';
import Seeker from '../seeker';

export default class NPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: {},
      occ: '',
    };

    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount = () => {
    this.randomizeSpecies();
    this.randomizeOCC();
  }

  randomizeSpecies = () => {
    if (this.props.system.name === undefined) return false;
    Seeker.getSpecies(this.props.system.name, species => {
      this.setState({
        species: species[Math.floor(Math.random() * species.length)]
      });
    });
  }

  randomizeOCC = (system) => {
    if (this.props.system.name === undefined) return false;
    const classes = [
      'rogue', 'starship officer', 'mystic'
    ];

    this.setState({
      occ: classes[Math.floor(Math.random() * classes.length)]
    });
  }

  handleRefresh = () => {
    this.randomizeSpecies();
    this.randomizeOCC();
  }

  render () {
    const species = this.state.species;
    const occ = this.state.occ;

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
        <div>{species.race}</div>
        <div>{occ}</div>
        <AttributeList modifiers={species.stats} />
        <button style={refreshButtonStyles}
                type="button"
                onClick={this.handleRefresh}>Refresh
        </button>
      </div>
    );
  }
};
