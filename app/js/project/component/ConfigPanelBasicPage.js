import React from 'React';

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

export default ConfigPanelBasicPage;
