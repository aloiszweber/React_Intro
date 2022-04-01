import './content.css'

function Content() {
    return <div id="contentbox"> 
                <input id="addTodoInput" type="text" value=""/>
                <br/>
                <button> Add Todo </button>
            </div>
}


export default Content

/* value = Type a new todo => I have a bug when
    I put it in the attribute value and also whitout too
    because I can't write anything in the input
*/