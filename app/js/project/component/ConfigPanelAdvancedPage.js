import React from 'React';

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

export default ConfigPanelAdvancedPage;
