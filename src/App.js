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
  Cell,
  ButtonGroup
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
        <Grid>
          <Cell size={[12, 12, 12]}>
            <Header height='100px' />
            <Menu />
          </Cell>
          <Cell size={[12, 12, 12]}>
            <Breadcrumbs />
          </Cell>
          <Cell size={[12, 12, 12]}>
            <Title.H1>Bolsas favoritas</Title.H1>
            <Text>Adicione bolsas de cursos e faculdades do seu interesse e receba atualização das melhores ofertas disponíveis</Text>
          </Cell>
          <Cell size={[12, 12, 12]}>
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
          </Cell>
          <Cell size={[3, 3, 3]}>
            <Card onClick={() => this.setState({ opened: true })}>
              <Text>Adicionar bolsa</Text>
              <Text>Clique para adicionar bolsas do seu interesse</Text>
            </Card>
          </Cell>
          {!isLoading ? (
            data.map(item => {
              const { university, course, price_with_discount, full_price, enabled } = item
              const isEnabled = enabled
              return (
                <Cell size={[3, 3, 3]}>
                  <Card>
                    <img src={university.logo_url} alt={university.name} />
                    <Text>{university.name}</Text>
                    <Text>{course.name}</Text>
                    <Text>{university.score}</Text>
                    <Text>{course.kind} - {course.shift}</Text>
                    <Text>Início das aulas em: 05/07/2019</Text>
                    {!isEnabled ? (
                      <div>
                        <Text>Mensalidade com o Quero Bolsa:</Text>
                        <Text>{full_price}</Text>
                        <Text>{price_with_discount}</Text>
                        <Button>Excluir</Button>
                        <Button>Ver oferta</Button>
                      </div>
                    ) : (
                        <div>
                          <Text>Bolsa indisponível.</Text>
                          <Text>Entre em contato com nosso atendimento para saber mais.</Text>
                          <Button>Excluir</Button>
                          <Button disabled>Indisponível</Button>
                        </div>
                      )}

                  </Card>
                </Cell>
              )
            })
          ) : (
              <h3>Loading...</h3>
            )}
          <Flexbox>
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
                    data.map(item => {
                      const { university, course, discount_percentage, price_with_discount } = item
                      return (
                        <div key={Math.random()}>
                          <Checkbox><img src={university.logo_url} alt={university.name} /></Checkbox>
                          <Text>{course.name}</Text>
                          <Text>{course.level}</Text>
                          <Text>Bolsa de {discount_percentage} {price_with_discount}</Text>
                        </div>
                      )
                    })
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
          </Flexbox>
          <Cell size={[12, 12, 12]}>
            <Footer height='100px' />
          </Cell>
        </Grid>
      </Page>
    )
  }
}

export default App
