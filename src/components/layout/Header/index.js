import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import Logo from './Logo'
import Grid from '../Grid'
import Cell from '../Cell'
import Text from '../../content/Text'

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

const AlignContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Header = ({ height }) => (
  <HeaderContainer height={height}>
      <Grid>
        <Cell size={[4, 4, 4]}>
          <AlignContent>
            <Text><FontAwesomeIcon icon={faInfoCircle} /> Como funciona?</Text>
            <div>
              <FontAwesomeIcon icon={faWhatsapp} />
              <Text>0800 123 2222</Text>
              <Text>Envie mensagem ou ligue</Text>
            </div>
          </AlignContent>
        </Cell>
        <Cell size={[4, 4, 4]}>
          <AlignContent>
            <Logo />
          </AlignContent>
        </Cell>
        <Cell size={[4, 4, 4]}>
          <AlignContent>
            <Text>Nome Sobrenome</Text>
            <FontAwesomeIcon icon={faUser} />
          </AlignContent>
        </Cell>
      </Grid>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
