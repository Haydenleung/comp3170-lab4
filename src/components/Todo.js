import deleteImg from "../icons/clear.png";

export default function Todo(props) {
    const task = props.task;

    function handleDelete() {
        props.remove(task);
    }

    function handleStatusChange() {
        props.toggleClick(task);
    }

    return (
        <div className="singleTask">
            <div className="todoDetails">
                <input
                    type="checkbox"
                    onChange={handleStatusChange}
                    value={task.clicked}
                />
                {/* <span className="title">{task.title}</span> */}
                <span className="title">
                    {task.clicked === true ? <del>{task.title}</del> : task.title}
                </span>
            </div>
            <div onClick={handleDelete} className="deleteDetails">
                <img className="delete" src={deleteImg} alt="delete" />
            </div>
        </div>
    );
}
