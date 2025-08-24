
import React, { Component } from 'react'

export class B_Regular extends Component {

  render() {
      console.log("Regular Component!!")
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default B_Regular