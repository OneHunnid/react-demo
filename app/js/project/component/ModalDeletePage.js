import React from 'react';

export default class ModalDeletePage extends React.Compnent {
  constructor(props) {
    super(props)
  }

  return() {
    render(
      <div id="modalExit" class="modal-exit">
        <div class="modal-exit-content">
          <div class="modal-exit-title">
            Delete Selected?
          </div>
          <div class="modal-exit-desc">
            Are you sure you wish to delete your selection? This action cannot be undone.
          </div>
        </div>
        <div id="modalCancel" class="modal-exit-button">
          Cancel
        </div>
        <div id="modalConfirm" class="modal-exit-button">
          Confirm
        </div>
      </div>
    )
  }
}
