import { useRef, useState } from 'react';
import {CgClose, CgMenu} from 'react-icons/cg';

export default function NavigationBar(){

    const [mobileToggle,setToggle] = useState(false);
    const [isClipped,setClipped] = useState(false);
    const navBar = useRef();

    window.onscroll = ()=>{
        const navAttachDim = navBar.current.getBoundingClientRect();
        if(navAttachDim.top < 0 ){
            if(!isClipped){
                setClipped(true);
            }
        }else{
            if(navAttachDim.bottom < 0){
                setClipped(true);
            }else{
                if(isClipped){setClipped(false)};
            }
        }
    }

    return (
        <div ref={navBar} style={{height:'71px'}}>
            <div className={`Navbar ${isClipped ? 'fixed-top' : ''}`} >
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
        </div>
    )
}
