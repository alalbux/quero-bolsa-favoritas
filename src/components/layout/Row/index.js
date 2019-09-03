import PropTypes from 'prop-types'
import styled from 'styled-components'

import config, { DIMENSION_NAMES } from '../../config'

const ModificatorType = PropTypes.oneOf(DIMENSION_NAMES)

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${props => config(props).gutterWidth / 2 * -1}rem;
  margin-left: ${props => config(props).gutterWidth / 2 * -1}rem;
  ${props => props.reverse && `
    flex-direction: row-reverse;
  `}
  ${props => props.start && `
    justify-content: flex-start;
  `}
  ${props => props.center && `
    justify-content: center;
  `}
  ${props => props.end && `
    justify-content: flex-end;
  `}
  ${props => props.top && `
    align-items: flex-start;
  `}
  ${props => props.middle && `
    align-items: center;
  `}
  ${props => props.bottom && `
    align-items: flex-end;
  `}
  ${props => props.around && `
    justify-content: space-around;
  `}
  ${props => props.between && `
    justify-content: space-between;
  `}
  ${props => props.first && `
    order: -1;
  `}
  ${props => props.last && `
    order: 1;
  `}
`

Row.displayName = 'Row'

Row.propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  children: PropTypes.node
}

export default Row