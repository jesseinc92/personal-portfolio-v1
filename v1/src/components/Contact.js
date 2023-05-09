import React from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import useForm from "../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
    width: ${({ mobile }) => mobile ? '100%' : '80%' };
    margin: auto;
    margin-top: ${({ mobile }) => mobile ? '2rem' : '10rem' };
    margin-bottom: 2rem;
  `

const ContactWrapper = styled.div`
    padding-top: ${({ mobile }) => mobile ? '1.25rem' : '0' };

    h2 {
      font-size: clamp(40px, 3.25vw, 54px);
      border-bottom: 5px solid var(--gray);
      margin-bottom: 2rem;
    }
    
    p {
      margin-bottom: 2rem;
      line-height: 1.5;
      padding: ${({ mobile }) => mobile ? '2rem 1.25rem 0' : '0' };
    }

    .form-wrapper {
      //display: flex;
      
      form {
        //${({ mobile }) => !mobile && 'width: 58%;'}
        background-color: var(--blue);
        padding: ${({ mobile }) => mobile ? '0' : '3rem' };

        .submit-btn {
          margin-left: ${({ mobile }) => mobile ? '1.25rem' : '0' };
          padding: 0.75rem 1.25rem;
          font-family: 'Stellar-bold', sans-serif;
          font-size: ${({ mobile }) => mobile ? '1rem' : '1.75rem' };
          letter-spacing: 1px;
          border: none;
          //border-radius: 0.25rem;
          background-color: var(--gold);
          color: var(--blue);
          cursor: pointer;
        }
      }
    }

    .contact-photo-wrapper {
      display: none;
      margin-left: auto;

      img {
        width: 100%;
        height: auto;
      }

      @media (min-width: 1001px) {
        //display: flex;
        width: 42%;
      }
    }
`

const SocialsWrapper = styled.div`
    padding: 1.25rem;
    padding-top: ${({ mobile }) => mobile ? '3rem' : '0' };
    background-color: var(--blue);
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: ${({ mobile }) => mobile ? '0 1.25rem' : '0' };
`

const TextInput = styled.input`
    padding: 0.25rem 0.75rem;
    line-height: 1.5;
    font-size: ${({ mobile }) => mobile ? '1rem' : '1.25rem' };
    outline: none;
    border: none;
    border-bottom: 2px solid white;
    caret-color: white;
    color: white;
    resize: none;

    background-color: var(--blue);
`

const Link = styled.a`
    text-decoration: none;
    margin-right: 1rem;
    color: inherit;
`

export default function Contact({ mobile }) {
  const [formData, setFormData, handleChange] = useForm({
    name: '',
    email: '',
    message: ''
  });

  const sendForm = e => {
    e.preventDefault();

    // CHANGE TO SEND FOR GREATER FORM CONTROL
    emailjs.send('service_p5aja52', 'template_xg4yf1l', formData, 'rdoo9mBzDUd_O-QaQ')
      .then((result) => {
        console.log('Message sent!');
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        console.log(error.text);
        console.log('Something went wrong!');
      });
  }
 
  return(
    <ContactSection id='contact' mobile={mobile}>
      <ContactWrapper mobile={mobile}>
        <h2>Say Hi</h2>
       
        <div className='form-wrapper'>
          <form onSubmit={sendForm}>
            <p>
              I'm currently open for opportunities and would love to help make
              your next project come to life. Say hi!
            </p>
            <InputGroup mobile={mobile}>
              <label htmlFor='name'>Name</label>
              <TextInput 
                mobile={mobile}
                id='name' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>

            <InputGroup mobile={mobile}>
              <label htmlFor='email'>Email</label>
              <TextInput 
                mobile={mobile}
                id='email' 
                name='email' 
                type='email' 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>

            <InputGroup mobile={mobile}>
              <label htmlFor='message'>Message</label>
              <TextInput 
                mobile={mobile}
                as='textarea' 
                id='message' 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                rows='3'
                required 
              />
            </InputGroup>

            <input className='submit-btn' type='submit' value='Send' />
          </form>
          
          <div className='contact-photo-wrapper'>
            <img src='/static/assets/pexels-clutter.jpg' alt='Coffee and computer by Mikhail Nilov' />
          </div>
        </div>

        

        <SocialsWrapper mobile={mobile}>
          <Link href='https://github.com/jesseinc92' target='_blank'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </Link>
          <Link href='https://www.linkedin.com/in/jessehillweb/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
          </Link>
        </SocialsWrapper>
      </ContactWrapper>
    </ContactSection>
  )
}