import { useEffect } from "react";
import { gsap } from "gsap/gsap-core"
import './intro.css';

const Intro = ({ onIntroEnd })=> {
    useEffect( ()=> {
        gsap.to('.intro-container',{
            opacity:0,
            duration:1,
            delay:2,
            onComplete:onIntroEnd,
        })
    }, [onIntroEnd])

    
return(

    <div className="intro-container">
        <div className="intro-content">
            <h1>Bienvenido a mi pagina</h1>
            <p> Estamos cocinando algo delicioso para uds🍳 </p>
        </div>

    </div>
)

}

export default Intro