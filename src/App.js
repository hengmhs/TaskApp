import React from "react";
import { TaskList } from "./components/Overview.js"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      tasks: ['Mow lawn','Return books','Buy food'],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event);
  }
  handleSubmit(event) {
    const tasks = this.state.tasks;
    const newTasks = tasks.concat(this.state.value);
    this.setState({tasks: newTasks});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>        
          <label> 
            Add Task: 
            <input type="text" value={this.state.value} onChange = {this.handleChange} />        
          </label>
          <input type="submit" value="Submit" />
        </form>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }

}



export default App;
