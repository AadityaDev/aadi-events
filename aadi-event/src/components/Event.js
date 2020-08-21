import React from "react";
import cx from "classnames";

const Event = ({ event }) => (
  <li
    className="event-item"
    onClick={() => {} /** dispatches action to toggle event */}
  >
    {event && event.free ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "event-item__text",
        event && event.free && "event-item__text--free"
      )}
    >
      {event.content}
    </span>
  </li>
);

export default Event;
