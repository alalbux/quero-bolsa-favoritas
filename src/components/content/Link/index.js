import styled from 'styled-components'
import Text from '../Text'

const Link = styled(Text)`
  color: #ee0099;
  text-decoration: none;

  &:visited {
    color: #b4006c;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

export default Link
