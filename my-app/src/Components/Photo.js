import React from 'react';

//presentational component containing template that displays each gif
const Photo = props => {
    return (
        <li >
            {/*source attribute is set to value of props.url to receive the data passed via url path*/}
            <img src={props.url} alt="" />
        </li>
    );
}
export default Photo;