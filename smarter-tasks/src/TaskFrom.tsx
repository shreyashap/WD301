import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  inputRef = React.createRef<HTMLInputElement>();
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  render(): React.ReactNode {
    return (
      <>
        <div>Task Form</div>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            className="bg-gray-200 my-4 mx-2 p-2 rounded-lg"
            ref={this.inputRef}
            value={this.state.title}
            onChange={this.titleChanged}
          />
          <button
            type="submit"
            className="bg-blue-400  p-2 text-white rounded-md"
          >
            Add item
          </button>
        </form>
      </>
    );
  }
}

export default TaskForm;
