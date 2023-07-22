import Carousel from 'react-bootstrap/Carousel';
import {motion,useScroll} from 'framer-motion';
import {TfiAngleDoubleDown} from 'react-icons/tfi';

export default function SlideShow({Images}) {

    const {scrollY} = useScroll();

  return (
    <div className='slide-section'>
        <Carousel fade>
            {Images?.map((src,i)=>{
                return(
                    <Carousel.Item key={i} interval={5000}>
                        <motion.img
                            className="d-block w-100 slide-image"
                            style={{
                                translateY:scrollY,
                                transition:'0.2s easeInOut'
                            }}
                            src={`/images/${src}`}
                            alt={src}
                            loading='lazy'
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