import React from "react";

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddEvent = () => {
    // dispatches actions to add todo
    // sets state back to empty string
    window.alert("this" + this.state.input);
    
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddEvent}>
          Add Event
        </button>
      </div>
    );
  }
}

export default AddEvent;