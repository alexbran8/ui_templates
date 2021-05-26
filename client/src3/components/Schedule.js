import React, { Component } from "react";
import Scheduler, { SchedulerData, ViewTypes } from "react-big-scheduler";
// import Scheduler, { SchedulerData, ViewTypes } from "../../schedulerSrc/index";
// import DragSource from "./DragAndDrop";
import "react-big-scheduler/lib/css/style.css";
import Axios from "axios";
import { connect } from "react-redux";
import DetailModal from "./DetailModal";
import { baseLOCATION, config } from "../config";;

import * as actions from "../actions";

import CustomModal from "./Modal";
import Legend from "./Legend";
import moment from "moment";

import withDragDropContext from "./withDnDContext";

class Schedule extends Component {
  constructor(props) {
    super(props);
    let schedulerData = new SchedulerData(
      new Date(),
      ViewTypes.Week,
      false,
      false,
      { checkConflict: false }
    );
    schedulerData.setResources(this.props.resources)
    schedulerData.setEvents(this.props.events)
    this.state = {
      viewModel:  schedulerData,
      event: undefined,
      editEvent: undefined,
      legend: false,
      types: undefined,
      slot: undefined,
    };
  }
  async getType() {
    const types = await Axios.get(`${ config.baseURL + baseLOCATION }/types`);
    if (types) this.setState({ types: types.data.data });
  }
  componentDidMount = () => {
    this.getType();
  }

  toggleLegend = () => {
    this.setState({ legend: !this.state.legend });
  }

  reset = () =>  {
    this.setState({ event: undefined });
  }

  resetEdit = () =>  {
    this.setState({ editEvent: undefined });
  }

  resetSlot = () =>  {
    this.setState({ slot: undefined });
  }

  async sendData(data) {
    data.status =
      localStorage.getItem("permisiuni") !== undefined
        ? localStorage.getItem("permisiuni")
        : "L1";
    console.log(data.status);
    if (
      data.bgColor === undefined ||
      data.bgColor === null ||
      data.bgColor === ""
    ) {
      data.bgColor = "#5DB5F4";
    }
    if (data.type === undefined || data.type === null || data.type === "") {
      data.type = "Null";
    }
    
    const response = await Axios.post(`${ config.baseURL + baseLOCATION }/schedule/add`, data);

    if (!response) {
      alert("failed");
    }
    console.log(data);
    if (data.id === undefined) {
      data.id = 0;
      console.log("aici");
    }
    let data2 = this.state.viewModel;
    console.log('1',data2)
    this.state.viewModel.addEvent(data);
//     let newFreshId = 0;
//     data2.renderData.forEach((item) => {
//       newFreshId = item.id + 1000;
//       console.log(item)
// });
    console.log('2',data2)
    this.reset();
    this.getType();
    console.log('here');
    
    console.log(3,this.state.viewModel);
    this.setState(prevState => ({
      data2: [...prevState.viewModel.events, data2]
    }));
    console.log(4,this.state.viewModel);
    // state update
    // this.setState({
    //   viewModel: data2,
    // });
    // console.log(this.state.viewModel);
    window.location.reload();

    
  }
  async updateData(data) {
    if (
      data.bgColor === undefined ||
      data.bgColor === null ||
      data.bgColor === ""
    ) {
      data.bgColor = "#5DB5F4";
    }
    if (data.type === undefined || data.type === null || data.type === "") {
      data.type = "Null";
    }
    const response = await Axios.post(
      `${ config.baseURL + baseLOCATION }/schedule/update/${data.id}`,
      data
    );
    if (!response) {
      alert("failed");
    }
    console.log(data)
    this.setState({ viewModel: data.schedulerData });
    this.resetEdit();
    this.getType();
    // update state
    window.location.reload();
  }

  render() {
    this.state.viewModel.setResources(this.props.resources); //DemoData.resources
    this.state.viewModel.setEvents(this.props.events); //DemoData.events
    const {viewModel} = this.state;
    return (
      <div>
        {this.state.event || this.state.editEvent ? (
          <CustomModal
            resources={this.props.resources}
            reset={() => this.reset()}
            resetEdit={() => this.resetEdit()}
            event={this.state.event}
            editEvent={this.state.editEvent}
            sendData={(e) => this.sendData(e, viewModel)}
            updateData={(e) => this.updateData(e)}
            types={this.state.types}
          />
        ) : null}
        {this.state.legend ? <Legend /> : null}
        {this.state.slot ? (
          <DetailModal
            level={this.props.role}
            resetSlot={() => this.resetSlot()}
            id={this.state.slot}
          />
        ) : null}
        <Scheduler
          schedulerData={viewModel}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={this.onSelectDate}
          onViewChange={this.onViewChange}
          eventItemClick={this.eventClicked}
          viewEventClick={this.edit}
          viewEventText="Edit"
          viewEvent2Text={this.props.role === "L3" ? "Delete" : null}
          viewEvent2Click={this.props.role === "L3" ? this.delete : null}
          updateEventStart={this.updateEventStart}
          updateEventEnd={this.updateEventEnd}
          moveEvent={this.props.role === "L3" ? this.moveEvent : null}
          newEvent={this.newEvent}
          rightCustomHeader={this.rightCustomHeader}
          conflictOccurred={this.conflictOccurred}
          slotClickedFunc={this.slotClickedFunc}
        />
      </div>
    );
  }
  slotClickedFunc = (schedulerData, slot) => {
    this.setState({ slot: slot.slotId });
  };

