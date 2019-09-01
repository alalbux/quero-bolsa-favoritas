import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faInfoCircle, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import Grid from '../Grid'
import Cell from '../Cell'

const FooterContainer = styled.div`
  background: #007A8D;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`

const AcknowledgmentContent = styled.div`
  background: #18ACC4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
`

const Footer = ({ height }) => (
  <FooterContainer height={height}>
    <Grid>
      <Cell size={[3, 3, 3]}>
        <div>
          <FontAwesomeIcon icon={faWhatsapp} />
          <p>0800 123 2222</p>
          <p>Envie mensagem ou ligue</p>
        </div>
      </Cell>
      <Cell size={[3, 3, 3]}>
        <div>
          <FontAwesomeIcon icon={faComments} />
          <p>Chat ao vivo</p>
          <p>Seg - Sex 8h-22h</p>
        </div>
      </Cell>
      <Cell size={[3, 3, 3]}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Mande um e-mail</p>
          <p>Respondemos rapidinho</p>
        </div>
      </Cell>
      <Cell size={[3, 3, 3]}>
        <div>
          <FontAwesomeIcon icon={faInfoCircle} />
          <p>Central de ajuda</p>
          <p>Encontre todas as respostas</p>
        </div>
      </Cell>
      <Cell size={[12, 12, 12]}>
        <AcknowledgmentContent>
          <p>Feito <FontAwesomeIcon icon={faHeart} /> com pela Quero Educação</p>
        </AcknowledgmentContent>
      </Cell>
    </Grid>
  </FooterContainer>
)

Footer.propTypes = {
  children: oneOfType([node, func])
}

Footer.displayName = 'Footer'

export default Footer
