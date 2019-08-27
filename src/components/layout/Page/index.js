import React from 'react'
import  { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
const PageContainer = styled.div`
  padding-top: ${props => props.top ? `calc(${props.top}px + 32px)` : '32px'};
  padding-bottom: 32px;
  width: 80%;
  margin: 0 auto;
  ${props => props.height && `height: ${props.height};`}
`

const PageContent = styled.div`
  display: flex;
`

const Page = ({ children, menuComponent: MenuComponent, top, height }) => (
  <PageContainer top={top} height={height}>
    {MenuComponent && <MenuComponent />}
    <PageContent>
    {children}
    </PageContent>
  </PageContainer>
)

Page.propTypes = {
  children: oneOfType([node, func]),
  menuComponent: oneOfType([node, func])
}

Page.displayName = 'Page'

export default Page
