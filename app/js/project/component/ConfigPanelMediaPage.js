import React from 'React';

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

export default ConfigPanelMediaPage;
