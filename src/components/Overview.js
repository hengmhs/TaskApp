import React from "react";

class TaskList extends React.Component {
    render(props) {
      const listItems = this.props.tasks.map((task) => 
      <li key={task}>
        {task}
      </li>
      );
      return (
        <ul>{ listItems }</ul>
      )
    }
    
  }

  export { TaskList }