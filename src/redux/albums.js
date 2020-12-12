const initialState = {
    selectedAlbum: null,
    albums: [],
    loading: false,
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

        case 'albums/select':
            return {
                ...state,
                selectedAlbum: action.payload
            }

        default:
            return state;
    }
}