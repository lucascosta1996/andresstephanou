import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../i18n'
import close from '../assets/icons/close.png'

const NavigationWrapper = styled.nav`
  ${props => props.isOpened && `background-color: #fff;`}
  ${props => props.isOpened && `width: 100%; height: 200px;`}
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  position: relative;
  overflow: hidden;
  text-align: left;
  z-index: 2;

  @media ( min-width: 768px ) {
    position: fixed;
    width: 100%;
  }

  @media ( max-width: 520px ) {
    flex-direction: column;
    height: auto;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 100%;
  }
  
  h1,
  a {
    color: #000;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin: 0 8px;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      text-decoration: underline;
    }

    @media ( max-width: 520px ) {
      font-size: 18px!important;
      margin-left: 0;
    }
  }

  .title {
    margin: 0!important;
    padding-left: 50px;

    @media ( max-width: 520px ) {
      padding-left: 20px;
    }

    a {
      font-size: 20px;
      margin: 0!important;
    }
  }

  .active {
    text-decoration: underline;
  }

  .navigation {
    align-items: baseline;
    display: flex;
    padding-right: 25px;

    @media ( max-width: 520px ) {
      ${props => !props.isOpened && `display: none;`}
    }

    @media ( max-width: 520px ) {
      flex-direction: column;
      padding-left: 20px;
    }
  }

  .close {
    position: fixed;
    right: 23px;
    top: 24px;
    width: 15px;
  }
`

const VeganBurguerIcon = styled.div`
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 20px;
  top: 18px;

  @media ( min-width: 520px ) {
    display: none;
  }
`

const OptionsWrapper = styled.section`
  span {
    color: #000;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding-left: 35px;
    padding-right: 25px;
    text-transform: uppercase;
    transition: all ease .3s;

    &:hover {
      font-style: italic;
    }

    @media (max-width: 520px) {
      padding-left: 0;
    }
  }
`

const Navigation = props => {
  const { translate } = useContext(I18nContext)
  const { langCode, dispatch } = useContext(I18nContext)
  const [ active, setActive ] = useState( '' )
  const [ open, setOpen ] = useState( false )
  const isActive = ( path ) => window.location.href.indexOf( path ) > 1

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
    <NavigationWrapper
      isOpened={ open }
    >
      <h1 className="title" onClick={ () => setActive( '/' ) }>
        <Link to="/">
          { 'ANDRÉS STEPHANOU' }
        </Link>
      </h1>
      <div className="navigation">
        <Link
          to="/exhibitions"
          className={ `${ isActive( 'exhibitions' ) ? 'active' : '' }` }
          onClick={ () => { setActive( 'exhibitions' ); setOpen( false ); } }
        >
          { translate('exhibitions') }
        </Link>
        <Link
          to="/contact"
          className={ `${isActive( 'contact' ) ? 'active' : ''}` }
          onClick={ () => { setActive( 'contact' ); setOpen( false ); } }
        >
          { translate('contact') }
        </Link>
        <OptionsWrapper>
          {langCode === 'en' && renderOption("pt")}
          {langCode === 'pt' && renderOption("en")}
        </OptionsWrapper>
      </div>
      <VeganBurguerIcon
        onClick={ () => setOpen( !open ) }
      >
        {
          open ? (
            <img className="close" src={ close } />
          ) : (
            <Fragment>
              <div>&#9776;</div>
            </Fragment>
          )
        }
      </VeganBurguerIcon>
    </NavigationWrapper>
  )
}

export default Navigation;