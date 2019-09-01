import { oneOfType, node, arrayOf } from 'prop-types'
import styled from 'styled-components'

const Scholarships = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`

Scholarships.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
}

Scholarships.displayName = 'Scholarships'

export default Scholarships
