import React, { Component } from "react";

import { useForm, Controller } from 'react-hook-form'
import { connect } from "react-redux";
import { compose } from "redux";
import { SignUp } from "../actions/index"
import { Form, Select } from "react-bootstrap"



import { useSelector, useDispatch } from 'react-redux'
import CustomInput from "./CustomInput";
import * as actions from "../actions";
import { fromPairs } from "lodash";

const defaultValues = {
  select: "",
  input: ""
};

export const signUpForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm({ defaultValues });

  const OnSubmit = async (data) => {
    dispatch(await SignUp(data))
  }


  return (
    <Form onSubmit={handleSubmit(OnSubmit)}>
      <Form.Row>
        <Form.Group controlId="nokiaid">
          <Form.Label>NokiaID</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="nokiaid" defaultValue="x" {...register('nokiaid')} />
        </Form.Group>
        <Form.Group controlId="firstname">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="firstname" defaultValue="x" {...register('firstname')} />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="lastname" defaultValue="x" {...register('lastname')} />
        </Form.Group>
        <Form.Group controlId="upi">
          <Form.Label>UPI</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="upi" defaultValue="x" {...register('upi')} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control type="email" label="Enter NokiaID" required={true} name="email" defaultValue="@nokia.com" {...register('email')} />
        </Form.Group>
        <Form.Group controlId="shortId">
          <Form.Label>shortId</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="shortId" defaultValue="xx" {...register('shortId')} />
        </Form.Group>
        <Form.Group controlId="employeer">
          <Form.Label>Employeer</Form.Label>
          <Form.Control as="select" label="select employeer" name="employeer" defaultValue="" {...register('employeer')}>
            <option>Deltatel</option>
            <option>Nokia</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="upalu">
          <Form.Label>Upalu</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="upalu" defaultValue="x" {...register('upalu')} />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>CITY</Form.Label>
          <Form.Control as="select" label="select CITY" name="city" defaultValue="" {...register('city')}>
            <option>TM</option>
            <option>BU</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="level">
          <Form.Label>Level</Form.Label>
          <Form.Control as="select" label="select level" name="level" defaultValue="L1" {...register('level')}>
            <option>L0</option>
            <option>L1</option>
            <option>L2</option>
            <option>L3</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>

        <Form.Group controlId="main_team">
          <Form.Label>main_team</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={false} name="main_team" defaultValue="" {...register('main_team')} />
        </Form.Group>
        <Form.Group controlId="second_team">
          <Form.Label>second_team</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={false} name="second_team" defaultValue="" {...register('second_team')} />
        </Form.Group>
        <Form.Group controlId="third_team">
          <Form.Label>third_team</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={false} name="third_team" defaultValue="" {...register('third_team')} />
        </Form.Group>
        <Form.Group controlId="fourth_team">
          <Form.Label>fourth_team</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={false} name="fourth_team" defaultValue="" {...register('fourth_team')} />
        </Form.Group>
        <Form.Group controlId="activity">
          <Form.Label>activity</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={false} name="activity" defaultValue="" {...register('activity')} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="line_manager_firstname">
          <Form.Label>line_manager_firstname</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="line_manager_firstname" defaultValue="CRISAN, Cecilia" {...register('line_manager_firstname')} />
        </Form.Group>
        <Form.Group controlId="line_manager_lastname">
          <Form.Label>line_manager_lastname</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="line_manager_lastname" defaultValue="CRISAN, Cecilia" {...register('line_manager_lastname')} />
        </Form.Group>
        <Form.Group controlId="tpm_firstname">
          <Form.Label>tpm_firstname</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="tpm_firstname" defaultValue="CRISAN, Cecilia" {...register('tpm_firstname')} />
        </Form.Group>
        <Form.Group controlId="tpm_lastname">
          <Form.Label>tpm_firstname</Form.Label>
          <Form.Control type="text" label="Enter NokiaID" required={true} name="tpm_lastname" defaultValue="CRISAN, Cecilia" {...register('tpm_lastname')} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control type="text" label="Enter password" required={true} name="password" defaultValue="1" {...register('password')} />
        </Form.Group>
      </Form.Row>
      {/* 
          {this.props.errorMessage ? (
            <div className="alert  alert-danger">
              {this.props.errorMessage}
            </div>
          ) : null} */}
      <button type="submit" className="button">
        Sign Up
            </button>
    </Form>

  )
}

// class SignUp2 extends Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   onSubmit(formData) {

