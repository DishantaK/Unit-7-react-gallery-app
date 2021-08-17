import React from 'react';

const Photo = ({ id, secret, server, alt}) => {
    let url= `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
    return (
        <li>
            <img src={url} alt={alt} />
        </li>
          
    );
}



export default Photo


// img src={props.url} 