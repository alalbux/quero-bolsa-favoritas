import React from 'react'
import { bool, func, number } from 'prop-types'
import styled from 'styled-components'

const ModalStyled = styled.div`
  display: ${props => !props.opened ? 'none' : 'block'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

const ModalContentStyled = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${props => `${props.width}%`};
  border-radius: 10px;
`

const CloseButtonStyled = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

const Modal = ({ children, opened, onClose, width }) => (
  <ModalStyled opened={opened}>
    <ModalContentStyled width={width}>
      <CloseButtonStyled onClick={onClose}>&times;</CloseButtonStyled>
      {children}
    </ModalContentStyled>
  </ModalStyled>
)

Modal.propTypes = {
  opened: bool,
  width: number,
  onClose: func.isRequired
}

Modal.defaultProps = {
  opened: false,
  width: 30
}

export default Modal
