import React from 'react'
import styled from 'styled-components'
import Link from '../../content/Link'

const BreadcrumbsContainer = styled.div`
  color: #007A8D;
  padding: 24px 0;
  font-size: 14px;
`

const BreadcrumbsText = styled.span`
  color: #1F2D30;
`
const Bar = styled.span`
  color: #1F2D30;
  padding: 8px;
`

const LocalLink = styled(Link)`
  color: #007A8D;
  font-weight: bold;
`

const Breadcrumbs = () => (
  <BreadcrumbsContainer>
    <LocalLink>Minha conta</LocalLink>
    <Bar>/</Bar>
    <LocalLink>Pré-matrículas</LocalLink>
    <Bar>/</Bar>
    <BreadcrumbsText>Bolsas favoritas</BreadcrumbsText>
  </BreadcrumbsContainer>
)


Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
