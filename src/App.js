import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkTodo, loadTodos, removeTodo} from "./Actions";
import ReactLoading from 'react-loading';

function App() {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [])

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

    return (
        <div className="container">
            <div className="header">
                Список
            </div>
            {loading ? 'Загрузка' : (
                todos.map((todo) => {
                    return (
                        <div className="todo">
                            <div>
                                {todo.checking ? (
                                    <ReactLoading
                                    color="blue"
                                    type="spin"
                                    width={13}
                                    height={13}/>
                                ) : (
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleCheck(todo.id, todo.completed)}/>
                                )}
                            </div>
                            {todo.title}
                            <div>
                                <button className="btn"
                                onClick={() => handleDelete(todo.id)}
                                disabled={todo.deleting}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    )
                }))}
        </div>
    )
}

export default App;







