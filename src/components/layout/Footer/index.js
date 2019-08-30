import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Grid from '../Grid'
import Cell from '../Cell'

const FooterContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
`

const AlignContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Footer = ({ height }) => (
  <FooterContainer height={height}>
      <Grid>
        <Cell size={[3, 3, 3]}>
          <AlignContent>
            <div>
              <p>0800 123 2222</p>
              <p>Envie mensagem ou ligue</p>
            </div>
          </AlignContent>
        </Cell>
        <Cell size={[3, 3, 3]}>
          <AlignContent>
            <div>
              <p>Chat ao vivo</p>
              <p>Seg - Sex 8h-22h</p>
            </div>
          </AlignContent>
        </Cell> 
        <Cell size={[3, 3, 3]}>
          <AlignContent>
            <div>
              <p>Mande um e-mail</p>
              <p>Respondemos rapidinho</p>
            </div>
          </AlignContent>
        </Cell>
        <Cell size={[3, 3, 3]}>
          <AlignContent>
            <div>
              <p>Central de ajuda</p>
              <p>Encontre todas as respostas</p>
            </div>
          </AlignContent>
        </Cell>
        <Cell size={[12, 12, 12]}>
          <AlignContent>
            <p>Feito coraçao com pela Quero Educação</p>
          </AlignContent>
        </Cell>
      </Grid>
  </FooterContainer>
)

Footer.propTypes = {
  children: oneOfType([node, func])
}

Footer.displayName = 'Footer'

export default Footer
