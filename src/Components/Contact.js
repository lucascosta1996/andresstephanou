import React, { useContext } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../i18n'

const ContactWrapper = styled.div`
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 12px;
  justify-content: center;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;

  span, h2 {
    display: block;
    margin: 18px 0px;
  }

  .artistInfo {
    padding-bottom: 28px;
    text-align: left;

    @media (max-width: 520px) {
      padding-left: 15px;
    }
  }

  section {
    @media (max-width: 520px) {
      padding-left: 15px;
    }

    h2 {
      font-size: inherit;
    }
  }

  .download {
    color: #000;
    font-size: 12px;
    padding: 20px 0;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #595959;
    }
  }

  .mail {
    color: #000000;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #595959;
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
        <h2>
          Contact
        </h2>
        <div>
          <a className="mail" href="mailto:contact@andres-stephanou.com" target="_top">contact@andres-stephanou.com</a>
        </div>
        <span>
          <a className="mail" href="https://palacio.xyz" target="_blank">Galeria Palácio</a>
        </span>
      </section>
    </ContactWrapper>
  )
}

export default Contact