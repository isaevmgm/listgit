const initialState = {
    selectedAlbum: null,
    albums: [],
    todos: [],

    loadingAlbums: false,
    loadingTodos: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'albums/load/start':
            return {
                ...state,
                loadingAlbums: true
            }

        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }

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

        case 'albums/select':
            return {
                ...state,
                selectedAlbum: action.payload
            }

        default:
            return state;
    }
}