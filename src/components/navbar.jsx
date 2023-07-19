
import { useState } from 'react';
import {CgClose, CgMenu} from 'react-icons/cg';

export default function NavigationBar(){

    const [mobileToggle,setToggle] = useState(false);

    return (
        <div className="Navbar">
            <div className="nav-content">
                <div className="wrapper">
                    <div className="brand">
                        <a href="/">
                            <img 
                                src="/images/SK-1.png"  
                                alt="brand"
                                width="50"
                                height="50"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div className="mobile-toggle" onClick={()=>setToggle(!mobileToggle)}>
                        {mobileToggle ? (
                            <CgClose/>
                            ) : (
                            <CgMenu/>
                        ) }
                    </div>
                    <div className={`links ${mobileToggle ? 'mobile shadow' : ''} d-none d-lg-flex`}>
                        <div><a className="links-item" href="#intro">Home</a></div>
                        <div><a className="links-item" href="#g_and_b">Groom & Bride</a></div>
                        <div><a className="links-item" href="#w_and_w">When & Where</a></div>
                        <div><a className="links-item" href="#gallery">Gallery</a></div>
                    </div>
                    <div className="ribbon">
                        <a href="#rsvp" className="ribbon-menu">
                            <span>RSVP</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
