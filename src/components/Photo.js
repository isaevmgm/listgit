import React from 'react';

function Photo(props) {
    return (
        <div className="photos">
            <li>
                <img src={props.todo.thumbnailUrl}/>
            </li>
        </div>
    );
}

export default Photo;
