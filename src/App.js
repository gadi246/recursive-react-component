import React from 'react';
import logo from './logo.svg';
import './App.css';
const Cube = props => <div {...props} style={{width:20, height:20, background: 'red'}}/>;
class List extends React.Component{
  state = {
    cubes: this.props.cubes && [{children: false}]
  };
  handleClick = index => {
    const clickedCubeHasChildren = this.state.cubes[index].children;
    if(clickedCubeHasChildren){
     return this.setState({cubes: [...this.state.cubes, {children: false}]});
    }
    this.setState(({cubes}) => ({cubes: cubes.map((cube, i) => i === index ? {...cube, children: true} : cube )}))
  };
    render(){
      return(
          <ul>
              {this.state.cubes.map(({children}, i) => {
                return <li><Cube onClick={() => this.handleClick(i)}/>{ children && <List cubes={children}/>}</li>;
              })}
          </ul>
      )
    }
}

function App() {
  return (
    <div className="App">
        <List cubes={true}/>
    </div>
  );
}

export default App;
