import React from "react";

const TaskCard = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
  isCompleted,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">Assignee: {assigneeName}</p>
      {!isCompleted && <p className="text-gray-500">Due Date: {dueDate}</p>}
      {isCompleted && (
        <p className="text-gray-500">Completed on: {completedAtDate}</p>
      )}
    </div>
  );
};

export default TaskCard;
