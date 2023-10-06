import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function Todos() {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        const updatedTask = [...tasks, task];
        setTasks(updatedTask);
    }

    function removeTask(task) {
        const updatedTask = tasks.filter(function (list) {
            return list.id !== task.id;
        });
        setTasks(updatedTask);
    }

    function toggleClick(task) {
        const updatedTask = tasks.map(function (list) {
            if (list.id === task.id) {
                list.clicked = !list.clicked;
                return list;
            } else {
                return list;
            }
        });
        setTasks(updatedTask);
    }

    return (
        <div className="longListContainer">
            <ul className="longList">
                {tasks.map((task) => (
                    <Todo
                        key={task.id}
                        task={task}
                        remove={removeTask}
                        toggleClick={toggleClick}
                    />
                ))}
            </ul>
            <TodoForm addTask={addTask} />
        </div>
    );
}
