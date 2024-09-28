import React from "react";

interface TaskProps {
  title: String;
}

class Task extends React.Component<TaskProps> {
  render(): React.ReactNode {
    return (
      <div className="bg-gray-400 text-center w-full">{this.props.title}</div>
    );
  }
}

export default Task;
