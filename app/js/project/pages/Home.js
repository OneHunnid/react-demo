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
      <section className="container">
        <header className="header">
          <Link to="/"><h1 className="site-title">UI Components</h1></Link>
          <p>This site showcases User Interface components built in React by Chris Limbrick.</p>
          <Navigation />
        </header>
        {this.props.children}
      </section>
    );
  }
}
