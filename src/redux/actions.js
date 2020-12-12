export const loadAlbums = () => {
    return(dispatch) => {
        dispatch({type: 'albums/load/start'});

        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'albums/load/success',
                    payload: json
                })
            })
    }
}

export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'todos/load/start'})

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'todos/load/success',
                    payload: json
                })
            })
    }
}

export const selectAlbum = (albumId) => {
    return {
        type: 'albums/select',
        payload: albumId
    }
}