import React, { useContext } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../i18n'

const ContactWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  justify-content: center;
  margin: auto;
  max-width: 50%;
  padding-top: 250px;

  span, h2 {
    display: block;
    margin: 2px 0px;
  }

  .artistInfo {
    padding-bottom: 40px;
    text-align: left;
    max-width: 60%;

    span {
      padding: 6px 0;
    }

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
    font-size: 14px;
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
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #595959;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
  }

  .emailContainer {
    padding-bottom: 100px;
  }

  .aboutTextContainer {
    padding-bottom: 100px;
    p {
      margin: auto;
      padding: 4px 0;
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
      <section className="emailContainer">
        <div className="flex">
          <a className="mail" href="mailto:contact@andres-stephanou.com" target="_top">contact@andres-stephanou.com</a>
        </div>
      </section>
      <section className="aboutTextContainer">
        <p>{translate('aboutp1')}</p>
        <p>{translate('aboutp2')}</p>
        <p>{translate('aboutp3')}</p>
      </section>
    </ContactWrapper>
  )
}

export default Contact