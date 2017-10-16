import React from 'react'
import 'font-awesome/css/font-awesome.css'

import { Modal } from '../src'

export class SimpleModal extends React.Component {
  state = {
    showModal: false,
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  buttonClick = () => {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div>
        <h1>Main Content</h1>
        <button type="button" onClick={this.buttonClick}>
          Show Modal
        </button>
        {this.state.showModal && (
          <Modal
            handleClose={this.handleClose}
            closeIcon={<i className="fa fa-remove fa-2x" />}
            heading="My Modal"
          >
            <h2>The contents of the modal go here.</h2>
            <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Cat in the Hat</li>
            </ul>
          </Modal>
        )}
      </div>
    )
  }
}
