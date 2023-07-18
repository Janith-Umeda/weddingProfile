import Carousel from 'react-bootstrap/Carousel';
import {motion} from 'framer-motion';
import {TfiAngleDoubleDown} from 'react-icons/tfi';

export default function SlideShow({Images}) {
  return (
    <div className='slide-section'>
        <Carousel fade>
            {Images?.map((src,i)=>{
                return(
                    <Carousel.Item key={i} interval={5000}>
                        <img
                            className="d-block w-100 slide-image"
                            src={`/images/${src}`}
                            alt={src}
                        />
                        <div className="hero-slide-overlay"></div>
                    </Carousel.Item>
                );
            })}
        </Carousel>
        <div className="scroll-animation">
            <motion.div
                onClick={()=>{window.location.hash ="#intro" }}
                className='scroll-anim-content'
                initial={{y:'-38'}}
                animate={{y:0}}
                transition={{ease:'easeInOut',duration:1.5,repeat:Infinity,repeatType:'reverse'}}
            >
                <span>SCROLL DOWN</span>
                <TfiAngleDoubleDown/>
            </motion.div>
        </div>
    </div>
  );
}