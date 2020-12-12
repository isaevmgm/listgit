import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {


    const todos = useSelector(state => state.todos.todos);
    const selectedAlbum = useSelector(state => state.albums.selectedAlbum);

    const filteredTodos = todos.filter(todo => {
        if(todo.albumId === selectedAlbum) {
            return true
        }

        return false
    })


    if(selectedAlbum === null) {
        return (
            <div className="no-albums-selected">
                ◄ Выбери альбом в списке слева
            </div>
        )
    }

    return (
        <div className="photos">
            <ul>
                {filteredTodos.map(todo => {
                    return <Photo todo={todo} key={todo.id}/>
                })}
            </ul>
        </div>
    );
}

export default Photos;
