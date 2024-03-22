import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faLinux, faNodeJs, faPython, faReact, faUbuntu } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout (()=>{
           return setLetterClass('text-animate-hover')
       },3000)
   }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15} />
                </h1>
                <p>Hello there! I'm Dinesh, an enthusiastic engineering student currently pursuing my Bachelor's in Technology at Kumaraguru College of Technology. My journey is fueled by a profound passion for the intersection of Artificial intelligence and Data science. </p>
                <p>As a student in the field of Artificial intelligence and Data science, I am constantly intrigued by the limitless possibilities these domains offer. Currently fulfilling the role as a Graduation Innovation Trainee at Forge Innovations & Ventures, contributing to 
innovative projects and gaining practical experience. </p>
                <p>In addition to my curriculum, I have cultivated a strong interest in web development, mastering both front-end and back-end technologies. In addition to that I have gained knowledge in C and C++ programming languages. </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner cube1'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
                <div className='cube-spinner cube2'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#0000FF'/>
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faNodeJs} color='#90EE90'/>
                                                         </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faLinux} color='#000'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJava} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faDatabase} color='#0000ff'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faUbuntu} color='#F06529'/>
                    </div>
                </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default About