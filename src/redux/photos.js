const initialState = {
    todos: [],
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'todos/load/start':
            return {
                ...state,
                loadingTodos: true
            }

        case 'todos/load/success':
            return {
                ...state,
                todos: action.payload,
                loadingTodos: false
            }

        default:
            return state;
    }
}