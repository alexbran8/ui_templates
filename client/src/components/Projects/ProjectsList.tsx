import React, { useState } from "react";
import "./ProjectsList.scss"
import { withTranslation } from "react-i18next";
import "../../services/i18n";
import LanguageSelector from "../LanguageSelector";
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';
import SimpleModal from "../common/Modal"
import { useMutation, useQuery, gql } from "@apollo/client";
// import gql from 'graphql-tag';
import GenericModal from "../../designSystems/genericModal"
import { useSelector } from "react-redux";
import axios from 'axios'
import ApplicationForm from "./ApplicationForm"

import { ExportToExcel } from "../common/ExportExcel";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

import { GET_ALL } from "./queries.tsx"
import { set } from "lodash";

const DELETE_ITEM = gql`
mutation ($id: Int) {
    deleteItem (id:$id){
        success
        message
        id
      }
    }

`;

const GET_DISTINCT = gql`
query {
    getDistinctWeeks {
        week
    }
}
`;

const ADD_ITEM = gql`
mutation ($data: Project) {
    addItem (data:$data){
        success
        message
        data {
          id
          title
          type
          coordinator
          description
          requirements
          constraints
          tasks
          team_size
          training
      }
      }
    }

`;


const EDIT_ITEM = gql`
mutation ($data: Project) {
    editItem (data:$data){
        success
        message
        data {
          id
          title
          type
          coordinator
          description
          requirements
          constraints
          tasks
          team_size
          training
      }
      } 
    }
`;


