
import PropTypes from 'prop-types'
import styled from 'styled-components'

import config, { DIMENSION_NAMES } from '../../config'

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool])

const offsetProps = DIMENSION_NAMES.map(d => d + 'Offset')

const DimensionPropTypes = DIMENSION_NAMES.reduce((propTypes, dimension) => {
  propTypes[dimension] = ModificatorType
  propTypes[dimension + 'Offset'] = PropTypes.number
  return propTypes
}, {})

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${props => config(props).gutterWidth / 2}rem;
  padding-left: ${props => config(props).gutterWidth / 2}rem;
  ${props => props.reverse && `
    flex-direction: column-reverse;
  `}

  ${props => Object.keys(props)
    .filter(k => ~DIMENSION_NAMES.indexOf(k))
    .sort((k1, k2) => DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2))
    .map(k => config(props).media[k]`${
      !(props[k])
        // Integer value
        ? `
        flex-basis: ${100 / config(props).gridSize * props[k]}%;
        max-width: ${100 / config(props).gridSize * props[k]}%;
        display: block;
      `
        // Boolean
        : (props[k]
          // Auto-width
          ? `
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
          display: block;
        `
          // Hide element
          : 'display: none;'
        )
      }`)
  }

  ${props => Object.keys(props)
    .filter(k => ~offsetProps.indexOf(k))
    .map(k =>
      config(props).media[k.replace(/Offset$/, '')]`
        margin-left: ${100 / config(props).gridSize * props[k]}%;
      `
    )
  }
`

Col.displayName = 'Col'

Col.propTypes = {
  ...DimensionPropTypes,
  reverse: PropTypes.bool,
  children: PropTypes.node
}

export default Col