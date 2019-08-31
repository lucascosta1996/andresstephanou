import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { exhibitionsList } from './exhibitionsList'

const ExhibitionsImagesWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  left: 0;
  padding: 0 35px;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    top: 280px;
    padding: 50px 0 0;
    position: initial;
  }

  @media (max-width: 520px) {
    padding: 0 20px;
    padding-top: 40px;
  }

  .showLink {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
    
    .show {
      margin-bottom: 15px;
      max-width: 500px;
      position: relative;

      @media (max-width: 520px) {
        max-width: 100%;
        width: 100%;
      }
  
      img {
        display: block;
        max-width: 400px;
        transition: all .3s ease;

        @media (max-width: 520px) {
          max-width: 100%;
          width: 100%;
        }
      }
  
      .hover {
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
        }
      }
    }
  }

  .showTitle {
    color: #000;
    font-size: 14px;
    margin: auto;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s ease;

    &:hover {
      color: rgba(120, 120, 120, 0.8);
    }
  }
`

function ExhibitionsImagesList (props) {
  return (
    <ExhibitionsImagesWrapper>
      {
        exhibitionsList.map( item => (
          <div className="showLink">
            <Link
              className="show"
              to={`/exhibitions/${item.route}`}
            >
              <img src={require(`../../assets/${item.image}`)} />
              <div className="hover" />
            </Link>
            <Link
              className="showTitle"
              to={`/exhibitions/${item.route}`}
            > 
              {item.name}
            </Link>
          </div>
        ) )
      }
    </ExhibitionsImagesWrapper>  
  )
}

export default ExhibitionsImagesList