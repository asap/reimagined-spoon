import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import CharacterSheet from './character-sheet/character-sheet';
import NPCView from './npcs/npc-view';
import RulesSwitcher from './character-sheet/rules-switcher';

class Home extends Component {
  render() {
    return(
      <div>Home</div>
    );
  }
};

class Nav extends Component {
  render() {
    const system = this.props.system;

    const navStyles = {
    };

    const listStyles = {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'space-evenly',
      padding: 0,
    };

    return(
      <div style={navStyles}>
        <ul style={listStyles}>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/sheet">Character Sheet</Link></li>
          <li><Link to="/npc">NPCs</Link></li>
          <RulesSwitcher system={system} />
        </ul>
        <hr />
      </div>
    );
  }
};

class App extends Component {
  state = {
    system: {},
  }

  render() {
    const pageStyles = {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    };
    return (
      <Router>
        <div style={pageStyles}>
          <Nav system={this.state.system} />
          <Route exact path="/" component={Home} />
          <Route path="/sheet" component={CharacterSheet} />
          <Route path="/npc" component={NPCView} />
        </div>
      </Router>
    );
  }
}

export default App;
