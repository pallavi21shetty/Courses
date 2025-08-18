import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    console.log('Constructor: component is being created');
    this.state ={
      count: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps: Props are being updated');
    return null;  
  }
 componentDidMount(){
  console.log('componentDidMount: Component has been rendered to the DOM');
 } 
 shouldComponentUpdate(nextProps, nextState){
  console.log('shouldComponentUpdate: Deciding whether to re-render');
  return true;
 }
 render(){
  console.log('render: Component is being rendered');
  return(
    <div>
    <h1>Full life cycle Method Demo</h1> 
    <p>Count: {this.state.count}</p>
    <button onClick={this.handleClick}>Increment</button>
    </div>
  );
 }

 getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('getSnapshotBeforeUpdate: Capturing some into before DOM updates');
  return null;
 }
 componentDidUpdate(prevProps, prevState){
  console.log('componentDidUpdate: Capturing some info before DOM updates');
  console.log('Previous state:',prevState);
  console.log('Current State:',this.state);
 }
 
 componentWillUnmount(){
 console.log('componentWillUnmount: Component is being removed from the DOM');
 }
 handleClick = ()=>{
  this.setState({count: this.state.count+1});
 }
}
export default App;
