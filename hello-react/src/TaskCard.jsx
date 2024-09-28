const TaskCard = (props) => {
  return (
    <>
      {props.dueDate && (
        <div>
          <div className="w-full h-32 border-4 border-gray-500 flex flex-col p-2">
            <h3 className="font-bold">{props.title}</h3>
            <p>Due On : {props.dueDate}</p>
            <p>Assignee Name : {props.assigneeName}</p>
          </div>
        </div>
      )}

      {props.completedAtDate && (
        <div>
          <div className="w-full h-32 border-4 border-gray-500 flex flex-col p-2">
            <h3 className="font-bold">{props.title}</h3>
            <p>Completed On : {props.completedAtDate}</p>
            <p>Assignee Name : {props.assigneeName}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
