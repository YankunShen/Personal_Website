import React from "react";

function TimelineItem(props) {
  return (
   
      <div className="timeline-item is-success">
        <div className="timeline-marker is-image is-32x32">
          <img src="" alt="" />
        </div>
        <div className="timeline-content">
          <p className="heading">{props.date}</p>
          <h3 className="display-5 mb-6">{props.company}</h3>
          <p style={{ maxWidth: "25em" }}>{props.summary}</p>
        </div>
    </div>
  );
}

export default TimelineItem;