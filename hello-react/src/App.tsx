import React from "react";
import TaskCard from "./TaskCard";
import "./App.css";

const App = () => {
  const pendingTasks = [
    {
      title: "Build the webiste with static content",
      dueDate: "10th April",
      assigneeName: "Rohit S",
    },
    { title: "Add a blog", dueDate: "22nd March", assigneeName: "Rohit M" },
  ];

  const doneTasks = [
    {
      title: "Design Mockup",
      completedAtDate: "10th April",
      assigneeName: "Rohit M",
    },
    {
      title: "Get the approval from principal",
      completedAtDate: "20th April",
      assigneeName: "Ajay S",
    },
  ];

  return (
    <>
      <h1>Smarter Tasks</h1>
      <p>
        <strong>Project:</strong> Graduation Final Year Project (Revamp College
        Webiste
      </p>
      <div className="conatiner outerDiv mx-auto">
        <div className="innerDiv">
          <h2 className="text-lg font-bold">Pending</h2>
          <div className="pending-list">
            {pendingTasks.map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                dueDate={task.dueDate}
                assigneeName={task.assigneeName}
                isCompleted={false}
              />
            ))}
          </div>
        </div>

        <div className="innerDiv">
          <h2 className="text-lg font-bold">Done</h2>
          <div className="done-list">
            {doneTasks.map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                completedAtDate={task.completedAtDate}
                assigneeName={task.assigneeName}
                isCompleted={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
