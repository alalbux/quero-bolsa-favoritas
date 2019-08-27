import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  text-align: ${props => props.align};
  text-transform: ${props => props.uppercase ? 'uppercase': null};
  letter-spacing: ${props => props.letterSpacing};
`

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  fontWeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  fontSize: PropTypes.number,
  letterSpacing: PropTypes.string,
  uppercase: PropTypes.bool,
}

Text.defaultProps = {
  color: '#1F2D30',
  lineHeight: 1.56,
  fontWeight: 'normal',
  fontSize: 16,
  letterSpacing: 'inherit',
  align: 'left'
}

Text.displayName = 'Text'

export default Text
