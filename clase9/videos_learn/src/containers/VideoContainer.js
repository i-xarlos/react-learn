import React , { Component } from "react"
import VideoSearch from "../components/VideoSearch"
import VideoList from "../components/VideoList"
import VideoDetail from "../components/VideoDetail"
import ys from "youtube-api-v3-search"

class VideoContainer extends Component {
    state = {
        videos : [],
        currentVideo : [],
        defaultSearch: "perritos"
      }
    
      componentDidMount(){
        this.setYoutubeAPI( this.state.defaultSearch )
      }

      setYoutubeAPI = ( q ) => {
        const youtubeAPI = "AIzaSyB8nUPFy6F79I94B4pJVKg_h-ppNIhectc"
        const opts = { q , type : 'videos' }
        ys( youtubeAPI , opts).then((data)=> {
        
          const videos = data.items.map(
            video => ( 
              {
                id : video.id.videoId,
                name : `${video.snippet.title}`,
                description: `${video.snippet.description}`,
                thumb: `${video.snippet.thumbnails.default.url}`
              }
            )
          )

          this.setState({ 
            videos , 
            currentVideo : this.state.videos[0]
           })
         this.ooHandlerFirstCharge()
        })
      }

      ooHandlerFirstCharge() {
        this.onHandlerClickVideo(this.state.videos[0].id)
      }

      onHandlerClickVideo = (id) => {
        let videos = this.state.videos
        let video = videos.find(video => video.id === id)
        
        this.setState({
          videos , 
          currentVideo : video
        })

      }

      onChildChanged = (text) => {
        this.setState({
          defaultSearch: text
        })
        this.setYoutubeAPI( this.state.defaultSearch )
       // console.log()
      } 

    render(){
        return(

          <div>
             <section className="section">
                <div className="container">
                  <h1 className="title">Litle Youtube Search</h1>
               </div>
            </section>

            <div className="columns">
              <div className="column">
                <VideoSearch callbackParent={(text) => this.onChildChanged(text)} />
              </div> 
            </div>

            <div className="columns">

                <div className="column is-three-fifths">
                  <VideoDetail  currentVideo={this.state.currentVideo}/>
                </div>

                <div className="column">
                 
                  <VideoList  videos={this.state.videos} currentVideo={this.onHandlerClickVideo}/>
                </div>
               
            </div>
          </div>
        )
    }
}
export default VideoContainer