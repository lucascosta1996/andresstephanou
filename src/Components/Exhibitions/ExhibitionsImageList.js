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
  padding-bottom: 355px;
  position: absolute;
  margin: 0 auto;
  max-width: 1360px;
  right: 0;
  top: 355px;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }

  @media (min-width: 1367px) {
    top: 300px;
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
    margin-bottom: 60px;

    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }

    &:hover {
      .showTitle {
        color: #595959;
      }
    }
    
    .show {
      margin-bottom: 15px;
      max-width: 650px;
      position: relative;

      @media (max-width: 1368px) {
        max-width: 600px;
      }

      @media (max-width: 520px) {
        max-width: 100%;
        width: 100%;
      }
  
      img {
        display: block;
        max-width: 100%;
        transition: all .3s ease;

        @media (min-width: 1599px) {
          max-width: 470px;
        }

        @media (min-width: 1367px) {
          max-width: 100%;
        }


        @media (max-width: 520px) {
          max-width: 100%;
          width: 100%;
        }
      }

      .hover {
        opacity: 0;
        position: absolute;
        z-index: 0;
      }

      &:before {
        background-color: rgba(0,0,0, 0.4);
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        z-index: -1;
      }
  
      &:hover {
        &:before {
          background-color: rgba(0,0,0, 0.4);
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          transition: all .3s ease;
          z-index: 1;
        }

        .hover {
          color: #FFF;
          font-family: 'Source Sans Pro',sans-serif;
          height: max-content;
          position: absolute;
          top: 0;
          left: 0;
          margin: auto;
          bottom: 0;
          right: 0;
          transition: all .3s ease;
          width: 100%;
          opacity: 1;
          text-align: center;
          z-index: 2;
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
      color: #595959;
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
              <div className="hover">{item.name}</div>
            </Link>
          </div>
        ) )
      }
    </ExhibitionsImagesWrapper>  
  )
}

export default ExhibitionsImagesList