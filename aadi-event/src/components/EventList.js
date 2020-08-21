import React from "react";
import Event from "./Event";

const EventList = ({ events }) => (
  <ul className="event-list">
    {events && events.length
      ? events.map((event, index) => {
          return <Event key={`event-${event.id}`} event={event} />;
        })
      : "No events, yay!"}
  </ul>
);

export default EventList;
