import React, { useState, useEffect } from 'react';
import Scheduler, { SchedulerData, ViewTypes } from 'react-big-scheduler';
import Axios from "axios";
//include react-big-scheduler/lib/css/style.css for styles, link it in html or import it here
import 'react-big-scheduler/lib/css/style.css';
import withDragDropContext from './withDnDContext';

import { config } from "../config";

// import { resources, events } from 'pages/calendar/data';

let schedulerData = new SchedulerData('2021-05-20', ViewTypes.Week);
schedulerData.localeMoment.locale('en');

const Calendar = () => {
const [viewModal2, setViewModal2] = useState(schedulerData);
const [viewModal, setViewModal] = useState(schedulerData);
const [events, setEvents] = useState([])
// eslint-disable-next-line no-unused-vars
const [renderCounter, setRenderCounter] = useState(0);
var moment = require("moment");

useEffect( () => {
    Axios.post(`${ config.baseURL + config.baseLOCATION }/schedule/get`, params)
    .then(res => {
        const fmtEvents = res.data.schedule.reduce((prev, entry) => {
            prev.push({
              id: entry.id,
              start: moment(entry.start).format("YYYY-MM-DD h:mm:ss"),
              end: moment(entry.end).format("YYYY-MM-DD h:mm:ss"),
              resourceId: entry.nokiaid,
              title: entry.title,
              bgColor: entry.bgColor,
              type: entry.type,
              replacement: entry.replacement,
            });
            return prev;
          }, []);
          viewModal2.setEvents(fmtEvents);
          setEvents(fmtEvents)
        
    }
    )
    Axios.post(`${ config.baseURL + config.baseLOCATION }/usersPrivate/get/filter`, data)
    .then(res => {
        const fmtUsers = res.data.filterUsers.reduce((prev, entry) => {
                  prev.push({
                    id: entry.nokiaid,
                    name: `${entry.lastname}, ${entry.firstname}`,
                  });
                  return prev;
                }, []);
                schedulerData.setResources(fmtUsers);
                
    }
    
    )
},[]);

const onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

const prevClick = schedulerData => {
  console.log(viewModal2)
  viewModal2.prev();
schedulerData.setEvents([events]);
setViewModal2(schedulerData);
setRenderCounter(o => ++o);
console.log(viewModal2)
console.log(viewModal)
};

let params = { 'admin': true, 'operational': false }

let data = {
    line_manager: "",
    team: "",
    coordinator: "",
    employeers: "",
    resources: "",
    admin: true,
    operational: false,
  }

  
return (

<Scheduler
schedulerData={viewModal2}
prevClick={prevClick}
onViewChange={onViewChange}
/>

);
};

export default withDragDropContext(Calendar);