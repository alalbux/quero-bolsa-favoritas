import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import config, { DIMENSION_NAMES } from '../../config'

const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${props => config(props).outerMargin + 'rem'};
  padding-left: ${props => config(props).outerMargin + 'rem'};
  ${props => !props.fluid && css`
    ${DIMENSION_NAMES.map(t =>
    config(props).container[t] && config(props).media[t]`
        width: ${props => config(props).container[t]}rem;
      `
  )}
  `}
`

Grid.displayName = 'Grid'

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
}

export default Grid
