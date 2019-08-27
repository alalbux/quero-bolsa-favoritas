import React from 'react'
import {
  Button,
  Header,
  Menu,
  //test
  Card,
  Link,
  Text,
  Checkbox,
  Input,
  Flexbox,
  Modal,
  Page,
  Grid,
  Cell
} from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opened: false }
  }

  render() {
    return (
      <Page>
        <Grid>
          <Cell size={[12, 12, 12]}>
            <Header />
            <Menu />
            Home
            <Button> Test </Button>
            <Card>Test</Card>
            <Link>Test</Link>
            <Text>Test</Text>
            <Checkbox>Test</Checkbox>
            <Flexbox>
              <div>teste flex</div>
              <div>teste flex</div>
              <div>teste flex</div>
              <div>teste flex</div>
            </Flexbox>
            <Flexbox>
              <button onClick={() => this.setState({ opened: true })}>Abrir modal</button>
              <Modal opened={this.state.opened} onClose={() => this.setState({ opened: false })}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus lacinia ultricies. Aliquam eu porttitor eros. Integer vitae porttitor ipsum. Curabitur ut ipsum in velit ornare feugiat. Phasellus non condimentum ex. Proin hendrerit faucibus dictum. Quisque condimentum tincidunt tortor, nec sodales nisi vulputate in. Donec pellentesque, leo in viverra blandit, felis risus tincidunt arcu, vel aliquam massa quam in enim. Phasellus vitae convallis erat. In cursus mi et urna ullamcorper imperdiet. Morbi pellentesque, dolor in aliquam placerat, mi lacus accumsan nibh, vel ultrices mi diam non nisi. Proin eros lacus, lobortis sed elementum at, efficitur vitae ex. Vivamus quam lacus, imperdiet vitae auctor a, varius nec sem. Nullam tincidunt, neque et interdum hendrerit, metus est hendrerit urna, quis consequat sem nibh ac orci. Proin dapibus hendrerit mauris, sed tincidunt urna rutrum et.</Text>
              </Modal>
            </Flexbox>
            <Page>test page</Page>
            <Input placeholder='Placeholder' />
          </Cell>
        </Grid>
      </Page>
    )
  }
}

export default App
