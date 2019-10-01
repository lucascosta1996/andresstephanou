import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../../i18n/index'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ExhibitionWrapper = styled.div`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 100px;

  @media (max-width: 520px) {
    position: initial;
    max-width: 90%;
  }

  .title {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    font-weight: 300;
    padding-bottom: 40px; 

    @media (max-width: 520px) {
      font-size: 18px;
      padding-top: 40px;
    }
  }

  .text {
    text-align: left;
    margin: auto;

    &__paragraph {
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 16px;
      font-weight: 300;
      margin: auto;
      max-width: 60%;
      padding: 6px;
      text-align: left;
  
      @media (max-width: 520px) {
        font-size: 14px;
        max-width: 90%;
      }
    }

    &__pressRelease {
      margin: auto;
      max-width: 60%;
      padding-top: 10px;

      a {
        color: #6278DC;
        text-align: left;
        text-decoration: none;
        transition: all .3s ease;

        &:hover {
          color: #6278FF;
        }
      }
    }
  }

  .video-andres {
    width: 60%;
    margin: auto;
    outline: none;

    @media (max-width: 520px) {
      width: 90%;
    }
  }

  .video1 {
    margin-top: 50px;
  }

  .video2 {
    margin-top: 30px;
    width: 100%;
  }

  .images {
    margin: auto;
    max-width: 60%;
    padding-bottom: 120px;
    padding-top: 30px;

    @media (max-width: 520px) {
      max-width: 90%;
    }

    @media (max-width: 520px) {
      padding-top: 0;
    }

    div {
      max-width: 100%;

      img {
        max-width: 100%;
        padding-top: 20px;
      }
    }
  }
`

function Exhibition (props) {
  const { translate } = useContext(I18nContext)
  const firstParagraph = useRef()
  const secondParagraph = useRef()
  const thirdParagraph = useRef()
  const fourthParagraph = useRef()
  useEffect(() => {
    window.scrollTo(0, 0)
    firstParagraph.current.innerHTML = firstParagraph.current.innerHTML
    .replace(/Sistemas e Processos/g, `<i>Sistemas e processos</i>`)
    .replace(/Organismo Digital/g, `<i>Organismo Digital</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/Partículas de Luz 1/g, `<i>Partículas de Luz 1</i>`)
    .replace(/Partículas de Luz 2/g, `<i>Partículas de Luz 2</i>`)
    .replace(/Micropartículas/g, `<i>Micropartículas</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/1 minuto/g, `<i>1 minuto</i>`)
    .replace(/Partículas de Luz 3/g, `<i>Partículas de Luz 3</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/\(VR\)/g, `<i>(VR)</i>`)
  });

  const Image = ({ image }) => (
    <div>
      <LazyLoadImage
        alt={image.alt}
        src={require(`../../assets/exhibitions/${image.src}`)} // use normal <img> attributes as props
      />
    </div>
  )

  return (
    <ExhibitionWrapper>
      <h2 className="title">
        {props.show.name}
      </h2>
      <section className="text">
        <p className="text__paragraph" ref={ firstParagraph }>
          {translate(props.show.paragraph1)}
        </p>
        <p className="text__paragraph" ref={ secondParagraph }>
          {translate(props.show.paragraph2)}
        </p>
        <p className="text__paragraph" ref={ thirdParagraph }>
          {translate(props.show.paragraph3)}
        </p>
        <p className="text__paragraph" ref={ fourthParagraph }>
          {translate(props.show.paragraph4)}
        </p>
        <p className="text__pressRelease">
          <a href={ `https://palacio.xyz/exhibitions/${props.show.pressRelase}` }>
            {translate('pressRelease')}
          </a>
        </p>
      </section>
      {
          props.show.video1 && (
            <video className="video-andres video1" muted controls disablePictureInPicture controlsList="nodownload" type="video/webm">
              <source src= { props.show.video1 } type="video/mp4" />
              <p>Your browser does not support the video element.</p>
            </video>
          )
        }
      <div className="images">
        {
          props.show.images.map( item => (
            <Image image={ item } />
          ) )
        }
        {
          props.show.video2 && (
            <video className="video2" muted controls disablePictureInPicture controlsList="nodownload" src={ props.show.video2 } type="video/webm">
              <source src= { props.show.video2 } type="video/mp4" />
              <p>Your browser does not support the video element.</p>
            </video>
          )
        }
      </div>
    </ExhibitionWrapper>
  )
}

export default Exhibition