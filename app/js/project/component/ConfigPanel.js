import React from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import ConfigPanelBasicPage from './configPanelBasicPage';
import ConfigPanelMediaPage from './ConfigPanelMediaPage';
import ConfigPanelAdvancedPage from './ConfigPanelAdvancedPage';
// import ModalDeletePage from './ModalDeletePage';

class ConfigPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: 'Basic',
    };

    this.onClickDisplayBasicPage = this.onClickDisplayBasicPage.bind(this);
    this.onClickDisplayMediaPage = this.onClickDisplayMediaPage.bind(this);
    this.onClickDisplayAdvancedPage = this.onClickDisplayAdvancedPage.bind(this);
  }

  onClickDisplayBasicPage() {
    this.setState({
      showComponent: 'Basic',
    });
  }

  onClickDisplayMediaPage() {
    this.setState({
      showComponent: 'Media',
    });
  }

  onClickDisplayAdvancedPage() {
    this.setState({
      showComponent: 'Advanced',
    });
  }

  onClickDelete() {

  }

  render() {
    let currentState;

    if (this.state.showComponent === 'Basic') {
      currentState = <ConfigPanelBasicPage />;
    }
    else if (this.state.showComponent === 'Media') {
        currentState = <ConfigPanelMediaPage />;
    }
    else if (this.state.showComponent === 'Advanced') {
      currentState = <ConfigPanelAdvancedPage />
    }

    return (
      <section id="panel" className="panel">
        <div className="panel__header">
          <div className="panel__header-title">Blog Settings</div>
            <a href="#" className="panel__tabs active" onClick={this.onClickDisplayBasicPage}>Basic</a>
            <a href="#" className="panel__tabs" onClick={this.onClickDisplayMediaPage}>Media</a>
            <a href="#" className="panel__tabs" onClick={this.onClickDisplayAdvancedPage}>Advanced</a>
        </div>
        <ReactCSSTransitionsGroup transitionName="example">
          {currentState}
        </ReactCSSTransitionsGroup>
        <div className="panel__button-wrapper">
          <div className="panel__button">Cancel</div>
          <div className="panel__button delete js-delete" onClick={this.onclickDelete}>Delete</div>
          <div className="panel__button">Save</div>
        </div>
      </section>
    );
  }
}

export default ConfigPanel;
