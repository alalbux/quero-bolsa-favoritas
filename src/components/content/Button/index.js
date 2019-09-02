import { oneOf, node, bool, string, shape } from 'prop-types'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: none;
  border-radius: 5px;
  border: 1px solid #18ACC4;
  padding: 8px 16px;
  font-size: 16px;
  color: #18ACC4;
  font-weight: bold;
  text-align: ${props => props.align};
  line-height: 1.15;
  padding: ${props => props.padding || '8px 16px'};
  letter-spacing: 0.5px;
  cursor: pointer;
  outline: none;

  ${props => props.default && css`
    background: #FDCB13;
    border: 1px solid #DE9E1F;
    box-shadow: none;
    color: #1F2D30;

    &:hover {
      background: #DE9E1F;
      color: #1F2D30;
    }
  `}

  ${props => props.active && css`
    path {
      fill: #ee0099!important;
    }
  `}

  ${props => props.disabled && `
    border: 2px solid #d1cdd2;
    cursor: default;
    background-color: #e6e6e6;
    color: #d1cdd2;
    cursor: not-allowed;
    box-shadow: none;
    &:hover { background-color: #e6e6e6 }
    &:active { background-color: #e6e6e6 }
  `}

  ${props => props.flat && `
    color: #18ACC4;

    &:hover {
      border-color: #007A8D;
    }
    &:active {
      border-color: #18ACC4;
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
