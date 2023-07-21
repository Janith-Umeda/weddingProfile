import { useState } from "react"

export default function CountDown({time}){

    time = 'Jul 21, 2023 23:45:00';
    const [month,setMonth] = useState();
    const [day,setDay] = useState();
    const [hours,setHours] = useState();
    const [minute,setMinute] = useState();
    const [sec,setSec] = useState();

    const cd = new Date(time).getTime();

    function resolz(t){
        return t < 10 ? `0${t}` : t;
    }

    const tick = setInterval(()=>{
        const dist = cd - new Date().getTime();
        const dobj = new Date(dist);

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        setMonth(dobj.getMonth());
        setDay(dobj.getDate());
        setHours(dobj.getHours());
        setMinute(dobj.getMinutes());
        setSec(dobj.getSeconds());

        if(dist < 0){
            clearInterval(tick);
        }

    },1000);

    return (
        <div className="timer-section mt-5 mb-5">
            <div className="timer-wrap">
                <div className="timer">
                    <div className="tick">
                        <span className="tick-number">{resolz(month)}</span>
                        <span className="tick-name">months</span>
                    </div>
                    <div className="tick">
                        <span className="tick-number">{resolz(day)}</span>
                        <span className="tick-name">days</span>
                    </div>
                    <div className="tick">
                        <span className="tick-number">{resolz(hours)}</span>
                        <span className="tick-name">hours</span>
                    </div>
                    <div className="tick">
                        <span className="tick-number">{resolz(minute)}</span>
                        <span className="tick-name">minutes</span>
                    </div>
                    <div className="tick">
                        <span className="tick-number">{resolz(sec)}</span>
                        <span className="tick-name">seconds</span>
                    </div>
                </div>
            </div>
        </div>
    )
}