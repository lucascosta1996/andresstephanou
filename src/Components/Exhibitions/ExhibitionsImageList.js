import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { exhibitionsList } from './exhibitionsList'

const ExhibitionsImagesWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  left: 0;
  padding: 0 35px;
  position: absolute;
  margin: 0 auto;
  max-width: 1000px;
  right: 0;
  top: 200px;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }

  @media (min-width: 1367px) {
    justify-content: space-between;
  }

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
    margin-bottom: 120px;

    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }

    &:hover {
      .showTitle {
        color: #90F7FF;
      }
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

        @media (min-width: 1367px) {
          max-width: 420px;
        }

        @media (min-width: 1599px) {
          max-width: 470px;
        }

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
    font-size: 12px;
    margin: auto;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease;

    @media (max-width: 520px) {
      font-size: 14px;
    }

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
              to={`/work/${item.route}`}
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