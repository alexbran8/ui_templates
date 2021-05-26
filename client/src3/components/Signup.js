import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { useForm } from 'react-hook-form'
import { connect } from "react-redux";
import { compose } from "redux";
import { SignUp } from "../actions/index"
import { Form } from "react-bootstrap"


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from 'react-redux'
import CustomInput from "./CustomInput";
import * as actions from "../actions";
import { fromPairs } from "lodash";

export const signUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    dispatch(SignUp(data));
  }


  return (
    <div>SignUp Form
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formTaskName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="projectName" defaultValue="test" ref={register} />
        </Form.Group>


        <button type="submit" className="button">
          Sign Up
            </button>

      </Form>
    </div>

  )
}

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(formData) {

    this.props.SignUp(formData)
    // if (!this.props.errorMessage) {
    //   this.props.history.push("/");
    // }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row signing text-center">
        {/* <div className="col"> */}
        <Form onSubmit={handleSubmit(this.onSubmit)}>
          <Form.Row>
            {/* <Form.Col> */}
            <fieldset>
              <Field
                name="nokiaid"
                type="text"
                id="nokiaid"
                label="Enter NokiaID"
                required={true}
                component={CustomInput}
              />
            </fieldset>

            <fieldset>
              <Field
                name="firstname"
                type="text"
                id="firstname"
                label="Enter firstname"
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="lastname"
                type="text"
                id="lastname"
                label="Enter lastname"
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="upi"
                type="text"
                id="upi"
                label="Enter UPI"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="city"
                type="text"
                id="city"
                label="Enter city"
                placeholder=""
                required="false"
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="employeer"
                type="text"
                id="employeer"
                label="Enter employeer"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="shortid"
                type="text"
                id="shortid"
                label="Enter shortid"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="email"
                type="text"
                id="email"
                label="Enter email"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Field
                name="main_team"
                type="text"
                id="main_team"
                label="Enter main team (optional)"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="second_team"
                type="text"
                id="second_team"
                label="Enter second team (optional)"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="third_team"
                type="text"
                id="third_team"
                label="Enter third team (optional)"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="fourth_team"
                type="text"
                id="fourth_team"
                label="Enter fourth team (optional)"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="activity"
                type="text"
                id="activity"
                label="Enter activity"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Field
                name="upalu"
                type="text"
                id="upalu"
                label="Enter UPALU"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="new_onnet"
                type="text"
                id="new_onnet"
                label="Enter onnet"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="new_tel_fr"
                type="text"
                id="new_tel_fr"
                label="Enter phone France"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="bandeau"
                type="text"
                id="bandeau"
                label="Enter bandeau"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Field
                name="vacation_days"
                type="text"
                id="vacation_days"
                label="Enter vacation days"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>

            <fieldset>
              <Field
                name="start_date"
                type="text"
                id="start_date"
                label="Enter start date"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="level"
                type="text"
                id="level"
                label="Enter level"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="marca"
                type="text"
                id="marca"
                label="Enter marca"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Field
                name="line_manager_firstname"
                type="text"
                id="line_manager_firstname"
                label="Enter line manager firstname"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="line_manager_lastname"
                type="text"
                id="line_manager_lastname"
                label="Enter line manager lastname"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="tpm_firstname"
                type="text"
                id="tpm_firstname"
                label="Enter tpm firstname"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="tpm_lastname"
                type="text"
                id="tpm_lastname"
                label="Enter tpm lastname"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
          </Form.Row>
          <Form.Row>
            <fieldset>
              <Field
                name="location_area"
                type="text"
                id="location_area"
                label="Enter location area"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="location_number"
                type="text"
                id="location_number"
                label="Enter location number"
                placeholder=""
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter password"
                placeholder=""
                required={true}
                component={CustomInput}
              />
            </fieldset>
          </Form.Row>

          {this.props.errorMessage ? (
            <div className="alert  alert-danger">
              {this.props.errorMessage}
            </div>
          ) : null}
          <button type="submit" className="button">
            Sign Up
            </button>
        </Form>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(
    MapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(SignUp2);
