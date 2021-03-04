import React from 'react';
import  './imageList.css';
import OneByOne from './OneByOne';

const ImageList = (props)=>{
    const images = props.images.map(img=>{
        return (<OneByOne key={img.id} image={img} />)
    });
    
    return (<div className="image-list">
        {images}
    </div>)
}

export default ImageList;