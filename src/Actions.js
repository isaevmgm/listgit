export  const loadTodos = () => {
    return(dispatch) => {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/comments/?_limit=50")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}

export const removeTodo = (id) => {
    return(dispatch) => {
        dispatch({type: 'start_deleting', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/comments/?_limit=50${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return(dispatch) => {
        dispatch({type: 'start_checking', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/comments/?_limit=50${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'check',
                    payload: id
                })
            })
    }
}