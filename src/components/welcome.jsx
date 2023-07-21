import {motion} from 'framer-motion';

export default function Welcome({data}){

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
        <div className="welcome-section">
            <motion.div 
                className="welcome-heading"
                initial="hidden"
                variants={container}
                whileInView="visible"
            >
                <motion.h2
                    variants={item}
                >
                    {data.heading}
                </motion.h2>
                <motion.p
                    variants={item}
                >
                    {data.description}
                </motion.p>
            </motion.div>
            <motion.div
                className="couple mt-4 mb-4"
                initial="hidden"
                whileInView="visible"
                variants={container}
            >
                <motion.div variants={item} className="text-center">
                    <img src={data.groom?.image} width="260" height="260" alt="groom" />
                    <h5>{data.groom?.name}</h5>
                </motion.div>
                <motion.img variants={item} src="/images/andSep.png" width="160" height="100" alt="and" />
                <motion.div variants={item} className="text-center">
                    <img src={data.bride?.image} width="260" height="260" alt="bride" />
                    <h5>{data.bride?.name}</h5>
                </motion.div>
            </motion.div>
            <motion.div 
                className="footer"
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                <motion.h4 variants={item}>Are getting married</motion.h4>
                <motion.h5 variants={item}>
                    {`on ${data.date} - ${data.venue}`}
                </motion.h5>
            </motion.div>
        </div>
    );
}