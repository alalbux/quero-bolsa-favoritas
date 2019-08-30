import React from 'react'
import {
  Button,
  Header,
  Menu,
  Footer,
  //test
  Breadcrumbs,
  Card,
  Link,
  Title,
  Text,
  Checkbox,
  Input,
  Select,
  Flexbox,
  Modal,
  Page,
  Grid,
  Cell
} from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }

  render() {
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
            <Flexbox>
              <Button> Todos os semestres </Button>
              <Button> 2º semestre de 2019 </Button>
              <Button> 1º semestre de 2020 </Button>
            </Flexbox>
          </Cell>
          <Cell size={[3, 3, 3]}>
            <Card onClick={() => this.setState({ opened: true })}>
              <Text>Adicionar bolsa</Text>
              <Text>Clique para adicionar bolsas do seu interesse</Text>
            </Card>
          </Cell>
          <Flexbox>
            <Modal opened={this.state.opened} onClose={() => this.setState({ opened: false })}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus lacinia ultricies. Aliquam eu porttitor eros. Integer vitae porttitor ipsum. Curabitur ut ipsum in velit ornare feugiat. Phasellus non condimentum ex. Proin hendrerit faucibus dictum. Quisque condimentum tincidunt tortor, nec sodales nisi vulputate in. Donec pellentesque, leo in viverra blandit, felis risus tincidunt arcu, vel aliquam massa quam in enim. Phasellus vitae convallis erat. In cursus mi et urna ullamcorper imperdiet. Morbi pellentesque, dolor in aliquam placerat, mi lacus accumsan nibh, vel ultrices mi diam non nisi. Proin eros lacus, lobortis sed elementum at, efficitur vitae ex. Vivamus quam lacus, imperdiet vitae auctor a, varius nec sem. Nullam tincidunt, neque et interdum hendrerit, metus est hendrerit urna, quis consequat sem nibh ac orci. Proin dapibus hendrerit mauris, sed tincidunt urna rutrum et.</Text>
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
