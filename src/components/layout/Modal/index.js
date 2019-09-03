import React from 'react'
import { bool, func, number } from 'prop-types'
import styled from 'styled-components'

const ModalWrapper = styled.div`
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

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${props => `${props.width}%`};
`

const CloseButton = styled.div`
  color: #FFFFFF;
  font-size: 34px;
  position: absolute;
  right: 10%;
  top: 50px;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

const Modal = ({ children, opened, onClose, width }) => (
  <ModalWrapper opened={opened}>
    <CloseButton onClick={onClose}>&times;</CloseButton>
    <ModalContent width={width}>
      {children}
    </ModalContent>
  </ModalWrapper>
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
