import styled from 'styled-components'
import Text from '../../content/Text'

const Breadcrumbs = styled(Text)`
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

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
