import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../editable-stuff/resume.json";

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      
        <div className="timeline-item">
          <div className="timeline-marker is-success"></div>
          <div className="timeline-content"></div>
        </div>
        {Resume.work
          .map(item => {
            return new Date(item.startDate).getFullYear();
          })
          .map((year, i) => {
            let content = [];
            content.push(
              <header key={i} className="timeline-header">
                <span className="tag is-success">{year}</span>
              </header>
            );
            content.push(
              Resume.work
                
                .map((item, j) => {
                  return (
                    <TimelineItem
                      key={j}
                      date={new Date(item.startDate).toLocaleString("en-UK", {
                        month: "long",
                        year: "numeric"
                      })}
                      company={item.company}
                      summary={item.position}
                    />
                  );
                })
            );
            content.push(
              Resume.education
              
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company = {item.institution}
                    summary = {item.area}
                  />
                );
              })
            );
            return content;
          })}
    </div>
  );
}

export default Timeline;