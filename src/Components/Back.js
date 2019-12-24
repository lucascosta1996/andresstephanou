import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { I18nContext } from '../i18n'

const BackWrapper = styled.div`
  padding-bottom: 45px;
  padding-left: 25px;

  a {
    color: #000;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 14px!important;
    text-decoration: none;

    &:hover {
      color: #c3c3c3;
    }
  }
`

function Back(props) {
  const { translate } = useContext( I18nContext )

  return (
    <BackWrapper>
      <Link to={props.route}>
        {translate('back')}
      </Link>
    </BackWrapper>
  )
}

export default Back