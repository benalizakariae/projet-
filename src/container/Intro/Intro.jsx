import React from 'react';
import {BsFillPlayFill, BsPauseFill} from'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';
import { useState } from 'react';

const Intro = () => {
  const [playVideo,setplayVideo]=useState(false)
  const vidREf=React.useRef();
  const handleVideo=()=>{
    setplayVideo(()=>(prevPlayVideo)=>!prevPlayVideo);
    if(playVideo){
      vidREf.current.pause();
    }else{
      vidREf.current.play();
    }

  }
  return(
  <div className='app__video'>
    <video src={meal} 
    type="video/mp4"
    ref={vidREf}
    loop
    controls={false}
    muted
    />
    <div className='app__video-overlay flex__center'>
      <div 
      className='app_video-overlay_circle flex__center'
      onClick={handleVideo}
      >
        {playVideo ? (
        
        <BsPauseFill color='#fff' fontSize={30}/>) : 
        
        (<BsFillPlayFill color='#fff' fontSize={30}/>)}

      </div>
    </div>
  </div>
  )
}

export default Intro;
