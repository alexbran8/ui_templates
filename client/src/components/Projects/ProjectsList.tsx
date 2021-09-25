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
        projectName
        year
    }
  }
`;

const DELETE_ITEMS = gql`
mutation ($data: [idArray]) {
    deleteItems (data:$data){
        success
        message
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



const ProjectsList = () => {
  const user = useSelector((state) => ({ auth: state.auth }));
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [weekList, setuWeeksList] = useState([]);
  const newDate = new Date()
  const [showModal, setShowModal] = React.useState(false);
  const {data, loading, error } = useQuery(GET_ALL, {
    onCompleted: () => {
        console.log(data)
    }
});


  const handleModal = () => {
    setShowModal(!showModal)
  }
  

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'projectName',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'year',
      headerName: 'Year',
      type: 'integer',
      width: 110,
      editable: true,
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
              handleModal();
            }}
          >
            Edit
          </Button>
            <Button
            variant="contained"
            color="secondary"
            onClick={(event) => {
              handleModal();
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

  const rows = [
    { id: 1, projectName: 'TechFlight', firstName: 'Jon', lastName: 'Jon', univeristy: '', year: 2021, fieldofStudy:'', comments: 35 },
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
      <Button variant="contained" color="primary" onClick={() => { handleModal() }}>Add</Button>
      {showModal ? (
      <SimpleModal
        //formValidator={formCheck}
        title={"test"}
        handleModal={handleModal}
        handleClose={handleModal}
        />
      ):null}
      <Button variant="contained" color="primary" onClick={() => { alert("upload!") }}>Delete</Button>
    </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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