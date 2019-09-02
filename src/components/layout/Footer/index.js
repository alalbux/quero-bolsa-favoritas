import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faInfoCircle, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import Text from '../../content/Text'
import Grid from '../Grid'
import Col from '../Col'
import Row from '../Row'

const FooterContainer = styled.div`
  background: #007A8D;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const TextContainer = styled(Text)`
  padding: 16px 8px;
  line-height: 1.2;
`

const FooterText = styled.span`
  color: #FFFFFF;
  font-weight: bold;
  display: block;
`

const FooterTitle = styled(FooterText)`
  font-size: 18px;
`

const AcknowledgmentContent = styled.div`
  background: #18ACC4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
`

const AcknowledgmentText = styled(FooterText)`
  font-size: 14px;
`

const Footer = () => (
  <FooterContainer>
    <Grid>
      <Row>
        <Col xs={12} sm={3} md={3} lg={3}>
          <IconContainer>
            <FontAwesomeIcon icon={faWhatsapp} size='3x' />
            <TextContainer>
              <FooterTitle>0800 123 2222</FooterTitle>
              <FooterText>Envie mensagem ou ligue</FooterText>
            </TextContainer>
          </IconContainer>
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <IconContainer>
            <FontAwesomeIcon icon={faComments} size='3x' />
            <TextContainer>
              <FooterTitle>Chat ao vivo</FooterTitle>
              <FooterText>Seg - Sex 8h-22h</FooterText>
            </TextContainer>
          </IconContainer>
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <IconContainer>
            <FontAwesomeIcon icon={faEnvelope} size='3x' />
            <TextContainer>
              <FooterTitle>Mande um e-mail</FooterTitle>
              <FooterText>Respondemos rapidinho</FooterText>
            </TextContainer>
          </IconContainer>
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <IconContainer>
            <FontAwesomeIcon icon={faInfoCircle} size='3x' />
            <TextContainer>
              <FooterTitle>Central de ajuda</FooterTitle>
              <FooterText>Encontre todas as respostas</FooterText>
            </TextContainer>
          </IconContainer>
        </Col>
      </Row>
    </Grid>
    <AcknowledgmentContent>
      <TextContainer>
        <AcknowledgmentText>
          Feito <FontAwesomeIcon icon={faHeart} /> com pela Quero Educação
            </AcknowledgmentText>
      </TextContainer>
    </AcknowledgmentContent>
  </FooterContainer>
)

Footer.propTypes = {
  children: oneOfType([node, func])
}

Footer.displayName = 'Footer'

export default Footer
