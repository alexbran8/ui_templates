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
    id: 1,
    text: "Implement SSO login using LinkedIn OAUTH2",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "needs GDPR to be in place when in production",
    status: "In progress",
    release: "1.0",
    responsible:'alexandru.bran@nokia.com',
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
    id: 2,
    text: "Develop local login strategy using node.JS Passport",
    date: "Mar 10 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "needs GDPR to be in place when in production",
    status: "",
    progress: '50%',
    release: "1.1",
    priority: {
      priority_text: "P3",
      priority_color: "#FF0000",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact responsible",
    },
  },
  {
    id:3,
    text: "Home page responsiveness refactoring",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "does not have responsive behaviour",
    status: "In progress",
    progress: "0%",
    release: "1.2",
    priority: {
      priority_text: "P3",
      priority_color: "#018f69",
    },
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  {
    id:4,
    text: "Modal for project application implementation",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    release: "1.7",
    status: "",
    progress: "0%",
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
    id:5,
    text: "Finalize import and export project features",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    responsible:'alexandru.bran@nokia.com',
    status: "",
    release: "1.3",
    progress:'75%',
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
    id:6,
    text: "Development of credits page (animation is in place, text needs to be prepared",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    release: "1.4",
    priority: {
      priority_text: "P3",
      priority_color: "#018f69",
    },
    status: "",
    issues:"",
    progress: "0%",
    link: {
      url: "mailto:alexandru.bran@nokia.com",
      text: "contact developer",
    },
  },
  {
    id:7,
    text: "MICRO-FRONTEND IMPLEMENTATION",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    responsible:'alexandru.bran@nokia.com',
    issues: "Subject of 2022 Summer Practice",
    status: "Research on going",
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
    id:8,
    text: "Update each existing component to be multilangual (RO/ENG)",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    status: "",
    release: "1.5",
    priority: {
      priority_text: "P3",
      priority_color: "#018f69",
    },
    progress: "0%",
    link: {
      url: "mailto:alexandru.bran@nokia.com.com",
      text: "contact developer",
    },
  },
  {
    id:9,
    text: "Develop Automated Testing Procedures",
    date: "Mar 12 2012 10:00:00 AM",
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    status: "",
    release: "1.4",
    progress: "0%",
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
    id:10,
    text: "Make application PWA",
    date: "Mar 12 2012 10:00:00 AM",
    responsible:'alexandru.bran@nokia.com',
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    status: "",
    release: "1.4",
    progress: "75%",
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
    id:11,
    text: "CRUD for project application (frontend+backend+email-notifications)",
    date: "Mar 12 2012 10:00:00 AM",
    responsible:'',
    category: {
      tag: "future planned update",
      color: "#F27719",
    },
    issues: "",
    status: "",
    release: "1.4",
    progress: "0%",
    priority: {
      priority_text: "P0",
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