import React , { Component } from "react"

const VideoListItem = ( { id , name , description , thumb , currentVideo } ) => {
   
    return(

        <div className="box" onClick={()=>currentVideo(id)}>
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={thumb} alt="Image"/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> {description}
                    </p>
                </div>
                
                </div>
            </article>
        </div>
            
        )
}
export default VideoListItem