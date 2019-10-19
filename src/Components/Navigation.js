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
  padding-top: 25px;
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
    font-size: 14px;
    font-weight: 400;
    margin: 0 8px;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #90F7FF;
    }

    @media ( max-width: 520px ) {
      font-size: 16px!important;
      margin-left: 0;
    }
  }

  .title {
    margin: 0!important;
    padding-left: 25px;

    @media ( max-width: 520px ) {
      padding-left: 20px;
    }

    a {
      font-size: 16px;
      margin: 0!important;
    }
  }

  .active {
    color: #90F7FF;
  }

  .navigation {
    align-items: flex-end;
    display: flex;
    padding-right: 25px;

    @media ( max-width: 520px ) {
      ${props => !props.isOpened && `display: none;`}
    }

    @media ( max-width: 520px ) {
      align-items: flex-start;
      flex-direction: column;
      padding-left: 20px;
    }
  }

  .close {
    position: fixed;
    right: 25px;
    top: 24px;
    width: 15px;
  }
`

const VeganBurguerIcon = styled.div`
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 25px;
  top: 18px;

  @media ( min-width: 520px ) {
    display: none;
  }
`

const Navigation = props => {
  const { translate } = useContext(I18nContext)
  const [ active, setActive ] = useState( '' )
  const [ open, setOpen ] = useState( false )
  const isActive = ( path ) => window.location.href.indexOf( path ) > 1

  return (
    <NavigationWrapper
      isOpened={ open }
    >
      <h1 className="title" onClick={ () => setActive( '/' ) }>
        <Link to="/home">
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