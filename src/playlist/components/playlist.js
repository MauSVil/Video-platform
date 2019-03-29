import React, {Component} from 'react'
import Media from './media'
import './playlist.css'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/full-screen'

class Playlist extends Component{
    render(){
        const playlist = this.props.data.categories[0].playlist
        console.log(this.props.data);
        
        return(
            <div className="Playlist">
                <Play 
                size={50}
                color="red"/>
                <Pause 
                size={50}
                color="red"/>
                <Volume 
                size={50}
                color="red"/>
                <FullScreen
                size={50}
                color="red"/>
                {
                    playlist.map((item)=>{
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
    }
}

export default Playlist