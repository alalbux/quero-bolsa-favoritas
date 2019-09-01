import React, { Fragment } from 'react'
import styled from 'styled-components'

const ButtonGroup = styled(({ items, ...inputProps }) => (
  <div>
    {items.map(buttonGroupItem => (
      <Fragment>
        <input type='radio'
          value={buttonGroupItem.value}
          id={buttonGroupItem.value}
          {...inputProps}
        />
        <label for={buttonGroupItem.value}>{buttonGroupItem.name}</label>
      </Fragment>
    ))}
  </div>
))`
  position: absolute;
  left: -9999em;
  top: -9999em;
  clear: both;
  display: inline-block;

  & + label {
    float: left;
    padding: .5em 1em;
    cursor: pointer;
    border: 1px solid #28608f;
    margin-right: -1px;
    color: #fff;
    background-color: #428bca;
    
    &:first-of-type {
      border-radius: .7em 0 0 .7em;
    }
    
    &:last-of-type {
      border-radius: 0 .7em .7em 0;
    }
  }

  &:checked + label {
    background-color: #3277b3;
  }
`

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
