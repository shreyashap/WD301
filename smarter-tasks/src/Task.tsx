import React from "react";

interface TaskProps {
  title: String;
}

class Task extends React.Component<TaskProps> {
  render(): React.ReactNode {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">Due Date:</p>
        <p className="text-sm text-slate-500">Description:</p>
      </div>
    );
  }
}

export default Task;
