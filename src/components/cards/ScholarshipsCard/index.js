import React from 'react'
import styled from 'styled-components'
import { string, number, arrayOf, shape, oneOfType, object } from 'prop-types'
import Card from '../Card'
import Text from '../../content/Text'
import Button from '../../content/Button'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LogoContainer = styled.div`
  display: flex;
  min-width: 230px;

  img {
    max-width: 170px;
    max-height: 90px;
    padding: 16px 8px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const UniversityNameCard = styled(Text)`
  font-weight: bold;
  font-size: 14px;
`

const CourseNameCard = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: #007A8D;
`

const UniversityScore = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  border-bottom: 2px solid gray;
  width: 100%;
  text-align: center;
  padding: 8px;
  margin: 8px;
`

const CourseKind = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`

const StartsDetails = styled(Text)`
  width: 100%;
  text-align: center;
  font-size: 14px;
  border-bottom: 2px solid gray;
  padding-bottom: 8px;
  margin-bottom: 8px;
`

const Small = styled.span`
  font-size: 14px;
`

const LineThrough = styled(Small)`
  text-decoration-line: line-through;
`

const Strong = styled(Small)`
  font-weight: bold;
`

const EnabledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 8px 0;
`

const DiscountPrice = styled.span`
  color: #0FA866;
  font-weight: bold;
  font-size: 20px;
`

const PriceContainer = styled(Text)`
  padding: 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ScholarshipsCard = styled(({
  isEnabled,
  university,
  course,
  priceWithDiscount,
  fullPrice
}) => {
  return (
    <Card>
      <Container>
        <LogoContainer>
          <img src={university.logo_url} alt={university.name} />
        </LogoContainer>
        <UniversityNameCard>{university.name}</UniversityNameCard>
        <CourseNameCard>{course.name}</CourseNameCard>
        <UniversityScore>{university.score}</UniversityScore>
        <CourseKind>{course.kind} - {course.shift}</CourseKind>
        <StartsDetails>Início das aulas em: 05/07/2019</StartsDetails>
        {isEnabled ? (
          <EnabledContainer>
            <Strong>Mensalidade com o Quero Bolsa:</Strong>
            <PriceContainer>
              <LineThrough>R$ {fullPrice}</LineThrough>
              <Text>
                <DiscountPrice>R$ {priceWithDiscount}</DiscountPrice><Small>/mês</Small>
              </Text>
            </PriceContainer>
            <ActionsContainer>
              <Button flat>Excluir</Button>
              <Button default>Ver oferta</Button>
            </ActionsContainer>
          </EnabledContainer>
        ) : (
            <EnabledContainer>
              <Strong>Bolsa indisponível.</Strong>
              <PriceContainer>Entre em contato com nosso atendimento para saber mais.</PriceContainer>
              <ActionsContainer>
                <Button flat>Excluir</Button>
                <Button disabled>Indisponível</Button>
              </ActionsContainer>
            </EnabledContainer>
          )}
      </Container>
    </Card>
  )
})`
  img {
    margin: 0 auto;
  }
`

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
