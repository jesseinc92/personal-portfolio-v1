import React from "react";
import styled from "styled-components";

export default function Contact() {

  const Contact = styled.section`
    width: 100vw;
    max-width: 1440px;
    margin: auto;
  `

  const InputGroup = styled.div`
  
  `

  const Label = styled.label`
  
  `

  const Input = styled.input`
  
  `

  return(
    <Contact>
      <h1>Say Hi</h1>

      <div>
        <form>
          <InputGroup>
            <Label>Name</Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <Label>Message</Label>
            <Input />
          </InputGroup>
        </form>
      </div>
    </Contact>
  )
}