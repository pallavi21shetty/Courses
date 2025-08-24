import React from "react"

 class A_class extends React.PureComponent {

  render() {
    console.log('Pure Component!!');
    
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default A_class