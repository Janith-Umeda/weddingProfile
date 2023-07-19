import {MdOutlineMusicNote, MdOutlineMusicOff} from 'react-icons/md';
import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function MusicBtn({musicSrc}){

    const [toggle,setToggle] = useState(false);
    const music = useRef();
    
    useEffect(()=>{
        if(toggle){
            music.current?.play();
        }else{
            music.current?.pause();
        }
    },[toggle])

    return(
        <motion.div
            onClick={()=>setToggle(!toggle)}
            className={`music-btn ${toggle ? 'music-active' : ''}`}
            initial={{
                scale:1,
                transitionDuration:0.5
            }}
            whileHover={{
                scale:1.1,
                transition:{
                    duration:0.2
                }
            }}
        >
            {toggle ?(
                <MdOutlineMusicNote />
            ):(
                <MdOutlineMusicOff/>
            )}
        <audio src={musicSrc} loop ref={music}></audio>
        </motion.div>
    )
}