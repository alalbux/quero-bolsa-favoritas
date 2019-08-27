import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Logo from './Logo'
import Grid from '../Grid'
import Cell from '../Cell'

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
            <p>Como funciona?</p>
            <div>
              <p>0800 123 2222</p>
              <p>Envie mensagem ou ligue</p>
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
            <span>Nome Sobrenome</span>
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
