import React from 'react'
import { string, number, arrayOf, shape, oneOfType, object } from 'prop-types'
import Card from '../Card'
import Scholarships from '../../list/Scholarships'
import ScholarshipsItem from '../../list/ScholarshipsItem'

const ScholarshipsCard = ({ sectionTitle, minHeight, items }) => (
  <Card title={sectionTitle} minHeight={minHeight}>
    <Scholarships>
      {items.map(scholarships => (
        <ScholarshipsItem key={Math.random()} data={scholarships} />
      ))}
    </Scholarships>
  </Card>
)

ScholarshipsCard.propTypes = {
  sectionTitle: string,
  minHeight: number,
  items: arrayOf(shape({
    date: oneOfType([
      string, object, number
    ]).isRequired,
    text: string.isRequired
  }))
}

ScholarshipsCard.defaultProps = {
  minHeight: 274,
  items: []
}

ScholarshipsCard.displayName = 'ScholarshipsCard'

export default ScholarshipsCard
