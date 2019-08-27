import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: #FBFBFB;
  padding-bottom: 32px;
  width: 100%;
  margin: 0 auto;
  ${props => props.height && `height: ${props.height};`}
`

const PageContent = styled.div`
  display: flex;
`

const Page = ({ children, height }) => (
  <PageContainer height={height}>
    <PageContent>
      {children}
    </PageContent>
  </PageContainer>
)

Page.propTypes = {
  children: oneOfType([node, func])
}

Page.displayName = 'Page'

export default Page
