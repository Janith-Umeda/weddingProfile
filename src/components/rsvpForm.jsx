import {motion,useScroll} from 'framer-motion';

export default function RSVPForm(){

    const {scrollY} = useScroll();

    return(
        <div className="rsvp-form" id="rsvp">
            <div className="rsvp-heading">
                <h2>RSVP</h2>
                <p>We'd love it if you could join us on our wedding day, so please let us know as soon as possible if you are or are not able to attend. Please RSVP by 26th November 2022</p>
            </div>
            <div className="rsvp-container">
                <motion.img 
                    src="/images/rsvp.jpg" 
                    alt="bgImage" 
                    className="rsvp-bg-image"
                    // style={{translateY:scrollY}}
                    loading='lazy'
                />
            </div>
        </div>
    );
}