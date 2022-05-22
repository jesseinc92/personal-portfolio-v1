import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
    width: 100%;
    margin: auto;
    height: 100vh;
    max-height: 900px;

    .contact-wrapper {
      
    }

    label {

    }

    .text-input {
      
    }
  `

const ContactWrapper = styled.div`
    padding: 1.25rem;
    background-color: lightgray;

    h2 {
      font-size: 2.5rem;
    }
`

const InputGroup = styled.div`

`

const TextInput = styled.input`

`

export default function Contact({ mobile }) {
  return(
    <ContactSection id='contact'>
      <ContactWrapper mobile={mobile}>
        <h2>Say Hi.</h2>

        <div>
          <form>
            <InputGroup>
              <label>Name</label>
              <TextInput />
            </InputGroup>

            <InputGroup>
              <label>Email</label>
              <TextInput />
            </InputGroup>

            <InputGroup>
              <label>Message</label>
              <TextInput as='textarea' />
            </InputGroup>
          </form>
        </div>
      </ContactWrapper>
    </ContactSection>
  )
}