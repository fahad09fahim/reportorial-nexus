import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

const Todo = () => {
  const [tempName, setTempName] = useState("");
  const [tempHour, setTempHour] = useState(0);
  const [tempMinute, setTempMinute] = useState(0);
  const [tempSecond, setTempSecond] = useState(0);
  const [tasks, setTasks] = useState([]);

  const handleStart = (e) => {
    e.preventDefault();

    if (tempName === "") return;

    const time =
      Number(tempSecond) + Number(tempMinute) * 60 + Number(tempHour) * 60 * 60;
    setTasks([...tasks, [tempName, time]]);

    setTempName("");
    setTempHour(0);
    setTempMinute(0);
    setTempSecond(0);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTasks([]);
  };

  return (
    <div>
      <TodoContext.Provider
        value={{
          tempName,
          setTempName,
          tempHour,
          setTempHour,
          tempMinute,
          setTempMinute,
          tempSecond,
          setTempSecond,
          tasks,
          setTasks,
          handleStart,
        }}
      >
        <NewTask />
        <TaskList tasks={tasks} setTasks={setTasks} />
        {tasks.length > 0 && <button onClick={handleReset}>Reset</button>}
      </TodoContext.Provider>
    </div>
  );
};

const NewTask = () => {
  const {
    tempName,
    setTempName,
    tempHour,
    setTempHour,
    tempMinute,
    setTempMinute,
    tempSecond,
    setTempSecond,
    handleStart,
  } = useContext(TodoContext);

  return (
    <form>
      <input
        type="text"
        placeholder="Task Name"
        onChange={(e) => setTempName(e.target.value)}
        value={tempName}
      />
      <TimeSelect
        name="hour"
        time={24}
        value={tempHour}
        setValue={setTempHour}
      />
      <TimeSelect
        name="minutes"
        time={60}
        value={tempMinute}
        setValue={setTempMinute}
      />
      <TimeSelect
        name="seconds"
        time={60}
        value={tempSecond}
        setValue={setTempSecond}
      />
      <button onClick={handleStart}>start</button>
    </form>
  );
};

const TimeSelect = ({ name, time, value, setValue }) => {
  return (
    <div>
      <select
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {Array.from({ length: time }).map((_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <span>{name}</span>
    </div>
  );
};

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (task) => {
    setTasks(() => tasks.filter((item) => item != task));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <div key={task}>
          <Task task={task} />
          <button onClick={() => handleDelete(task)}>delete</button>
        </div>
      ))}
    </ul>
  );
};

const Task = ({ task }) => {
  const [time, setTime] = useState(task[1]);

  const date = new Date(time * 1000);
  const formattedTime = date.toISOString().substring(11, 19);

  useEffect(() => {
    if (time === 0) return;

    const countdown = setInterval(() => {
      setTime((v) => v - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [time]);

  return (
    <li>
      <span>{task[0]}</span>
      <span>{formattedTime}</span>
    </li>
  );
};

export default Todo;
