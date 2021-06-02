import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { setTask } from '../redux/actions/tasks/setTask'
import axios from 'axios'
import { config } from "../config";;

export const OnEditModal = props => {
    const tasksReducer = useSelector(state => state.tasksReducer);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const modalTask = { ...tasksReducer.tasks[props.index] };
    const [resources,setResources] = useState([]);

    useEffect( () => {
        axios.get(config.baseURL + config.baseLOCATION + '/resources')
            .then(res =>{
                setResources(res.data);
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    },[]);

    
    
    const onSubmit = (data) => {
        dispatch(setTask(props.index, modalTask.id, data));        
        props.onHide();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {modalTask.projectName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formTaskName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="projectName" defaultValue={modalTask.projectName} ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formProjectName">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text" name="task" defaultValue={modalTask.task} ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formProjectName">
                        <Form.Label>Resource Name</Form.Label>
                        {console.log(resources)}
                        <Form.Control type="text" name="resourceName" as="select" onChange={(e) => {console.log(e.target.value) }} defaultValue={modalTask.resourceName} ref={register}>
                            {
                                
                                resources.map((resource, index) => {
                                    return <option key={index} value={resource.shortid}>{resource.lastname + ', ' + resource.firstname}</option>
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formReviewDate">
                        <Form.Label>TT</Form.Label>
                        <Form.Control type="text" name="tt" defaultValue={modalTask.tt} ref={register} />
                    </Form.Group>
                    <Form.Group controlId="formResourceName">
                        <Form.Label>Phase</Form.Label>
                        <Form.Control type="text" name="phase" defaultValue={modalTask.phase} ref={register} />
                    </Form.Group>

                    <Form.Group controlId="formResourceName">
                        <Form.Label>Start</Form.Label>
                        <Form.Control type="date" name="start" defaultValue={modalTask.start} ref={register} />
                    </Form.Group>
                    <Form.Group controlId="formResourceName">
                        <Form.Label>END</Form.Label>
                        <Form.Control type="date" name="end" defaultValue={modalTask.end} ref={register} />
                    </Form.Group>
                    <Form.Group controlId="formResourceName">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" defaultValue={modalTask.status} ref={register} />
                    </Form.Group>
                    <Form.Group controlId="formCompeteneceLevel">
                        <Form.Label>Site</Form.Label>
                        <Form.Control type="text" name="site" defaultValue={modalTask.site} ref={register} />
                    </Form.Group>
                    <Button type="submit">Save</Button>
                </Form>
            </Modal.Body>
        </Modal >
    )
}