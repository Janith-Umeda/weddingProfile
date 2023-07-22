import { useEffect, useState } from "react";
import moment from 'moment';
import {motion} from 'framer-motion';

export default function CountDown({time}){

    const targetTime = moment(time? time :'2023-09-30T00:00:00');
    const [currentTime,setCurrTime] = useState();
    const timeDis = moment.duration(targetTime.diff(currentTime));

    const container = {
        hidden: { opacity: 1, },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
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

    function resolz(t){
        return t < 10 ? `0${t}` : t;
    }

    useEffect(()=>{
        
        const tick = setInterval(()=>{
            if(timeDis.seconds() >= -1){
                setCurrTime(moment());
            }
        },1000);
        return ()=>{clearInterval(tick);}
    },[timeDis])

    return (
        <div className="timer-section mt-5 mb-5">
            <div className="timer-wrap" 
                style={{opacity:timeDis.seconds() < 0 ? 0 : 1}}
            >
                <motion.div 
                    className="timer"
                    initial="hidden"
                    variants={container}
                    whileInView="visible"
                >
                    <motion.div className="tick" variants={item}>
                        <span className="tick-number">{resolz(timeDis.months())}</span>
                        <span className="tick-name">months</span>
                    </motion.div>
                    <motion.div className="tick" variants={item}>
                        <span className="tick-number">{resolz(timeDis.days())}</span>
                        <span className="tick-name">days</span>
                    </motion.div>
                    <motion.div className="tick" variants={item}>
                        <span className="tick-number">{resolz(timeDis.hours())}</span>
                        <span className="tick-name">hours</span>
                    </motion.div>
                    <motion.div className="tick" variants={item}>
                        <span className="tick-number">{resolz(timeDis.minutes())}</span>
                        <span className="tick-name">minutes</span>
                    </motion.div>
                    <motion.div className="tick" variants={item}>
                        <span className="tick-number">{resolz(timeDis.seconds() < 0? 0 : timeDis.seconds())}</span>
                        <span className="tick-name">seconds</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}