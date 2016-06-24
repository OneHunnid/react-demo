import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="navigation">
        <Link to="config-panel" className="navigation-link">Config Panel</Link>
        <Link to="exit-modal" className="navigation-link">Exit Modal</Link>
      </nav>
    );
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <header className="header">
          <Link to="/"><h1>Welcome!</h1></Link>
          <p>This is a React JS practice area for education and personal development.</p>
          <Navigation />
        </header>
        {this.props.children}
      </section>
    );
  }
}