import React, { Component } from 'react'
import { oneOfType, string, object, number } from 'prop-types'
import styled from 'styled-components'
import Checkbox from '../../form/Checkbox'
import Text from '../../content/Text'

const ScholarshipsText = styled.div`
  padding: 23px 35px 23px 40px;
  font-size: 16px;
  line-height: 1.35;
  color: #333333;
`

const ScholarshipsWrapper = styled.li`
  display: flex;
  justify-content: start;
  align-content: center;
  border-bottom: 1px solid #eeeeee;
`

const ScholarshipsInfos = styled.div`
  width: 100%;
`

const ScholarshipsTitle = styled(Text)`
  color: #007A8D;
  font-weight: bold;
  margin-bottom: 4px;
`

const ScholarshipsLogo = styled.div`
  min-width: 230px;

  img {
    max-width: 170px;
    max-height: 90px;
    padding: 16px 8px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const ScholarshipsItem = styled(class extends Component {
  render() {
    const { university, course, discount_percentage, price_with_discount } = this.props
    return (
      <ScholarshipsWrapper>
        <ScholarshipsLogo>
          <Checkbox><img src={university.logo_url} alt={university.name} /></Checkbox>
        </ScholarshipsLogo>
        <ScholarshipsInfos>
          <ScholarshipsTitle>{course.name}</ScholarshipsTitle>
          <Text>{course.level}</Text>
        </ScholarshipsInfos>
        <ScholarshipsText>Bolsa de {discount_percentage} {price_with_discount}</ScholarshipsText>
      </ScholarshipsWrapper>
    )
  }
})`
div {
  width: 100%;
}
`

ScholarshipsItem.displayName = 'ScholarshipsItem'

export default ScholarshipsItem
