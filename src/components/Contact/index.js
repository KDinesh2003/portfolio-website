import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Home/Logo';
import { toast } from 'react-toastify';


const Contact = ()=> {
    const form = useRef();
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout (()=>{
           return setLetterClass('text-animate-hover')
       },3000)
   }, [])


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_8leq0ve', 'template_dfma95q', form.current, 
          'oFYip3GJEf24zEeXE')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
       form.current.reset()   
        );
    };
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    

    
    return(
        <>
        <div className='container contact-page'>
            
        <div className='text-zone'>
            <h1>
            <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['L', 'e', 't', "'", 's', ' ', 'T', 'a', 'l', 'k', '!']}
                    idx={15} />
    
            </h1>
            <p>
              Send me a Message!
            </p>
            <p>
            Demonstrated great academic performance throughout Class 10 and Class 12, achieving good scores that reflect commitment and proficiency.
            </p>
            <p>
              I am passionate about working in positions involving Full stack development or Machine Learning.
              Let's Have a Word!
            </p>
            <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}  >

          <ul>
            <li className='half'>
            <input type="text" placeholder='Name' id="user_name" name="user_name" required  />
            </li>
            <li className='half'>
            <input type="email" placeholder='Email' id="user_email" name="user_email" required />
            </li>
            <li >
            <input type="text" id="subject" placeholder='Subject' name="subject" />
            </li>
            <li >
            <textarea id="message" placeholder='Message' name="message" required></textarea>
            </li>
            <li>
              <button onClick={() => toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Sending Message',
      success: 'Message Sent',
      error: 'Error Redsend '
    }
)} type='submit' className='flat-button' value="Send">Send</button>
            </li>
            
          </ul>
    
              </form>
          </div>
        </div>
        <Logo />
      </div>
            <Loader type='pacman'/>
        </>
    )
}
export default Contact