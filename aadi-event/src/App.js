import React from 'react';
import logo from './logo.svg';
import AddEvent from "./components/AddEvent";
import EventList from "./components/EventList";
import VisibilityFilters from "./components/VisibilityFilters";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event List</h1>
        <AddEvent />
        <EventList />
        <VisibilityFilters />
      </header>
    </div>
  );
}

export default App;