const ProjectsList = () => {
  const history = useHistory();

  const user = useSelector((state) => ({ auth: state.auth }));
  const isStudent = user.auth.role === 'student' ? true : false
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [weekList, setuWeeksList] = useState([]);
  const newDate = new Date()
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showRegister, setShowRegister] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState();
  const [item, setItem] = useState([]);
  const [projects, setProjects] = useState([]);
  const [fileData, setFileData] = useState();
  const [selectedSuject, setSelectedSuject] = useState<string>('');
  const [selectedCoordinator, setSelectedCoordinator] = useState<string>('');
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [subjectList, setSubjectList] = useState([])
  const [titlesList, setTitlesList] = useState([])
  const [coordinatorList, setCoordinatorList] = useState([])
  const [operation, setOperation] = useState();
  const { data, loading, error, refetch } = useQuery(GET_ALL,  {variables:{subject:selectedSuject, coordinator: selectedCoordinator, title: selectedTitle },
    onCompleted: () => {
      setProjects(data.getAll);
      let subjects = data.getAll.map(item => { return item.subject})
      let coordinators = data.getAll.map(item => { return item.coordinator})
      let titles = data.getAll.map(item => { return item.title})
      coordinators = [...new Set(coordinators)];
      subjects = [...new Set(subjects)];
      titles = [...new Set(titles)];
      setCoordinatorList(coordinators)
      setSubjectList(subjects)
      setTitlesList(titles)
    },
    onError: (error) => { console.error("Error creating a post", error); alert("Error creating a post request " + error.message) },
  });






  const [addItemMutation] = useMutation(ADD_ITEM, {
    onCompleted: (dataRes) => {
      // update state
     console.log(dataRes)
      setProjects([...projects, dataRes.addItem.data]);
      setShowModal(false)

    },
    onError: (error) => { console.error("Error creating a post", error); alert("Error creating a post request " + error.message) },
  });

  const [deleteItemMutation] = useMutation(DELETE_ITEM, {
    onCompleted: (dataRes) => {
      // update state after item is deleted from db
      let newProjects = projects.filter(function (el) { return el.id != dataRes.deleteItem.id; });
      setProjects(newProjects)
    },
    onError: (error) => { console.error("Error creating a post", error); alert("Error creating a post request " + error.message) },
  });

  const [updateItemMutation] = useMutation(EDIT_ITEM, {
    onCompleted: (dataRes) => {
      // update state
      const newProjects = [...projects]
      let index = newProjects.findIndex((y) => y.id === item.id)

      newProjects[index] = item

      setProjects(newProjects)
      setShowModal(false)
    },
    onError: (error) => { console.error("Error creating a post", error); alert("Error creating a post request " + error.message) },
  });

  const handleModal = (selectedItem) => {
    setShowModal(!showModal)
    setSelectedItem(selectedItem)
    // operation === 'edit' || operation === 'add' ? setShowModal(!showModal) :  setShowRegister(!showRegister)
  }

  const handleRegisterModal = (selectedItem) => {
    setShowRegister(!showRegister)
    setSelectedItem(selectedItem)
  }

  const updateItem = (data) => {
    let inputData = data
    console.log({ inputData })
    setItem(inputData)
    updateItemMutation({
      variables: {
        data: inputData
      }
    }
    )
  }

  const addMoreItems = (data, index) => {
    let inputData = data
    setItem((item) => ({
      ...item, ...inputData,
      id: 0,

    }));
    console.log('add')
    // save to db
    addItemMutation({
      variables: {
        data: inputData
      }
    }
    )
  }


  const handleInputValues = (value, field, index) => {
    // console.log({value})
    // check if values are valid
    console.log('before', item)
    // if yes, add values to state
    setItem((item) => ({
      ...item,
      [field]: value,
      id: index
    }));

  }

  function getModalStyle() {
    return {
      width: '50%',
      maxWidth: '100vw',
      maxHeight: '100%',
      position: 'fixed',
      top: '50%',
      left: '25%',
      transform: 'translate(0, -50%)',
      overflowY: 'auto'
    };
  }

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'title',
      headerName: 'Project Name',
      width: 250,
      editable: false,
    },
    {
      field: 'type',
      headerName: 'Project Type ',
      width: 250,
      editable: false,
    },
    {
      field: 'description',
      headerName: 'Description',
      // type: 'integer',
      width: 200,
      editable: false,
    },
    {
      field: 'requirements',
      headerName: 'Requirements',
      // type: 'integer',
      width: 200,
      editable: false,
    },
    {
      field: 'coordinator',
      headerName: 'Cooordinator',
      // type: 'integer',
      width: 350,
      sortable: true,
      editable: false,
    },
    // make col not available for users which are not admins
    {
      field: 'Actions',
      renderCell: (cellValues) => {
        return (<>
          <Button
            variant="contained"
            color="primary"
            // hidden={isStudent}
            onClick={() => {
              history.push(`/details/${cellValues.row.id}/${cellValues.row.title}`)
            }}
          >
            View
          </Button>
          <Button
            variant="contained"
            color="primary"
            hidden={isStudent}
            onClick={(event) => {
              setOperation('edit'); setItem(cellValues.row); handleModal({ title: 'Edit Item', data: cellValues.row });
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            hidden={isStudent}
            onClick={(event) => {
              deleteItemMutation({
                variables: {
                  id: cellValues.row.id
                }
              }
              )
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            hidden={isStudent}
            onClick={(event) => {
              setOperation('application'); setItem(cellValues.row); handleRegisterModal({ title: 'application', data: cellValues.row });
            }}
          >
            {isStudent ? <>Apply</> : <>Register</>}
          </Button>
          <Button variant="contained" color="primary" hidden={isStudent} disabled={true} onClick={() => { alert("upload!") }}>Upload</Button>
          <Button variant="contained" color="primary" hidden={isStudent} disabled={true} onClick={() => { alert("upload!") }}>Applications(2)</Button>
        </>
        );
      },
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 500,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    }
  ];

  const body = (
    <div>
      <p>Please fill in the following fields:</p>
      <ApplicationForm
        handleInputValues={handleInputValues}
        item={selectedItem}
        values={item}
        operation={operation} />

    </div>
  );

  return (<div className="page-container"><h1>  {t("events.mainTitle")}
  </h1>
    <div className="filter-container">
      <>
        <Autocomplete
          id="combo-box-demo"
          options={subjectList}
          // getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onInputChange={(event, newInputValue, reason) => {
            if (reason === 'clear') {
                setSelectedSuject(''); refetch()
                return
            } else {
                setSelectedSuject(newInputValue); refetch()
            }
        }}
          className={classes.textField}
          renderInput={(params) => <TextField {...params} label="select subject" variant="outlined" />}
        />
         <Autocomplete
          id="combo-box-demo"
          options={coordinatorList}
          // getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onInputChange={(event, newInputValue, reason) => {
            if (reason === 'clear') {
                setSelectedCoordinator(''); refetch()
                return
            } else {
                setSelectedCoordinator(newInputValue); refetch()
            }
        }}
          className={classes.textField}
          renderInput={(params) => <TextField {...params} label="select coordinator" variant="outlined" />}
        />
                 <Autocomplete
          id="combo-box-demo"
          options={titlesList}
          // getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onInputChange={(event, newInputValue, reason) => {
            if (reason === 'clear') {
                setSelectedTitle(''); refetch()
                return
            } else {
              setSelectedTitle(newInputValue); refetch()
            }
        }}
          className={classes.textField}
          renderInput={(params) => <TextField {...params} label="select title" variant="outlined" />}
        />
      {/* </>
      <>
        <Autocomplete
          id="combo-box-demo"
          options={weekList}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          className={classes.textField}
          onChange={(e, v) => setItv(v)}
          renderInput={(params) => <TextField {...params} label="select event" variant="outlined" />}
        />
      </>
      <>
        <TextField
          id="date"
          type="date"
          disabled={true}
          defaultValue={newDate.getDate()}
          variant="outlined"
          className={classes.textField}
          onChange={(e, v) => { setDate(e.target.value); console.log(e.target.value); refetch() }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <>
          <Autocomplete
            id="combo-box-demo"
            options={[{ status: 'null', labeL: "" }, { status: 'on going' }, { status: 'finished' }, { status: 'planned' }, { status: 'proposed' }]}
            getOptionLabel={(option) => option.status}
            style={{ width: 300 }}
            disabled={true}
            className={classes.textField}
            onChange={(e, v) => { setStatus(v.status); refetch() }}
            renderInput={(params) => <TextField {...params} label="select status" variant="outlined" />}
          />
        </>
        <>
          <Autocomplete
            id="combo-box-demo"
            options={weekList}
            disabled={true}
            getOptionLabel={(option) => option}
            style={{ width: 300 }}
            className={classes.textField}
            onChange={(e, v) => setStite(v)}
            renderInput={(params) => <TextField {...params} label="select site" variant="outlined" />}
          />
        </>
        <>
          <Autocomplete
            id="combo-box-demo"
            options={weekList}
            disabled={true}
            getOptionLabel={(option) => option}
            style={{ width: 300 }}
            className={classes.textField}
            onChange={(e, v) => { setResponsible(v.responsible_entity); refetch() }}
            renderInput={(params) => <TextField {...params} label="select responsible" variant="outlined" />}
          />
        </> */}
      </>
    </div>
    {/* <div className="report-container">
      <h5>Metrics about events</h5>
    </div> */}

    <div className="button-container">
      <ExportToExcel
        apiData={[{ 
        "title" :'',
        "description": '',
        "requirements":"",
        "department":"",
        "coordinator":"",
        "details":"",
        "type": ''
       }]}
        fileName='upload_template'
        operationName='Get template'
      />
{/* TODO: make it visible only for admins  */}
      <Button variant="contained" color="primary" hidden={isStudent} onClick={() => { setOperation('add'); handleModal({ title: 'Add New Item', }) }}>Add new project</Button>
      {showModal ? (
        <SimpleModal
          //formValidator={formCheck}
          // setShowModalOpen={showModal}
          item={selectedItem}
          handleModal={handleModal}
          handleClose={handleModal}
          saveFunction={operation === 'add' ? addMoreItems : updateItem}
          handleInputValues={handleInputValues}
          operation={operation}
        />
      ) : null}
      {showRegister ? (
        <GenericModal
          getModalStyle={getModalStyle}
          open={true}
          title={`Apply for ${item.title} ${item.type} (id:${item.id})`}
          handleModal={handleRegisterModal}
          handleClose={handleRegisterModal}
          body={body}
          saveFunction={operation === 'add' ? addMoreItems : updateItem}
          handleInputValues={handleInputValues}
          operation={operation}
        />
      ) : null}
      <Button variant="contained" color="primary" disabled={true} onClick={() => { alert("upload!") }}>Delete</Button>
    </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={projects ? projects : []}
        columns={columns}
        // pageSize={5}
        disableColumnFilter
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  </div>)

}

export default ProjectsList