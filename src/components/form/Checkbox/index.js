import React from 'react'
import styled from 'styled-components'

const Checkbox = styled(({ children, className, ...inputProps }) => (
  <label className={className}>
    <input type='checkbox' {...inputProps} />
    <span>{children}</span>
    <div className='box' />
  </label>
))`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & .box {
    position: absolute;
    top: 3px;
    left: 0;
    height: 17px;
    width: 17px;
    background: #fff;
    border: 1px solid #18ACC4;
    border-radius: 4px;
  }

  &:hover input:not([disabled]) ~ .box,
  & input:not([disabled]):focus ~ .box {
    border-color: #007A8D;
  }

  & input:checked ~ .box {
    background: #18ACC4;
    border-color: #18ACC4;
  }

  & input:disabled:checked ~ .box {
    background: #18ACC4;
  }

  &:hover input:not([disabled]):checked ~ .box,
  & input:checked:focus ~ .box {
    background: #18ACC4;
    border-color: #18ACC4;
  }

  & input:disabled ~ .box {
    border-color: #18ACC4;
    opacity: 0.6;
    pointer-events: none;
  }
  & input:disabled ~ span {
    color: #18ACC4;
  }

  & input:checked ~ .box:after {
    display: block;
  }

  & .box:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 4px;
    width: 3px;
    height: 6px;
    border: solid #fff;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
`

Checkbox.displayName = 'Checkbox'

export default Checkbox
