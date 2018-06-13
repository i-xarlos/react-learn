import React , { Component } from "react"
import style from "../components/VideoDetail.css"

const VideoDetail = ( { currentVideo } ) => {
   if( !currentVideo ){
       return <div> Loading.. </div>
   }else {
       console.log(currentVideo)
   }
   
   
   const embed = "https://youtube.com/embed/" + currentVideo.id
   return(
            <div>
               <iframe src={ embed } />
               <h1><strong>{currentVideo.name}</strong></h1>
               <p>{currentVideo.description}</p>
            </div>
        )
}
export default VideoDetail