
function Li({todo}) {

    function check() {
        todo.done = true;
    }

    return <li>
        <input onChange={check} type="checkbox" /> <label> {todo.name} </label>
    </li>
    }

export default Li