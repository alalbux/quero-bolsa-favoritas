import React, { Fragment } from 'react'
import styled from 'styled-components'

const ButtonGroupContainer = styled.div`
  margin-bottom: 34px;
`

const ButtonGroup = styled(({ items, ...inputProps }) => (
  <ButtonGroupContainer>
    {items.map(buttonGroupItem => (
      <Fragment>
        <input type='radio'
          { ...buttonGroupItem.value === 'all' && 'checked'}
          value={buttonGroupItem.value}
          id={buttonGroupItem.value}
          {...inputProps}
        />
        <label for={buttonGroupItem.value}>{buttonGroupItem.name}</label>
      </Fragment>
    ))}
  </ButtonGroupContainer>
))`
  position: absolute;
  left: -9999em;
  top: -9999em;
  clear: both;
  display: inline-block;
  background-color: #FFFFFF;
  margin-bottom: 24px;

  & + label {
    float: left;
    padding: .5em 1em;
    cursor: pointer;
    border: 1px solid #007A8D;
    color: #007A8D;
    margin-right: -1px;
    background-color: #FFFFFF;
    font-weight: bold;
    
    &:first-of-type {
      border-radius: .4em 0 0 .4em;
    }
    
    &:last-of-type {
      border-radius: 0 .4em .4em 0;
    }
  }

  &:checked + label {
    color: #FFFFFF;
    background-color: #007A8D;
  }
`

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
