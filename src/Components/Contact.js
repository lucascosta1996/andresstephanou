import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;

  .mail {
    color: #000;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
  }
`

function Contact( props ) {
  return (
    <ContactWrapper>
      <a className="mail" mailto="andres@mail.com">contact@andres-stephanou.com</a>
    </ContactWrapper>
  )
}

export default Contact