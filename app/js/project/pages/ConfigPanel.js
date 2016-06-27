import React from 'react';

export default class ConfigPanel extends React.Component {
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
      <section className="main-content">
        <div id="panel" className="panel">
          <div className="panel__header">
            <div className="panel__header-title">Blog Settings</div>
              <div href="#" className="panel__tabs active" onClick={this.onClickDisplayBasicPage}>Basic</div>
              <div className="panel__tabs" onClick={this.onClickDisplayMediaPage}>Media</div>
              <div href="#" className="panel__tabs" onClick={this.onClickDisplayAdvancedPage}>Advanced</div>
          </div>

          {currentState}

          <div className="panel__button-wrapper">
            <div className="panel__button">Cancel</div>
            <div className="panel__button delete js-delete">Delete</div>
            <div className="panel__button">Save</div>
          </div>
        </div>
      </section>
    );
  }
}

class ConfigPanelBasicPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel__container">
        <div className="panel__field">
          <div className="panel__field-title">Navigation Title</div>
          <form className="panel__field-form">
            <input className="panel__field-input panel__field-input--large-text"/>
          </form>
          <div className="panel__field-subtitle">
            The name for this page, as it appears in navigations.
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-title">Page Title</div>
          <form className="panel__field-form">
            <input className="panel__field-input"/>
          </form>
          <div className="panel__field-subtitle">
            The name of this page, as it appears in the top of the browser window.
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-radio-wrapper active">
            <div className="panel__field-title">Enabled</div>
            <div className="panel__field-subtitle">
              Disabling a page is useful while it is being worked on. Disabled pages are accessible only to administrators.
            </div>
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-title">Description</div>
          <form className="panel__field-form">
            <div className="panel__field-format-bar">
              <ul className="panel__field-format-bar-list">
                <li className="panel__field-format-bar-item">&#8404;</li>
                <li className="panel__field-format-bar-item">&#8405;</li>
                <li className="panel__field-format-bar-item panel__field-format-bar-item--bold">B</li>
                <li className="panel__field-format-bar-item">/</li>
              </ul>
            </div>
            <textarea className="panel__field-textarea" placeholder="Write here..."></textarea>
          </form>
          <div className="panel__field-subtitle">
            <span className="panel__field-subtitle--bold">Optional.</span> Some templates surface this description, for instance in the header area. Furthermore, it's used if this page is indexed by a search engine.
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-title">URL Slug</div>
          <form className="panel__field-form">
            <input className="panel__field-input" placeholder="/"/>
          </form>
          <div className="panel__field-subtitle">
            The unique location slug for this page.
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-title">Password</div>
          <form className="panel__field-form">
            <input className="panel__field-input"/>
          </form>
          <div className="panel__field-subtitle">
            A password required to access this page. Note that certain contributor permissions (Administrator, Content Editor) automatically bypass this password.
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-title">Post By Email Address</div>
          <form className="panel__field-form">
            <input className="panel__field-input panel__field-input-post-by-email"/>
          </form>
          <div className="panel__field-subtitle">
            Emails sent to this address will be posted to the collections. If you need a new email address, press the refresh button on the right of this field.
          </div>
        </div>

        <div className="panel__field">
          <div className="panel__field-title">PAGE CONTROLS</div>
          <div className="panel__field-subtitle">
            Use the controls below to mark this as your homepage.
          </div>
          <div className="panel__field-button">Set As Homepage</div>
        </div>
      </div>
    );
  }

}

class ConfigPanelMediaPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel__container">
        <div className="panel__field">
          <div className="panel__field-title">Banner / Thumbnail Image</div>
          <form className="panel__field-form">
            <input className="panel__field-input"/>
          </form>
          <div className="panel__field-subtitle">
            This image is often used for header-area banners or as a thumbnail in a list.
          </div>
        </div>
      </div>
    );
  }
}

class ConfigPanelAdvancedPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel__container">
        <div className="panel__field">
          <div className="panel__field-title">Page Header Code Injection</div>
            <form className="panel__field-form">
              <textarea className="panel__field-textarea"></textarea>
            </form>
          <div className="panel__field-subtitle">
            Enter the code that will be injected onto the header for this page.
          </div>
        </div>
      </div>
    );
  }
}
