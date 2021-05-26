import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { enableButton } from '../redux/actions/projects/enableButton'
import { setDefaultValue } from '../redux/actions/projects/setDefaultValue'
import { setTaskCompetenceLevel } from '../redux/actions/projects/setTaskCompetenceLevel'

const LevelOfCompetence = (props) => {
	const idAddition =
		typeof props.projectName === "undefined"
			? props.taskName
			: props.projectName;

	const dispatch = useDispatch();

	return (
		<Form>
			<Form.Group>
				<Form.Check
					type="radio"
					defaultChecked={props.defaultValueRadioButton === 1 && props.taskName ? true : false}
					label="L1 - Follow - I don't know how to perform it"
					name="formHorizontalRadios"
					id={"L1-" + idAddition}
					onChange={(event) => {
						if (props.projectName) {
							dispatch(enableButton(props.projectIndex));
							dispatch(setDefaultValue(props.projectIndex, event.target.id.substring(0, 2)));
						} else {
							dispatch(setTaskCompetenceLevel(props.projectIndex, props.taskIndex, event.target.id.substring(0, 2)));
						}
					}}
				/>
				<Form.Check
					type="radio"
					defaultChecked={props.defaultValueRadioButton === 2 && props.taskName ? true : false}
					label="L2 - Assist - Have seen others performing it"
					name="formHorizontalRadios"
					id={"L2-" + idAddition}
					onChange={(event) => {
						if (props.projectName) {
							dispatch(enableButton(props.projectIndex));
							dispatch(setDefaultValue(props.projectIndex, event.target.id.substring(0, 2)));
						} else {
							dispatch(setTaskCompetenceLevel(props.projectIndex, props.taskIndex, event.target.id.substring(0, 2)));
						}
					}}
				/>
				<Form.Check
					type="radio"
					defaultChecked={props.defaultValueRadioButton === 3 && props.taskName ? true : false}
					label="L3 - Apply - Can apply it, but with support"
					name="formHorizontalRadios"
					id={"L3-" + idAddition}
					onChange={(event) => {
						if (props.projectName) {
							dispatch(enableButton(props.projectIndex));
							dispatch(setDefaultValue(props.projectIndex, event.target.id.substring(0, 2)));
						} else {
							dispatch(setTaskCompetenceLevel(props.projectIndex, props.taskIndex, event.target.id.substring(0, 2)));
						}
					}}
				/>
				<Form.Check
					type="radio"
					defaultChecked={props.defaultValueRadioButton === 4 && props.taskName ? true : false}
					label="L4 - Enable - Can perform w/o support"
					name="formHorizontalRadios"
					id={"L4-" + idAddition}
					onChange={(event) => {
						if (props.projectName) {
							dispatch(enableButton(props.projectIndex));
							dispatch(setDefaultValue(props.projectIndex, event.target.id.substring(0, 2)));
						} else {
							dispatch(setTaskCompetenceLevel(props.projectIndex, props.taskIndex, event.target.id.substring(0, 2)));
						}
					}}
				/>
				<Form.Check
					type="radio"
					defaultChecked={props.defaultValueRadioButton === 5 && props.taskName ? true : false}
					label="L5 - Ensure/Advise - Can teach others"
					name="formHorizontalRadios"
					id={"L5-" + idAddition}
					onChange={(event) => {
						if (props.projectName) {
							dispatch(enableButton(props.projectIndex));
							dispatch(setDefaultValue(props.projectIndex, event.target.id));
						} else {
							dispatch(setTaskCompetenceLevel(props.projectIndex, props.taskIndex, event.target.id.substring(0, 2)));
						}
					}}
				/>
			</Form.Group>
		</Form>
	);
};

export default LevelOfCompetence;
