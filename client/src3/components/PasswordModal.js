import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Axios from 'axios'
import { config } from '../config'

class PasswordModal extends Component {
  constructor(props) {
    super(props)
    this.state = { password: '', show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show })
  }
  sendChanges(password) {
    const data = {}
    data.password = password
    data.nokiaid = this.props.nokiaid
    const sendData = Axios.post(`${ config.baseURL + config.baseLOCATION }/usersPrivate/edit`, data)
    if (!sendData) {
      alert('failed')
    }
    window.location.reload()
  }
  render() {
    return (
      <>
        <Modal show={true} onHide={() => this.props.close()}>
          <Modal.Header closeButton>Change password</Modal.Header>
          <Modal.Body>
            <label htmlFor="password">New password</label>
            <div className="input-group mb-3">
              <input
                type={this.state.show ? 'text' : 'password'}
                className="form-control"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <div className="input-group-append">
                <span
                  onClick={() => this.toggleShow()}
                  className="input-group-text passwordSpan"
                >
                  {this.state.show ? "Don't show" : 'Show'}
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-danger float-right"
              onClick={() => this.props.close()}
            >
              Close
            </button>
            <button
              className="btn btn-primary float-right mr-1"
              onClick={() => this.sendChanges(this.state.password)}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default PasswordModal
