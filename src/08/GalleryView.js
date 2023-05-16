import GalleryArticle from './GalleryArticle';
import React from 'react';
import styles from "./Gallery.module.css";

const GalleryView = ({ content }) => {
    console.log("GalleryView", content);

    const tags = [];

    for (let i = 0; i < content.length; i = i + 2) { 
        tags.push(
            <div className="grid" key={'div'+i}>
                <GalleryArticle item={content[i]}/>
                {(i + 1 < content.length) && <GalleryArticle item={content[i+1]}/>}      

            </div>
        );
    }

    return (
        <>
            {tags}
        </>

    );
};

export default GalleryView;