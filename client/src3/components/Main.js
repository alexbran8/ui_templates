import React, { Component } from "react";
import Axios from "axios";
import Schedule from "./Schedule";
import { config } from "../config";
import { baseLOCATION} from "../config";

var moment = require("moment");

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      line_manager: [],
      tpm: [],
      employeers: [],
      events: [],
      resources: [],
      admin: true,
      filter: {
        line_manager: "",
        team: "",
        coordinator: "",
        employeers: "",
        resources: "",
        admin: true,
        operational: false,
      },
    };
  }

  async init(data) {
    // add checkBox params here
    let params = { 'admin': this.state.filter.admin, 'operational': this.state.filter.operational }

    const events = await Axios.post(`${ config.baseURL + baseLOCATION }/schedule/get`, params)
    console.log('evemts', events)
    if (events.data.schedule) {
      const fmtEvents = events.data.schedule.reduce((prev, entry) => {
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
      this.setState({
        events: fmtEvents,
      });
    }
    const users = await Axios.get(`${ config.baseURL + baseLOCATION }/usersPrivate/get`);
    console.log("users", users);
    if ( users.data.users) {
      const fmtUsers = users.data.users.reduce((prev, entry) => {
        prev.push({
          id: entry.nokiaid,
          name: `${entry.lastname}, ${entry.firstname}`,
        });
        return prev;
      }, []);
      this.setState({
        resources: fmtUsers,
        team: users.data.team,
        line_manager: users.data.line_manager[0],
        tpm: users.data.tpm[0],
        employeers: users.data.employeers[0],
      });
    }
  }

  async filter(data) {
    const users = await Axios.post(`${ config.baseURL + baseLOCATION }/usersPrivate/get/filter`, data);
    console.log("filtered users", users.data.filterUsers);
    if (users.data.filterUsers) {
      const fltUsers = users.data.filterUsers.reduce((prev, entry) => {
        prev.push({
          id: entry.nokiaid,
          name: `${entry.lastname}, ${entry.firstname}`,
        });
        return prev;
      }, []);
      this.setState({ resources: fltUsers });
    }
    if (this.state.resources.length > 0) {
      this.getSchedule();
    }
  }

  async onChangeCheckBox(fieldName, e) {
      await this.setState((prevState) => ({
        filter: {
          ...prevState.filter,
          [fieldName]: !prevState.filter[fieldName],
        },
      }));
    this.init();
  }


  getSchedule() {
    return (
      <Schedule resources={this.state.resources} events={this.state.events} />
    );
  }

  componentDidMount = () => {
    this.init();
  }

  render() {
    return (
      <div>
        {this.props.isAuth ? (
          <>
            <form
              className="filter text-center row"
              onSubmit={(e) => {
                e.preventDefault();
                this.filter(this.state.filter);
              }}
            >
              <select
                className="form-control p-2 m-3 col"
                defaultValue=""
                onChange={(e) => {
                  const lineObj = { ...this.state.filter };
                  lineObj.line_manager = e.target.value;
                  this.setState({ filter: lineObj });
                }}
              >
                <option value="">Line manager</option>
                {this.state.line_manager.length > 0
                  ? this.state.line_manager.map((main) => {
                    const name = `${main.line_manager_firstname} ${main.line_manager_lastname}`;

                    return (
                      <option key={name} value={main.line_manager_firstname}>
                        {name}
                      </option>
                    );
                  })
                  : null}
              </select>
              <select
                className="form-control p-2 m-3 col"
                defaultValue=""
                onChange={(e) => {
                  const teamObj = { ...this.state.filter };
                  teamObj.team = e.target.value;
                  this.setState({ filter: teamObj });
                }}
              >
                <option value="">Team</option>
                {this.state.team.length > 0
                  ? this.state.team.map((main) => {
                    return (
                      <option key={main.DISTINCT} value={main.DISTINCT}>
                        {main.DISTINCT}
                      </option>
                    );
                  })
                  : null}
              </select>
              <select
                className="form-control p-2 m-3 col"
                defaultValue=""
                onChange={(e) => {
                  const coordObj = { ...this.state.filter };
                  coordObj.coordinator = e.target.value;
                  this.setState({ filter: coordObj });
                }}
              >
                <option value="">Coordinator</option>
                {this.state.tpm.length > 0
                  ? this.state.tpm.map((main) => {
                    const name = `${main.tpm_lastname} ${main.tpm_firstname}`;
                    return (
                      <option key={name} value={main.tpm_firstname}>
                        {name}
                      </option>
                    );
                  })
                  : null}
              </select>

              <select
                className="form-control p-2 m-3 col"
                defaultValue=""
                onChange={(e) => {
                  const empObj = { ...this.state.filter };
                  empObj.employeers = e.target.value;
                  this.setState({ filter: empObj });
                }}
              >
                <option value="">Employeer</option>
                {this.state.employeers.length > 0
                  ? this.state.employeers.map((main) => {
                    const name = `${main.employeer}`;
                    return (
                      <option key={name} value={main.employeer}>
                        {name}
                      </option>
                    );
                  })
                  : null}
              </select>

              <select
                className="form-control p-2 m-3 col"
                defaultValue=""
                onChange={(e) => {
                  const resObj = { ...this.state.filter };
                  resObj.resources = e.target.value;
                  this.setState({ filter: resObj });
                }}
              >
                <option value="">Resource</option>
                {this.state.resources.length > 0
                  ? this.state.resources.map((main) => {
                    const name = `${main.name}`;
                    return (
                      <option key={name} value={main.name}>
                        {name}
                      </option>
                    );
                  })
                  : null}
              </select>
              <div className="checkboxContainer">
                <div className="checkbox">
                  <label>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={this.state.filter.admin}
                      onChange={(e) => this.onChangeCheckBox("admin", e)}
                    />
                administrative
              </label>
                  <label>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={this.state.filter.operational}
                      onChange={(e) => this.onChangeCheckBox("operational", e)}
                    />
                operational
              </label>
                </div>
              </div>

              <button
                className="btn btn-success m-3"
                onClick={(e) => {
                  e.preventDefault();
                  this.filter(this.state.filter);
                }}
              >
                Filter
              </button>
              <button
                className="btn btn-warning m-3"
                onClick={(e) => {
                  e.preventDefault();
                  this.filter({
                    team: "",
                    line_manager: "",
                    coordinator: "",
                    employeers: "",
                    resources: "",
                  });
                }}
              >
                Clear filter
              </button>
            </form>

            {this.state.resources.length > 0 ? (
              this.getSchedule()
            ) : (
              <div className="noApprove text-center">
                <h1>No users found.</h1>
              </div>
            )}
          </>
        ) : (
          this.props.history.push("/npt")
        )}
      </div>
    );
  }
}

export default Main;
