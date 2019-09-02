import styled from 'styled-components'

const Link = styled.a`
  color: #ee0099;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: #b4006c;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    text-decoration: none;
  }
`

Link.displayName = 'Link'

export default Link
