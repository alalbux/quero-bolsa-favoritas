import { oneOf, node, bool, string, shape } from 'prop-types'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: none;
  border: 2px solid #18ACC4;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  color: #18ACC4;
  font-weight: bold;
  text-align: ${props => props.align};
  line-height: 1.15;
  padding: ${props => props.padding || '8px 16px'};
  min-width: 192px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  outline: none;

  ${props => (props.default) && css`
    background: none;
    box-shadow: none;
    border: solid 1px;
    &:active {
      background: none;
      border-color: #ee0099;
      color: #ee0099;
    }
    &:hover {
      background: none;
    }
  `}

  ${props => props.default && css`
    color: #000;
    border-color: #000;
    &:hover {
      border-color: #545252;
      color: #545252;
    }
  `}

  ${props => props.active && css`
    path {
      fill: #ee0099!important;
    }
  `}

  ${props => props.disabled && `
    cursor: default;
    background-color: #d1cdd2;
    box-shadow: none;
    &:hover { background-color: #d1cdd2 }
    &:active { background-color: #d1cdd2 }
  `}

  ${props => props.flat && `
    background-color: transparent;
    border-color: transparent;
    color: #000000;
    box-shadow: none;
    text-align: center;
    min-width: auto;
    padding: 0 10px;

    &:hover {
      background-color: transparent;
      color: #424242;

      path {
        fill: #424242;
      }
    }
    &:active {
      background-color: transparent;
      color: #9b9b9b;
    }
  `}

  ${props => props.flat && `
    color: #fff;

    &:hover {
      border-color: transparent;
      color: #bebebe;
    }
    &:active {
      border-color: transparent;
      color: #ee0099;
    }
  `}

  ${props => props.flat && props.disabled && `
    color: #aaaaaa;
    &:hover { color: #aaaaaa }
    &:active { color: #aaaaaa }
  `}

  ${props => props.color && `
    color: ${props.color};
  `}

  ${props => props.margin && props.margin.top && `top: ${props.margin.top};`}
  ${props => props.margin && props.margin.bottom && `bottom: ${props.margin.bottom};`}
  ${props => props.margin && props.margin.left && `left: ${props.margin.left};`}
  ${props => props.margin && props.margin.right && `right: ${props.margin.right};`}
`

Button.propTypes = {
  children: node,
  disabled: bool,
  active: bool,
  default: bool,
  flat: bool,
  color: string,
  type: string,
  align: oneOf(['center', 'left', 'right']),
  margin: shape({
    top: string,
    bottom: string,
    left: string,
    right: string,
  })
}

Button.defaultProps = {
  align: 'center',
  type: 'button',
  margin: {}
}

Button.displayName = 'Button'

export default Button
