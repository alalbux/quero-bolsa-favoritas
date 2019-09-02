import React, { Component } from 'react'
import {
  Button,
  Header,
  Menu,
  Footer,
  Breadcrumbs,
  Card,
  Title,
  Text,
  Checkbox,
  Select,
  Flexbox,
  Modal,
  Page,
  Grid,
  Row,
  Col,
  ButtonGroup,
  ScholarshipsCard,
  Scholarships,
  ScholarshipsItem
} from './components'

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
                <Title.H1>Bolsas favoritas</Title.H1>
                <Title.H2>Adicione bolsas de cursos e faculdades do seu interesse e receba atualização das melhores ofertas disponíveis</Title.H2>
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
            <Row>
              <Col xs={3} sm={3} md={3} lg={3}>
                <Card onClick={() => this.setState({ opened: true })}>
                  <Text>Adicionar bolsa</Text>
                  <Text>Clique para adicionar bolsas do seu interesse</Text>
                </Card>
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
                    <Col xs={3} sm={3} md={3} lg={3}>
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
              <Modal opened={this.state.opened}
                onClose={() => this.setState({ opened: false })}
                width="70"
              >
                <Title.H2>Adicionar bolsa</Title.H2>
                <Text>Selecione sua cidade</Text>
                <Select></Select>
                <Text>Selecione seu curso de preferência</Text>
                <Select></Select>
                <Text>Como você quer estudar</Text>
                <div>
                  <Checkbox>Presencial</Checkbox>
                  <Checkbox>A distância</Checkbox>
                </div>
                <Text>Até quanto pode pagar?</Text>

                <div>
                  <Text>Resultado:</Text>
                  <Text>Ordenar por {this.state.filters}</Text>
                  <div>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                      <Scholarships>
                        {data.map(item => {
                          return (
                            <ScholarshipsItem key={Math.random()} {...item} />
                          )
                        })}
                      </Scholarships>
                    ) : (
                        <h3>Loading...</h3>
                      )}
                  </div>
                  <div>
                    <Button>Cancelar</Button>
                    <Button>Adicionar bolsa(s)</Button>
                  </div>
                </div>

              </Modal>
            </Row>
          </Grid>
          <Footer />
        </Flexbox>
      </Page >
    )
  }
}

export default App
