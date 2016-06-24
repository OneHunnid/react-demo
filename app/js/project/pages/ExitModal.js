import React from 'react';

export default class ExitModal extends React.Component {
  render() {
    return (
      <div id="modalExit" className="modal-exit showtime">
        <div className="modal-exit-content">
          <div className="modal-exit-title">
            Delete Selected?
          </div>
          <div className="modal-exit-desc">
            Are you sure you wish to delete your selection? This action cannot be undone.
          </div>
        </div>
        <div id="modalCancel" className="modal-exit-button">
          Cancel
        </div>
        <div id="modalConfirm" className="modal-exit-button">
          Confirm
        </div>
      </div>
    );
  }
}
