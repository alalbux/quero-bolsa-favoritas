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
  Page
} from './components'

function App() {
  return (
    <Page>
      <div className="App">
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
        <Page>test page</Page>
      </div>
    </Page>
  )
}

export default App
