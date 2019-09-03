import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Title from '../../content/Title'
import Text from '../../content/Text'
import Button from '../../content/Button'
import Modal from '../../layout/Modal'
import Select from '../../form/Select'
import Checkbox from '../../form/Checkbox'
import Scholarships from '../../list/Scholarships'
import ScholarshipsItem from '../../list/ScholarshipsItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const AddScholarships = styled(Card)`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AddScholarshipsIcon = styled.div`
  color: #18ACC4;
  padding: 32px;
`

const AddScholarshipsTitle = styled(Title.H3)`
  font-size: 28px;
  margin-bottom: 8px;
`

const AddScholarshipsSubtitle = styled(Text)`
  font-size: 16px;
  text-align: center;
`


class AddScholarshipsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
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
      <div>
        <AddScholarships onClick={() => this.setState({ opened: true })}>
          <AddScholarshipsIcon>
            <FontAwesomeIcon icon={faPlusCircle} size='4x' />
          </AddScholarshipsIcon>
          <AddScholarshipsTitle>Adicionar bolsa</AddScholarshipsTitle>
          <AddScholarshipsSubtitle>Clique para adicionar bolsas do seu interesse</AddScholarshipsSubtitle>
        </AddScholarships>
        <Modal opened={this.state.opened}
          onClose={() => this.setState({ opened: false })}
          width="80"
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
      </div>
    )
  }
}


AddScholarshipsCard.displayName = 'AddScholarshipsCard'

export default AddScholarshipsCard
