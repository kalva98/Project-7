import React from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js'

const GifList = props => {

    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    } else {
        photos = <NotFound />
    }

    return (
        
       <div className='photo-container'>
            <ul className="photo-container" >
                {photos}
            </ul> 
        </div>
    );
}

export default GifList;