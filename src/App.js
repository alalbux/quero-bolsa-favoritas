import React, { Component } from 'react'
import {
  Header,
  Menu,
  Footer,
  Breadcrumbs,
  Title,
  Text,
  Flexbox,
  Page,
  Grid,
  Row,
  Col,
  ButtonGroup,
  ScholarshipsCard,
  AddScholarshipsCard
} from './components'
import styled from 'styled-components'

const TitlePage = styled(Title.H1)`
  font-size: 38px;
  margin-bottom: 16px;
`
const SubtitlePage = styled(Text)`
  font-size: 16px;
  margin-bottom: 32px;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      filters: [
        'filters'
      ],
      data: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(`https://testapi.io/api/redealumni/scholarships`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const { isLoading, data, error } = this.state

    return (
      <Page>
        <Flexbox vertical>
          <Header height='100px' />
          <Menu />
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Breadcrumbs />
                <TitlePage>Bolsas favoritas</TitlePage>
                <SubtitlePage>
                  Adicione bolsas de cursos e faculdades do seu interesse e receba atualização
                  das melhores ofertas disponíveis
                </SubtitlePage>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Flexbox end>
                  <ButtonGroup
                    name='period-filter'
                    items={[
                      {
                        name: 'Todos os semestres',
                        value: 'all'
                      },
                      {
                        name: '2º semestre de 2019',
                        value: 'second-half'
                      },
                      {
                        name: '1º semestre de 2020',
                        value: 'first-half'
                      }
                    ]}
                  />
                </Flexbox>
              </Col>
            </Row>
            <Row between>
              <Col xs={3} sm={3} md={3} lg={3}>
                <AddScholarshipsCard />
              </Col>
              {!isLoading ? (
                data.map(item => {
                  const {
                    university,
                    course,
                    price_with_discount,
                    full_price,
                    enabled
                  } = item
                  return (
                    <Col xs={12} sm={12} md={3} lg={3}>
                      <ScholarshipsCard
                        isEnabled={enabled}
                        university={university}
                        course={course}
                        priceWithDiscount={price_with_discount}
                        fullPrice={full_price}
                      />
                    </Col>
                  )
                })
              ) : (
                  <h3>Loading...</h3>
                )}
            </Row>
          </Grid>
          <Footer />
        </Flexbox>
      </Page >
    )
  }
}

export default App
