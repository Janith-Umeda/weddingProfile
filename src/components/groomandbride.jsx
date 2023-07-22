import {motion} from 'framer-motion'; 
import { useState } from 'react';

export default function GroomAndBride({data}){

    const [readme1,setRM1] = useState(false);
    const [readme2,setRM2] = useState(false);

    const container = {
        hidden: { opacity: 1, },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3
            }
        }
    };
    
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="gandb-section" id="g_and_b">
            <motion.div 
                className="gandb-heading"
                initial="hidden"
                variants={container}
                whileInView="visible"
            >
                <motion.h2 variants={item}>Groom & Bride</motion.h2>
            </motion.div>
            <div className="gandb-container">
                <motion.div 
                    className="gandb-row"
                    initial="hidden"
                    variants={container}
                    whileInView="visible"    
                >
                    <motion.div className="image" variants={item}>
                        <img src={data.groom.image} alt="groom" />
                    </motion.div>
                    <motion.div className="desc" variants={item}>
                        <h4>{data.groom.name}</h4>
                        <p className='d-none d-sm-block'>{data.groom.about}</p>
                        <p className='d-block d-sm-none'>
                            {
                                readme1 ? (
                                    data.groom.about
                                    ) : (
                                    String(data.groom.about).substring(0,50)+'...'
                                )
                            }
                            <div onClick={()=>setRM1(!readme1)}>
                                { readme1 ? 'Read Less' : 'Read More' }
                            </div>
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="gandb-row reverse"
                    initial="hidden"
                    variants={container}
                    whileInView="visible"    
                >
                    <motion.div className="image" variants={item}>
                        <img src={data.bride.image} alt="bride" />
                    </motion.div>
                    <motion.div className="desc" variants={item}>
                        <h4>{data.bride.name}</h4>
                        <p className='d-none d-sm-block'>{data.bride.about}</p>
                        <p className='d-block d-sm-none text-justify'>
                            {
                                readme2 ? (
                                    data.bride.about
                                    ) : (
                                    String(data.bride.about).substring(0,50)+'...'
                                )
                            }
                            <div onClick={()=>setRM2(!readme2)} >
                                { readme2 ? 'Read Less' : 'Read More' }
                            </div>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}