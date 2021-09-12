import React, { useState } from "react";
import "./EventsAttendance.scss"
import { withTranslation } from "react-i18next";
import "../../services/i18n";
import LanguageSelector from "../LanguageSelector";
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';

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



const EventsAttendance = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [weekList, setuWeeksList] = useState([]);
  const newDate = new Date()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'event',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];

  const rows = [
    { id: 1, event: 'TechFlight', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (<div className="page-container"><h1>  {t("events.mainTitle")}
  </h1>
    <div className="filter-container">
      <>
        <Autocomplete
          id="combo-box-demo"
          options={weekList}
          getOptionLabel={(option) => option.week}
          style={{ width: 300 }}
          onChange={(e, v) => { setWeek(v); refetch() }}
          className={classes.textField}
          renderInput={(params) => <TextField {...params} label="select week" variant="outlined" />}
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
          renderInput={(params) => <TextField {...params} label="select ITV" variant="outlined" />}
        />
      </>
      <>
        <TextField
          id="date"
          type="date"
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
            options={[{ status: 'null', labeL: "" }, { status: 'Problème résolu' }, { status: 'Problème résolu avec réserve' }, { status: 'Problème pas identifié' }, { status: 'Problème identifié' }]}
            getOptionLabel={(option) => option.status}
            style={{ width: 300 }}
            className={classes.textField}
            onChange={(e, v) => { setStatus(v.status); refetch() }}
            renderInput={(params) => <TextField {...params} label="select status" variant="outlined" />}
          />
        </>
        <>
          <Autocomplete
            id="combo-box-demo"
            options={weekList}
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

    </div>
    <div className="button-container">
      <Button variant="contained" color="primary" onClick={() => { alert("upload!") }}>Upload</Button>
      <Button variant="contained" color="primary" onClick={() => { alert("upload!") }}>Add</Button>
      <Button variant="contained" color="primary" onClick={() => { alert("upload!") }}>Delete</Button>
    </div>
    <div style={{ height: 600, width: '100%' }}>
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

export default EventsAttendance