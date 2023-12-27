import homepage from "./homepage";
import addTodos from "./todosForm";
import createTodo from "./createTodos";
// import todoList from "./createTodos"


function initialLoad() {
    homepage();
    addTodos();
    createTodo();
    // todoList();
}

export default initialLoad;