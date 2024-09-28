import React from "react";
import Task from "./Task";

interface Props {}

interface TaskItem {
  title: String;
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tasks: [{ title: "Pay rent" }, { title: "Wash cars" }],
    };
  }
  render(): React.ReactNode {
    return <Task title="Buy Chocolate" />;
  }
}

export default TaskList;
