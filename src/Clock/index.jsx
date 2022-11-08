import React, {useRef,useEffect, useState} from 'react';
import './style.css'
const Clock = () => {
    const [theme, setTheme] = useState("light-Theme");
    const [date, setDate] = useState(new Date());
    const clock = useRef(null);
    const hour = useRef(null);
    const min = useRef(null);
    const sec = useRef(null);
    const button = useRef(null);

    const toggleTheme = ()=>{
     theme==="light-Theme"?
     
        setTheme("dark-Theme")
        :
        setTheme("light-Theme")
    }
    const setClock=()=>{
      
      let hh = date.getHours() * 30;
        let mm = date.getMinutes() * 6;
        let ss = date.getSeconds() * 6;
        hour.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        min.current.style.transform = `rotateZ(${mm}deg)`;
        sec.current.style.transform = `rotateZ(${ss}deg)`;
     
    }
 
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      document.body.className = theme;
        button.current.innerHTML=theme;
        console.log(theme);
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, [theme]);

    useEffect(() => {
      setClock();
    }, [date])
    
   
  return (
    <> 
    <div className="page-header" > Analog Clock </div>
    <div className="border">
    <div className="clock"  ref={clock}>
        <div className="hour" ref={hour}></div>
        <div className="min" ref={min}></div>
        <div className="sec" ref={sec}></div>
    </div>
    </div>
    <div className="switch-cont">
        <button className="switch-btn" ref={button} onClick={toggleTheme}> Light </button>
    </div>
    <h5>developed with <span></span> by <a href="https://github.com/jitendra-codes" target="blank" >jitendra</a> </h5>
    </>
  )
}

export default Clock;