  conflictOccurred = (
    schedulerData,
    action,
    event,
    type,
    slotId,
    slotName,
    start,
    end
  ) => {
    let conflictEvent = {
      id: event.id,
      nokiaid: slotId,
      start: start,
      end: end,
      type: event.type,
      replacement: event.replacement,
      status: event.status,
    };
    console.log(conflictEvent);
    if (
      window.confirm(`Conflict occured at event: ${event.title}, do you wish to continue?
    `)
    )
      if (action === "New") {
        this.setState({ event: conflictEvent });
        window.alert(
          "if bug, error after confirmation; event will be processed, just refresh; bug to be fixed..."
        );
      } else {
        console.log(conflictEvent);
        console.log(SchedulerData);
        console.log(event);
        Axios.post(
          `${ config.baseURL + baseLOCATION  }/schedule/update/${event.resourceId}`,
          conflictEvent
        );
      }

    if (action !== "New") window.location.reload();
  };

  rightCustomHeader = (
    <div>
      <button
        className="btn btn-info text-white mr-1"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
      <button
        className="btn btn-primary text-white"
        onClick={() => this.toggleLegend()}
      >
        Legend
      </button>
    </div>
  );

  prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  onViewChange = (schedulerData, view) => {
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

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(
      `You clicked event: ${event.title} with ${
        event.replacement ? event.replacement : `no one`
      } as replacement.`
    );
  };

  //  TODO: add first name and last name in datbase, datediff (newEvent)
  edit = (schedulerData, event) => {
    if (this.props.role === "L3") {
      let editEvent = {
        id: event.id,
        schedulerData: schedulerData,
        nokiaid: event.resourceId,
        title: event.title,
        type: event.type,
        replacement: event.replacement,
        start: event.start,
        end: event.end,
        createdBy: event.createdBy,
        status: event.status,
      };
      this.setState({ editEvent });
      
      console.log(event);
    } else {
      return;
    }
  };

  // check how to add event owner
  delete = (schedulerData, event) => {
    if (this.props.role === "L3") {
      if (
        window.confirm(
          `Are you sure you want to delete: ${event.title}  assigned to ${event.name} with ${event.replacement} as replacement?`
        )
      )
        schedulerData.removeEvent(event);
        Axios.delete(`${ config.baseURL + baseLOCATION }/schedule/delete/${event.id}`, event);
        this.setState({
          viewModel: schedulerData,
        });
    } else {
      return;
    }
  };

  // TODO: here to add days, firstname, lastname
  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    let newEvent = {
      schedulerData: schedulerData,
      id: 0,
      start: start,
      end: end,
      nokiaid: slotId,
      createdBy: this.props.name,
      status: this.props.role,
      fullname: slotName,
      dayDiff: moment(end).diff(start, "days") + 1,
      // bgColor: "purple"
    };
    // let newFreshId = 0;
    // schedulerData.events.forEach((item) => {
    //         newFreshId = item.id + 1;
    // });
  //   this.setState({
  //     viewModel: schedulerData
  // })
  //   let newEvent = {
  //     schedulerData: schedulerData,
  //     id: newFreshId,
  //     title: 'Hotline',
  //     start: start,
  //     nokiaid: slotId,
  //     end: end,
  //     repalcement: "",
  //     fullname: slotName,
  //     createdBy: this.props.name,
  //     type: 'Hotline',
  //     status:this.props.role,
  //     dayDiff: moment(end).diff(start, "days") + 1,
  //     resourceId: slotId,
  //     bgColor: '#2ECC71'
  // }
    this.setState({ event: newEvent });
    // console.log(schedulerData)
    // // Axios.post(`${ config }/schedule/add`, newEvent);
    // schedulerData.addEvent(newEvent);
    // console.log(schedulerData)
    // this.setState({ viewModel: schedulerData });
    // console.log(this.state.viewModel)
    // console.log(schedulerData)
    // schedulerData.addEvent(newEvent);
    // // console.log('here2', newEvent)
    // this.setState({
    //     viewModel: schedulerData
    // })
    // console.log(schedulerData)
  };

  updateEventStart = (schedulerData, event, newStart) => {
    let newEventStart = {
      id: event.id,
      nokiaid: event.resourceId,
      start: newStart,
      end: event.end,
      type: event.type,
      title: event.title,
      replacement: event.replacement,
      status: "L3",
    };

    // Axios.post(`${ config }/schedule/update/${event.resourceId}`, newEventStart);
    console.log(event)
    schedulerData.updateEventStart(event, newStart);
    this.setState({
      viewModel: schedulerData,
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    let newEventEnd = {
      id: event.id,
      nokiaid: event.resourceId,
      end: newEnd,
      start: event.start,
      title: event.title,
      status: event.status,
      type: event.type,
      replacement: event.replacement,
    };

    Axios.post(`${ config.baseURL + baseLOCATION }/schedule/update/${event.resourceId}`, newEventEnd);
    console.log(schedulerData)
    schedulerData.updateEventEnd(event, newEnd);
    console.log(schedulerData)
    this.setState({
      viewModel: schedulerData,
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    let updatedEvent = {
      newResource: slotId,
      nokiaid: event.resourceId,
      id: event.id,
      start: start,
      end: end,
      title: event.title,
      event,
    };
    if (this.props.role === "L3") {
      Axios.post(`${ config.baseURL + baseLOCATION }/schedule/update/${event.id}`, updatedEvent);
    }
    schedulerData.moveEvent(event, slotId, slotName, start, end);
    this.setState({
      viewModel: schedulerData,
    });
  };
}
function MapStateToProps(state) {
  return {
    name: state.auth.name,
    role: state.auth.role,
  };
}

export default connect(MapStateToProps, actions)(withDragDropContext(Schedule));
