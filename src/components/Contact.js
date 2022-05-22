import React from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import useForm from "../hooks/useForm";

const ContactSection = styled.section`
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;
  `

const ContactWrapper = styled.div`
    padding: 1.25rem;
    background-color: lightgray;

    h2 {
      font-size: 2.5rem;
    }

    .form-wrapper {
      p {
        margin: 1rem auto;
      }
    }
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`

const TextInput = styled.input`
    padding-left: 0.75rem;
    line-height: 1.5;
    font-famiy: 'Source Sans Pro', sans-serif !important;
    font-size: 1rem;
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
    <ContactSection id='contact'>
      <ContactWrapper mobile={mobile}>
        <h2>Say Hi.</h2>

        <div className='form-wrapper'>
          <p>
            I'm currently open for opportunities and would love to help make
            your next project come to life. Say hi!
          </p>

          <form onSubmit={sendForm}>
            <InputGroup>
              <label htmlFor='name'>Name</label>
              <TextInput 
                id='name' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor='email'>Email</label>
              <TextInput 
                id='email' 
                name='email' 
                type='email' 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor='message'>Message</label>
              <TextInput 
                as='textarea' 
                id='message' 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </InputGroup>

            <input type='submit' value='Send' />
          </form>
        </div>
      </ContactWrapper>
    </ContactSection>
  )
}