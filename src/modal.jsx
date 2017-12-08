import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'

import { themeFunction } from './theme'

export class Modal extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    handleClose: PropTypes.func.isRequired,
    closeIcon: PropTypes.node,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
    this.overlayContainer = document.createElement('div')
    document.body.appendChild(this.overlayContainer)
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer)
  }

  render() {
    return ReactDOM.createPortal(
      <ThemeProvider theme={themeFunction}>
        <Background>
          <Container>
            <Heading>
              {this.props.heading || ''}
              <Button type="button" onClick={this.props.handleClose}>
                {this.props.closeIcon}
              </Button>
            </Heading>
            {this.props.children}
          </Container>
        </Background>
      </ThemeProvider>,
      this.overlayContainer
    )
  }
}

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(36, 36, 36, 0.4);
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 350px);
  width: 700px;
  background: white;
  display: flex;
  flex-direction: column;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.tertiary};
  font-weight: bold;
  color: white;
`

const Button = styled.button`
  background: transparent;
  color: hsl(0, 100%, 50%);
  cursor: pointer;
  border: none;
  padding: 0;
  transition: color: ease 0.3s;

  &:hover {
    color: hsl(0, 100%, 70%);
  }
`
