import React from 'react'
import Text from '../Text'

const typeTitle = (element, { displayName, ...defaultTextOpts}) =>
  ({ children, ...props }) => {
    const Title = Text.withComponent(element)
    Title.displayName = displayName

    return (
      <Title {...defaultTextOpts} {...props}>
        {children}
      </Title>
    )
  }

const H1 = typeTitle('h1', {
  displayName: 'Title.H1',
  fontSize: 44,
  fontWeight: 'bold',
  lineHeight: 1,
  color: '#1F2D30'
})

H1.displayName = 'Title.H1'

const H2 = typeTitle('h2', {
  displayName: 'Title.H2',
  fontSize: 24,
  fontWeight: 'normal',
  lineHeight: 1.22,
  color: '#1F2D30'
})

H2.displayName = 'Title.H2'

const H3 = typeTitle('h3', {
  displayName: 'Title.H3',
  fontSize: 21,
  fontWeight: 'bold',
  lineHeight: 0.95,
  color: '#1F2D30'
})

H3.displayName = 'Title.H3'

const H4 = typeTitle('h4', {
  displayName: 'Title.H4',
  fontSize: 18,
  fontWeight: 'bold',
  lineHeight: 1.39,
  color: '#1F2D30'
})

H4.displayName = 'Title.H4'

const H5 = typeTitle('h5', {
  displayName: 'Title.H5',
  fontSize: 13,
  lineHeight: 1.54,
  color: '#1F2D30'
})

H5.displayName = 'Title.H5'

const H6 = typeTitle('h6', {
  displayName: 'Title.H6',
  fontSize: 11,
  lineHeight: 2.27,
  color: '#1F2D30'
})

H6.displayName = 'Title.H6'

const Title = { H1, H2, H3, H4, H5, H6 }

export default Title
