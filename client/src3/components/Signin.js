import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { baseLocation } from "../config";

import CustomInput from "./CustomInput";
import * as actions from "../actions";

import Alert from "react-bootstrap/Alert";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    console.log(formData)
    await this.props.SignIn(formData);
    
    if (!this.props.errorMessage) {
      this.props.history.push(`/npt/`);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row signing text-center">
        {!this.props.isAuth ? (
          <div className="col">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  label="Enter your email/nokiaID"
                  placeholder="firstname.lastname@nokia.com / 123456"
                  component={CustomInput}
                />
              </fieldset>
              <fieldset>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Enter your password"
                  placeholder="default password may be one ==> please change it as soon as possible"
                  component={CustomInput}
                />
              </fieldset>
              <Alert variant="secondary">
                <Alert.Heading>
                  Hey, nice to see you, this alert needs your attention:
                </Alert.Heading>
                <p>
                  Use <b>GOOGLE CHROME</b> for this app to work properly.
                </p>
                <hr />
                <p className="mb-0">For support please contact alex@NOKIA.</p>
              </Alert>
              {this.props.errorMessage ? (
                <div className="alert  alert-danger">
                  {this.props.errorMessage}
                </div>
              ) : null}
              <button type="submit" className="button">
                Sign In
              </button>
            </form>
          </div>
        ) : (
          this.props.history.push("/npt/schedule")
        )}
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
    isAuth: state.auth.isAuthenticated,
  };
}

export default compose(
  connect(MapStateToProps, actions),
  reduxForm({ form: "singin" })
)(SignIn);
