import {
    bool,
    shape,
    oneOf,
    oneOfType,
    string,
    number
} from 'prop-types'
import styled from 'styled-components'

const Flexbox = styled.div`
  display: flex;

  ${props => props.horizontal && `
    width: 100%;
    flex-direction: row;
  `}

  ${props => props.vertical && `
    width: 100%;
    height: 100%;
    flex-direction: column;
  `}

  ${props => props.middle && `
    align-items: center;
    justify-content: center;
  `}

  ${props => props.end && `
    align-items: end;
    justify-content: flex-end;
  `}

  ${props => props.justify && `
    justify-content: ${props.justify};
  `}

  ${props => props.spacing && `
    justify-content: space-${props.spacing}
  `}

  ${props => props.wrap && `
    flex-wrap: wrap;
  `}

  ${props => props.colSize && `
    & > * {
      width: ${props.colSize};
    }
  `}

  ${props => props.margin && props.margin.top && `top: ${props.margin.top};`}
  ${props => props.margin && props.margin.bottom && `bottom: ${props.margin.bottom};`}
  ${props => props.margin && props.margin.left && `left: ${props.margin.left};`}
  ${props => props.margin && props.margin.right && `right: ${props.margin.right};`}

  ${props => props.padding && props.padding.top && `top: ${props.padding.top};`}
  ${props => props.padding && props.padding.bottom && `bottom: ${props.padding.bottom};`}
  ${props => props.padding && props.padding.left && `left: ${props.padding.left};`}
  ${props => props.padding && props.padding.right && `right: ${props.padding.right};`}
`

Flexbox.propTypes = {
  horizontal: bool,
  vertical: bool,
  middle: bool,
  end: bool,
  wrap: bool,
  spacing: oneOf(['around', 'between']),
  colSize: string,
  margin: shape({
    top: oneOfType([string, number]),
    bottom: oneOfType([string, number]),
    left: oneOfType([string, number]),
    right: oneOfType([string, number])
  }),
  padding: shape({
    top: oneOfType([string, number]),
    bottom: oneOfType([string, number]),
    left: oneOfType([string, number]),
    right: oneOfType([string, number])
  })
}

Flexbox.defaultProps = {
  margin: {},
  padding: {},
}

Flexbox.displayName = 'Flexbox'

export default Flexbox
