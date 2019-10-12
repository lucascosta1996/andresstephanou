import React, { useContext } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../i18n'

const ContactWrapper = styled.div`
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;

  .artistInfo {
    padding-bottom: 16px;
    text-align: left;

    span {
      display: block;
    }
  }

  .download {
    color: #000;
    font-size: 14px;
    padding: 20px 0;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #90F7FF;
    }
  }

  .mail {
    color: #000000;
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #90F7FF;
    }
  }
`

function Contact( props ) {
  const { translate } = useContext(I18nContext)

  return (
    <ContactWrapper>
      <div className="artistInfo">
        <span>
          {translate('artist')}
        </span>
        <span>
          {translate('birth')}
        </span>
      </div>
      <section>
        <div>
          <a className="mail" href="mailto:contact@andres-stephanou.com" target="_top">contact@andres-stephanou.com</a>
        </div>
      </section>
    </ContactWrapper>
  )
}

export default Contact