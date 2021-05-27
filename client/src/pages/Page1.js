import React, { Component } from 'react'
import { Container } from 'reactstrap'



export default class Page1 extends Component {
  render () {
    console.log('page1')
    return (
      <div>
        {/* <Container className="main-container"> */}
          <h3>Page 1</h3>
          <h5>Subtitle</h5>
        {/* </Container> */}
      </div>
    )
  }
}
