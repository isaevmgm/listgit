import Albums from "./Albums";
import Photos from "./Photos";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadTodos} from "../redux/actions";

function App() {
    const dispatch = useDispatch();

    const loadingAlbums = useSelector(state => state.albums.loading);
    const loadingTodos = useSelector(state => state.todos.loading);

    useEffect(() => {
        dispatch(loadAlbums());
        dispatch(loadTodos());
    }, [])

    if(loadingTodos || loadingAlbums) {
        return (
            <div>
                идет загрузка...
            </div>
        )
    }
    return (
       <div className="container">
           <Albums />
           <Photos />
       </div>
    )
}

export default App;







