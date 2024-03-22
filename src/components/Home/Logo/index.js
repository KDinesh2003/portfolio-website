import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
// import { useEffect, useRef } from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
// import gsap from 'gsap-trial';


const Logo = () => {

    return (
        <div className='logo-container'>
            <img  className='solid-logo' src = {LogoS} alt='S' />

        </div>

        

    )

}
export default Logo