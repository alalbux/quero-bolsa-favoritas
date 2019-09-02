import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import Logo from './Logo'
import Grid from '../Grid'
import Col from '../Col'
import Row from '../Row'
import Text from '../../content/Text'
import Link from '../../content/Link'

const HeaderContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  ${props => props.height && `height: ${props.height};`}
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const TextContainer = styled(Text)`
  padding: 16px 8px;
  line-height: 1.2;
  font-size: 14px;
`

const HeaderLink = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  color: #007A8D;
`

const HeaderText = styled.span`
  font-weight: bold;
  display: block;
  color: #007A8D;
`

const WhatsappIcon = styled.span`
  color: #34af23;
`

const HeaderNumber = styled(HeaderText)`
  font-size: 18px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Header = () => (
  <HeaderContainer>
    <Grid>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>
          <Container>
            <IconContainer>
              <FontAwesomeIcon icon={faInfoCircle} size='2x' />
              <TextContainer>
                <HeaderLink>Como funciona</HeaderLink>
              </TextContainer>
            </IconContainer>
            <IconContainer>
              <WhatsappIcon>
                <FontAwesomeIcon icon={faWhatsapp} size='2x' />
              </WhatsappIcon>
              <TextContainer>
                <HeaderNumber>0800 123 2222</HeaderNumber>
                <HeaderText>Envie mensagem ou ligue</HeaderText>
              </TextContainer>
            </IconContainer>
          </Container>
        </Col>
        <Col xs={12} sm={3} md={2} lg={1}>
          <Container>
            <Logo />
          </Container>
        </Col>
        <Col xs={12} sm={3} md={2} lg={1}>
          <IconContainer>
            <TextContainer>
              <HeaderLink>Nome Sobrenome</HeaderLink>
            </TextContainer>
            <FontAwesomeIcon icon={faUser} />
          </IconContainer>
        </Col>
      </Row>
    </Grid>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
