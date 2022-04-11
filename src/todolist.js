

import {useState} from "react";
import Li from './li';

function TodoList() {
	const initialTodos = 	[
							{name : "My first todo", done: false}, 
							{name: "My second todo", done: false}
							];
    const [todos, setTodos] = useState(initialTodos);
    console.log(todos);
	/*const myState = useState(initialTodos);
    const todos = myState[0];
    const setTodos = myState[1];*/
	return (
		<ul>
			{todos.map((todo) => (
				<Li todo={todo}/> 
			))}
		</ul>
	);
}

export default TodoList

/* import './todolist.css'



import React, { useState } from "react";

export default function TodoList() {
	const initialTodos = ["My first todo", "My second todo"];
	const [todos, setTodos] = useState(initialTodos);
	return (
		<ul>
			{todos.map((todo) => (
				<li>
					<input type="checkbox" /> {todo}
				</li>
			))}
		</ul>
	);
}


const todos = ["My first todo", "My second todo"];

function Todolist() {
    return <>   
           <ul>
			    {todos.map((todo) => (<li> <input type="checkbox" /> {todo} </li>))}
		    </ul>
                
            </>       
}

console.log(todos);

export default Todolist

*/

