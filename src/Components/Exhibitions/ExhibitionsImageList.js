import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { exhibitionsList } from './exhibitionsList'

const ExhibitionsImagesWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 8%;

  .show {
    margin-bottom: 30px;
    max-width: 500px;
    position: relative;

    img {
      display: block;
      max-width: 500px;
      transition: all .3s ease;
    }

    .title {
      align-items: center;
      font-family: 'Source Sans Pro', sans-serif;
      display: flex;
      height: 100%;
      position:absolute;
      top: 0;
      transition: all .3s ease;
      width: 100%;
      z-index: 1;

      &:hover {
        background-color: rgba(120, 120, 120, 0.8);

        span {
          display: inline;
          color: #fff;
          opacity: 1;
        }
      }

      span {
        display: none;
        margin: auto;
      }
    }
  }
`

function ExhibitionsImagesList (props) {
  return (
    <ExhibitionsImagesWrapper>
      {
        exhibitionsList.map( item => (
          <Link
            className="show"
            to={`/exhibitions/${item.route}`}
          >
            <img src={require(`../../assets/${item.image}`)} />
            <div className="title">
              <span>{item.name}</span>
            </div>
          </Link>
        ) )
      }
    </ExhibitionsImagesWrapper>  
  )
}

export default ExhibitionsImagesList