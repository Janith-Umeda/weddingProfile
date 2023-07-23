import { Card } from "react-bootstrap";
import {motion} from 'framer-motion';
import {IoMdHeart} from 'react-icons/io'

function ItemCard({image,title,desc,venue}){
    return (
        <Card bg="light" style={{width:'85%'}} className="shadow h-100">
            <div className="reg-card-image-section">
                <Card.Img variant="top" src={image}/>
                <div className="reg-img-icon"><IoMdHeart/></div>
            </div>
            <Card.Body className="text-center mt-4">
                <h3 className="reg-card-title">{title}</h3>
                <p className="reg-card-desc">{desc}</p>
                <p className="reg-card-venue">{venue}</p>
            </Card.Body>
        </Card>
    );
}

export default function WhenWhere({data}){

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
            id="w_and_w" 
            className="where-section mt-3 mb-3 w-100"
            initial="hidden"
            variants={container}
            whileInView="visible"
        >
            <motion.h2 variants={item} className="waw-heading pt-3">When and Where</motion.h2>
            <div className="waw-container">
                <div className="waw-reg-sec row mx-0 gap-4 gap-sm-0">
                    {data.regCards.map((e,i)=>{
                        return (
                            <motion.div className="col-12 waw-col col-sm" variants={item} key={i}>
                                <ItemCard
                                    image={e.image}
                                    title={e.title}
                                    desc={e.desc}
                                    venue={e.venue}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <motion.h2 variants={item} className="waw-heading pt-5">Wedding Party</motion.h2>
            <motion.div 
                className="party-desc"
                initial="hidden"
                variants={container}
                whileInView="visible"
            >
                {data.partyDesc.map((e,i)=>{
                    return(
                        <motion.ul variants={item} key={i}>
                            <li>
                                <p>{e.heading}</p>
                                <motion.ul variants={item}>
                                    <li>{e.subheading}</li>
                                </motion.ul>
                            </li>
                        </motion.ul>
                    )
                })}
            </motion.div>
        </motion.div>
    );
}