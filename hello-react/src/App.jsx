import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="w-full h-screen m-8">
      <h1 className="text-4xl font-bold">Smarter Tasks</h1>
      <p>
        <strong>Project:</strong> Graduation Final Year Project
      </p>

      <div className="flex justify-center items-center gap-10">
        <div className="w-[25rem] h-[30rem] border-2 border-gray-400 rounded-lg p-4 flex flex-col gap-8">
          <h2 className="text-xl text-center font-bold">Pending</h2>
          <TaskCard
            dueDate="10th April"
            title="Build the website with static content"
            assigneeName="Rohit S"
          />
          <TaskCard
            dueDate="22nd March"
            title="Add A Blog"
            assigneeName="Rohit M"
          />
        </div>
        <div className="w-[25rem] h-[30rem] border-2 border-gray-400 rounded-lg p-4 flex flex-col gap-8">
          <h2 className="text-xl text-center font-bold">Completed</h2>
          <TaskCard
            completedAtDate="10th April"
            title="Get the approval from pricipal"
            assigneeName="Rohit S"
          />
          <TaskCard
            completedAtDate="22nd March"
            title="Design the mockup"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
