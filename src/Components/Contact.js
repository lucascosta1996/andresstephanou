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
    text-align: left;

    span {
      display: block;
    }
  }

  .download {
    color: #BCBCBF;
    font-size: 14px;
    padding: 20px 0;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }

  .mail {
    color: #BCBCBF;
    font-family: 'Source Sans Pro', sans-serif;
    padding-left: 10px;
    text-decoration: none;

    &:hover {
      color: #000;
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
      <a className="download" target="_blank" href={require('../assets/downloads/Andrés Stephanou - Curriculum Vitae (PDF).pdf')}>
        Download CV
      </a>
      <section>
        <div>
          {translate('info')}<a className="mail" href="mailto:contact@andres-stephanou.com" target="_top">contact@andres-stephanou.com</a>
        </div>
      </section>
    </ContactWrapper>
  )
}

export default Contact