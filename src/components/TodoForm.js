import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        //add somg to playlist
        e.preventDefault();
        const newTask = {
            title: title,
            clicked: false,
            id: nanoid()
        };
        props.addTask(newTask);
        setTitle("");
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
        console.log(title);
    }

    return (
        <div className="todoForm">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={handleTitleChange}
                        value={title}
                        placeholder="New Task Title"
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
