import React, { useContext } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../i18n'

const OptionsWrapper = styled.section`
  span {
    bottom: 40px;
    color: #000;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-weight: 400;
    position: fixed;
    right: 65px;
    text-transform: uppercase;
    transition: all ease .3s;
    z-index: 9999;

    &:hover {
      font-style: italic;
    }

    @media (max-width: 520px) {
      padding-left: 0;
      bottom: 10px;
      right: 15px;
    }
  }
`

function LanguageOptions () {
  const { langCode, dispatch } = useContext(I18nContext)
  
  const onLanguageSelect = e => {
    return dispatch({ type: "setLanguage", payload: e.target.innerHTML })
  }

  const renderOption = code => (
    <span
      onClick={ ( code ) => onLanguageSelect( code ) }
    >
      {code}
    </span>
  )

  return (
    <OptionsWrapper>
      {langCode === 'en' && renderOption("pt")}
      {langCode === 'pt' && renderOption("en")}
    </OptionsWrapper>
  )
}

export default LanguageOptions
