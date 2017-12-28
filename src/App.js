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
    const navStyles = {
      flex: 1,
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
        </ul>
      </div>
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      system: {}
    }
    this.updateSystem = this.updateSystem.bind(this);
  }

  updateSystem = (system) => {
    this.setState({ system });
  }

  render() {
    const system = this.state.system;

    const pageStyles = {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    };

    const navStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '3px solid #369',
      marginBottom: '20px',
    };

    return (
      <Router>
        <div style={pageStyles}>
          <div style={navStyles}>
            <Nav system={system} />
            <RulesSwitcher updateSystem={this.updateSystem} />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/sheet" component={CharacterSheet} />
          <Route path="/npc" render={(routeProps) => (
              <NPCView routeProps={routeProps} system={system} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
