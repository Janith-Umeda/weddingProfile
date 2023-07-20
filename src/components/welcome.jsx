import {motion} from 'framer-motion';

export default function Welcome(){

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
                    Welcome to our wedding website.
                </motion.h2>
                <motion.p
                    variants={item}
                >
                    we can’t wait to celebrate our special day with you. 
                    We’ve created this website as a convenient and interactive way to 
                    share all of the important details with you in the lead up to our 
                    wedding. Thank you for your ongoing love and support. We are so 
                    excited to share this day with you!
                </motion.p>
            </motion.div>
            <motion.div
                className="couple"
                initial="hidden"
                whileInView="visible"
                variants={container}
            >
                <motion.div variants={item} className="text-center">
                    <img src="/images/p1.jpg" width="260" height="260" alt="groom" />
                    <h5>KUSAL LAKSHAN</h5>
                </motion.div>
                <motion.img variants={item} src="/images/andSep.png" width="160" height="100" alt="and" />
                <motion.div variants={item} className="text-center">
                    <img src="/images/p2.jpg" width="260" height="260" alt="bride" />
                    <h5>SASANI JAYASINGHE</h5>
                </motion.div>
            </motion.div>
            <motion.div 
                className="footer"
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                <motion.h4 variants={item}>Are getting married</motion.h4>
                <motion.h5 variants={item}>on 10 December,2022 - Hilton,Colombo</motion.h5>
            </motion.div>
        </div>
    );
}