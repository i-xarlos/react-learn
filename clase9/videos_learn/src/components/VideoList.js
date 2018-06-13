import React , { Component } from "react"
import VideoListItem from "./VideoListItem"

const VideoList = ( { videos , currentVideo} ) => {

    
    return(
        
        videos.map((item, i) => <VideoListItem key={i} {...item} currentVideo={currentVideo}/>)
           
        )
}
export default VideoList