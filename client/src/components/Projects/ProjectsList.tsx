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
import { useSelector } from "react-redux";

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

const GET_ALL = gql`
  query  { 
    getAll  {
        id
        title
        type
        coordinator
        description
        requirements
    }
  }
`;

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
      }
    }

`;


const EDIT_ITEM = gql`
mutation ($data: Project) {
    editItem (data:$data){
        success
        message
      }
    }
`;


const ProjectsList = () => {
  const user = useSelector((state) => ({ auth: state.auth }));
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [weekList, setuWeeksList] = useState([]);
  const newDate = new Date()
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [item, setItem] = useState([]);
  const [projects, setProjects] = useState([]);
  const [operation, setOperation] = useState();
  const { data, loading, error } = useQuery(GET_ALL, {
    onCompleted: () => {
      setProjects(data.getAll);
      // console.log(data.getAll)
    }
  });


  const [addItemMutation] = useMutation(ADD_ITEM, {
    onCompleted: (dataRes) => {
      // update state
      const newProjects = [...projects]
      newProjects.forEach((item) => {
        item.id = item.id + 1;
      });
      setProjects(newProjects => [...newProjects, item]);
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
  }

  const updateItem = () => {
    console.log({ item })
    // save to db
    delete item["__typename"]
    updateItemMutation({
      variables: {
        data: item
      }
    }
    )
  }

  const addMoreItems = () => {
    console.log({ item })
    // save to db
    addItemMutation({
      variables: {
        data: item
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
      width: 250,
      editable: false,
    },
    {
      field: 'requirements',
      headerName: 'Requirements',
      // type: 'integer',
      width: 350,
      editable: false,
    },
    {
      field: 'coordinator',
      headerName: 'Cooordinator',
      // type: 'integer',
      width: 500,
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
            onClick={(event) => {
              setOperation('edit'); setItem(cellValues.row); handleModal({ title: 'Edit Item', data: cellValues.row });
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
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
        </>
        );
      },
      headerName: 'Actions',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];


  return (<div className="page-container"><h1>  {t("events.mainTitle")}
  </h1>
    <div className="filter-container">
      <>
        <Autocomplete
          id="combo-box-demo"
          options={weekList}
          disabled={true}
          getOptionLabel={(option) => option.week}
          style={{ width: 300 }}
          onChange={(e, v) => { setWeek(v); refetch() }}
          className={classes.textField}
          renderInput={(params) => <TextField {...params} label="select year" variant="outlined" />}
        />
      </>
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
        </>
      </>
    </div>
    <div className="report-container">
      <h5>Metrics about events</h5>
    </div>

    <div className="button-container">
      <Button variant="contained" color="primary" onClick={() => { alert("upload!") }}>Upload</Button>
      <Button variant="contained" color="primary" onClick={() => { setOperation('add'); handleModal({ title: 'Add New Item', }) }}>Add</Button>
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
      <Button variant="contained" color="primary" onClick={() => { alert("upload!") }}>Delete</Button>
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