//     this.props.SignUp(formData)
//     // if (!this.props.errorMessage) {
//     //   this.props.history.push("/");
//     // }
//   }
//   render() {
//     const { handleSubmit } = this.props;
//     return (
//       <div className="row signing text-center">
//         {/* <div className="col"> */}
//         <Form onSubmit={handleSubmit(this.onSubmit)}>
//           <Form.Row>
//             {/* <Form.Col> */}
//             <fieldset>
//               <Field
//                 name="nokiaid"
//                 type="text"
//                 id="nokiaid"
//                 label="Enter NokiaID"
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>

//             <fieldset>
//               <Field
//                 name="firstname"
//                 type="text"
//                 id="firstname"
//                 label="Enter firstname"
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="lastname"
//                 type="text"
//                 id="lastname"
//                 label="Enter lastname"
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="upi"
//                 type="text"
//                 id="upi"
//                 label="Enter UPI"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="city"
//                 type="text"
//                 id="city"
//                 label="Enter city"
//                 placeholder=""
//                 required="false"
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="employeer"
//                 type="text"
//                 id="employeer"
//                 label="Enter employeer"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="shortid"
//                 type="text"
//                 id="shortid"
//                 label="Enter shortid"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="email"
//                 type="text"
//                 id="email"
//                 label="Enter email"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//           </Form.Row>
//           <Form.Row>
//             <fieldset>
//               <Field
//                 name="main_team"
//                 type="text"
//                 id="main_team"
//                 label="Enter main team (optional)"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="second_team"
//                 type="text"
//                 id="second_team"
//                 label="Enter second team (optional)"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="third_team"
//                 type="text"
//                 id="third_team"
//                 label="Enter third team (optional)"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="fourth_team"
//                 type="text"
//                 id="fourth_team"
//                 label="Enter fourth team (optional)"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="activity"
//                 type="text"
//                 id="activity"
//                 label="Enter activity"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//           </Form.Row>
//           <Form.Row>
//             <fieldset>
//               <Field
//                 name="upalu"
//                 type="text"
//                 id="upalu"
//                 label="Enter UPALU"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="new_onnet"
//                 type="text"
//                 id="new_onnet"
//                 label="Enter onnet"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="new_tel_fr"
//                 type="text"
//                 id="new_tel_fr"
//                 label="Enter phone France"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="bandeau"
//                 type="text"
//                 id="bandeau"
//                 label="Enter bandeau"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//           </Form.Row>
//           <Form.Row>
//             <fieldset>
//               <Field
//                 name="vacation_days"
//                 type="text"
//                 id="vacation_days"
//                 label="Enter vacation days"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>

//             <fieldset>
//               <Field
//                 name="start_date"
//                 type="text"
//                 id="start_date"
//                 label="Enter start date"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="level"
//                 type="text"
//                 id="level"
//                 label="Enter level"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="marca"
//                 type="text"
//                 id="marca"
//                 label="Enter marca"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//           </Form.Row>
//           <Form.Row>
//             <fieldset>
//               <Field
//                 name="line_manager_firstname"
//                 type="text"
//                 id="line_manager_firstname"
//                 label="Enter line manager firstname"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="line_manager_lastname"
//                 type="text"
//                 id="line_manager_lastname"
//                 label="Enter line manager lastname"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="tpm_firstname"
//                 type="text"
//                 id="tpm_firstname"
//                 label="Enter tpm firstname"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="tpm_lastname"
//                 type="text"
//                 id="tpm_lastname"
//                 label="Enter tpm lastname"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//           </Form.Row>
//           <Form.Row>
//             <fieldset>
//               <Field
//                 name="location_area"
//                 type="text"
//                 id="location_area"
//                 label="Enter location area"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="location_number"
//                 type="text"
//                 id="location_number"
//                 label="Enter location number"
//                 placeholder=""
//                 component={CustomInput}
//               />
//             </fieldset>
//             <fieldset>
//               <Field
//                 name="password"
//                 type="password"
//                 id="password"
//                 label="Enter password"
//                 placeholder=""
//                 required={true}
//                 component={CustomInput}
//               />
//             </fieldset>
//           </Form.Row>

//           {this.props.errorMessage ? (
//             <div className="alert  alert-danger">
//               {this.props.errorMessage}
//             </div>
//           ) : null}
//           <button type="submit" className="button">
//             Sign Up
//             </button>
//         </Form>
//       </div>
//     );
//   }
// }

// function MapStateToProps(state) {
//   return {
//     errorMessage: state.auth.errorMessage
//   };
// }

// export default compose(
//   connect(
//     MapStateToProps,
//     actions
//   ),
//   reduxForm({ form: "signup" })
// )(SignUp2);
