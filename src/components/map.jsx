import {motion} from 'framer-motion';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

export default function Map({location}){

    const [isMapLoading,setLoading] = useState(true);

    const container = {
        hidden: { opacity: 1, },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
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
        <motion.div 
            className="map-container mt-4"
            initial="hidden"
            variants={container}
            whileInView="visible"
        >
            <motion.h2 className="map-heading" variants={item}>Map</motion.h2>
            <motion.p className="map-desc" variants={item}>Getting to the “Blue Reception” at the Hilton Hotel – Colombo is pretty easy. But to avoid any issues, please use the following map to guide your there!</motion.p>
            <motion.div 
                className="map-responsive mt-4"
                variants={item}
            >
                <div className={`${isMapLoading ? 'd-flex' : 'd-none'} loader`}>
                    <Spinner/>
                </div>
                <iframe
                    title="Map"
                    src={location} 
                    width="600" height="400"
                    style={{
                        border:0,
                        width:'100%',
                        opacity:isMapLoading ? 0 : 1
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={()=>{setLoading(false)}}
                >
                </iframe>
            </motion.div>
        </motion.div>
    )
}