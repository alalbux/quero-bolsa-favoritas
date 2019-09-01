import React, { Component } from 'react'
import { oneOfType, string, object, number } from 'prop-types'
import styled from 'styled-components'

const ScholarshipsText = styled.div`
  display: table-cell;
  padding: 23px 35px 23px 40px;
  border-bottom: 1px solid #eeeeee;
  font-size: 16px;
  line-height: 1.35;
  color: #333333;
`

const ScholarshipsItem = styled(class extends Component {
  render () {
    const { className, data } = this.props

    return (
      <li className={className}>
        <ScholarshipsText>{data}</ScholarshipsText>
      </li>
    )
  }
})`
  display: table-row;
`

ScholarshipsItem.propTypes = {
  date: oneOfType([string, object, number]).isRequired,
  text: string.isRequired
}

ScholarshipsItem.displayName = 'ScholarshipsItem'

export default ScholarshipsItem
