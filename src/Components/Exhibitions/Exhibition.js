import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../../i18n/index'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import ReactPlayer from 'react-player'
import play from '../../assets/exhibitions/icons/play.gif'
import { isMobile } from '../../helpers/helpers'

const ExhibitionWrapper = styled.div`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 130px;

  @media (max-width: 520px) {
    position: initial;
    max-width: 90%;
  }

  @media (min-width: 520px) {
    padding-bottom: 40px;
  }

  .title {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin: 0 auto;
    max-width: 60%;
    padding-bottom: 30px;
    text-align: left;

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
      font-size: 14px;
      font-weight: 300;
      margin: auto;
      max-width: 60%;
      padding: 4px;
      text-align: left;
  
      @media (max-width: 520px) {
        font-size: 14px;
        max-width: 90%;
      }
    }

    &__pressRelease {
      font-size: 14px;
      margin: auto;
      max-width: 60%;
      padding-top: 10px;

      @media (max-width: 520px) {
        max-width: 90%;
      }

      &__readMore {
        display: block;
      }

      a {
        color: #595959;
        text-align: left;
        text-decoration: none;
        transition: all .3s ease;

        &:hover {
          color: #000;
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

  .images {
    margin: auto;
    max-width: 60%;
    padding-bottom: 150px;
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

  .videoImg {
    position: relative;
  }

  .video1 {
    padding-top: 20px!important;
  }

  .play-icon {
    bottom: 0;
    cursor: pointer;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: 0;
    transition: .3s ease;
    width: 80px;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 520px) {
      width: 40px;
    }
  }
`

function Exhibition (props) {
  const [ showVideo1, setShowVideo1 ] = useState(false)
  const [ showVideo2, setShowVideo2 ] = useState(false)
  const { translate } = useContext(I18nContext)
  const video1Ref = useRef()
  const video2Ref = useRef()
  const firstParagraph = useRef()
  const secondParagraph = useRef()
  const thirdParagraph = useRef()
  const fourthParagraph = useRef()
  useEffect(() => {
    firstParagraph.current.innerHTML = firstParagraph.current.innerHTML
    .replace(/Collective Motion/g, `<i>Collective Motion</i>`)
    .replace(/Individual Bodies Self-Organizing \(Zoom In\)/g, `<i>Individual Bodies Self-Organizing (Zoom In)</i>`)
    .replace(/Individual Bodies Self-Organizing \(Zoom Out\)/g, `<i>Individual Bodies Self-Organizing (Zoom Out)</i>`)
    .replace(/Individual Bodies Self-Organizing/g, `<i>Individual Bodies Self-Organizing</i>`)
    .replace(/Particles Within a Space/g, `<i>Particles Within a Space</i>`)
    .replace(/Dark Smoke/g, `<i>Dark Smoke</i>`)
    .replace(/Smoke/g, `<i>Smoke</i>`)
    .replace(/Bifurcation/g, `<i>Bifurcation</i>`)
    .replace(/Pattern Formation/g, `<i>Pattern Formation</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Collective Motion/g, `<i>Collective Motion</i>`)
    .replace(/Individual Bodies Self-Organizing \(Zoom In\)/g, `<i>Individual Bodies Self-Organizing (Zoom In)</i>`)
    .replace(/Individual Bodies Self-Organizing \(Zoom Out\)/g, `<i>Individual Bodies Self-Organizing (Zoom Out)</i>`)
    .replace(/Individual Bodies Self-Organizing/g, `<i>Individual Bodies Self-Organizing</i>`)
    .replace(/Pattern Formation/g, `<i>Pattern Formation</i>`)
    .replace(/Particles Within a Space/g, `<i>Particles Within a Space</i>`)
    .replace(/\(VR\)/g, `<i>(VR)</i>`)
    .replace(/Dark Smoke/g, `<i>Dark Smoke</i>`)
    .replace(/Smoke/g, `<i>Smoke</i>`)
    .replace(/Bifurcation/g, `<i>Bifurcation</i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Collective Motion/g, `<i>Collective Motion</i>`)
    .replace(/Bifurcation/g, `<i>Bifurcation</i>`)
    .replace(/Individual Bodies Self-Organizing \(Zoom Out\)/g, `<i>Individual Bodies Self-Organizing (Zoom Out)</i>`)
    .replace(/Individual Bodies Self-Organizing/g, `<i>Individual Bodies Self-Organizing</i>`)
    .replace(/\(VR\)/g, `<i>(VR)</i>`)
    .replace(/Dark Smoke/g, `<i>Dark Smoke</i>`)
    .replace(/Smoke/g, `<i>Smoke</i>`)
    .replace(/Particles Within a Space/g, `<i>Particles Within a Space</i>`)
    .replace(/Pattern Formation/g, `<i>Pattern Formation</i>`)
    fourthParagraph.current.innerHTML = fourthParagraph.current.innerHTML
    .replace(/Collective Motion/g, `<i>Collective Motion</i>`)
    .replace(/Particles Within a Space/g, `<i>Particles Within a Space</i>`)
  })

  const video2RefScroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop) 
    setShowVideo2(true)
  }

  const video1RefScroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop) 
    setShowVideo1(true)
  }

  const Image = ({ image }) => (
    <div className={ `${image.class ? image.class : ''}` }>
      <LazyLoadImage
        alt={image.alt}
        src={require(`../../assets/exhibitions/${image.src}`)}
      /> 
      {
        image.class && <img className="play-icon" src={ play } />
      }
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
         {props.show.pressRelease !== 'null' && (
            <a href={ `https://palacio.xyz/exhibitions/${props.show.pressRelease}` } target="_blank">
            {translate('pressRelease')}
          </a>
         )}
        </p>
      </section>
      <div className="images">
        <div ref={video1Ref}>
        {
          props.show.video1 && (
            !showVideo1 ? (
              <div className="video1" onClick={() => video1RefScroll(video1Ref)}>
                <Image image={ props.show.video1image } />
              </div>
            ) : (
              <div className="video1">
                <ReactPlayer
                  key="1"
                  id="1"
                  url={props.show.video1}
                  playing
                  controls
                  muted
                  quality="1080p"
                  width='100%'
                  height={isMobile() ? '170px' : '512px'}
                />
              </div>
            )
          )
        }
        </div>
        {
          props.show.images.map( item => (
            <Image image={ item } />
          ) )
        }
        <div ref={video2Ref}>
        {
          props.show.video2 && (
            !showVideo2 ? (
              <div className="video" onClick={() => video2RefScroll(video2Ref)}>
                <Image image={ props.show.video2image } />
              </div>
            ) : (
              <div className="video1">
                <ReactPlayer
                  key="2"
                  id="2"
                  url={props.show.video2}
                  playing
                  controls
                  muted
                  width='100%'
                  height={isMobile() ? '170px' : '512px'}
                />
              </div>
            )
          )
        }
        </div>
      </div>
    </ExhibitionWrapper>
  )
}

export default Exhibition