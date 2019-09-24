import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../../i18n/index'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ExhibitionWrapper = styled.div`
  left: 0;
  margin: auto;
  max-width: 60%;
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
    font-weight: 300;
    padding-bottom: 40px; 
  }

  .paragraph {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    text-align: left;
  }

  .images {
    max-width: 100%;
    div {
      padding-top: 30px;
      max-width: 100%;

      img {
        width: 100%;
      }
    }
  }
`

function Exhibition (props) {
  const { translate } = useContext(I18nContext)
  const firstParagraph = useRef()
  const secondParagraph = useRef()
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
      <p className="paragraph" ref={ firstParagraph }>
        {translate(props.show.paragraph1)}
      </p>
      <p className="paragraph" ref={ secondParagraph }>
        {translate(props.show.paragraph2)}
      </p>
      <div className="images">
        {
          props.show.images.map( item => (
            <Image image={ item } />
          ) )
        }
      </div>
    </ExhibitionWrapper>
  )
}

export default Exhibition