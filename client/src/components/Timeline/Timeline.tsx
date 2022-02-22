import React from "react";

import "./Timeline.scss";

const Timeline = () => (
  <>
    <DevelopmentTimeline />
  </>
);

const DevelopmentTimeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.sort(function(a,b){ 
        console.log(typeof a.date)
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
      }
        ).map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );


export const timelineData = [
  {
    text: "Implement SSO login for stundents using Linkedin login",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "waiting for approval for creating Linkedin application for login",
    status: "waiting",
    release: "1.0",
    progress: '50%',
    priority: {
      priority_text: "P0",
      priority_color: "#FF0000",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact responsible",
    },
  },
  {
    text: "develop local login strategy",
    date: "Mar 10 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "needs GDPR to be in place when in production",
    status: "waiting",
    progress: '50%',
    release: "1.1",
    priority: {
      priority_text: "P0",
      priority_color: "#FF0000",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact responsible",
    },
  },
  {
    text: "Implement home page developed during individual projects",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "footer needs to be reviewed for position in page; home page animations still under development",
    status: "on-going",
    progress: "60%",
    release: "1.2",
    priority: {
      priority_text: "P1",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  {
    text: "Implement modal developed during individual project and responsive table for projects list",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "components still under development: 70% final progress",
    release: "1.7",
    status: "Waiting",
    progress: "70%",
    priority: {
      priority_text: "P2",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  {
    text: "Finalize import and export project features",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    status: "In progress",
    release: "1.3",
    priority: {
      priority_text: "P2",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com.com",
      text: "contact developer",
    },
  },
  {
    text: "Finalize credits page",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    release: "1.4",
    priority: {
      priority_text: "P0",
      priority_color: "#018f69",
    },
    status: "95%",
    issues:"design in progress",
    progress: "40%",
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  {
    text: "MICRO FRONTEND IMPLEMENTATION",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "to be part of team projects",
    status: "5%",
    progress: "5%",
    release: "1.6",
    priority: {
      priority_text: "P2",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  {
    text: "Implement container scalability",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    status: "ok",
    release: "1.5",
    priority: {
      priority_text: "P3",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com.com",
      text: "contact developer",
    },
  },
  {
    text: "Develop Automated Testing Procedures",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "wip",
    status: "on going research",
    release: "1.4",
    priority: {
      priority_text: "P1",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.release} {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <span
        className="priority"
        style={{ color: data.priority.priority_color }}
      >
        {data.priority.priority_text}[{data.progress}] - {data.status} - {data.issues}
      </span>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle2" />
    </div>
  </div>
);


export default Timeline