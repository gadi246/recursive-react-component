import React from 'react';
import Cube from './Cube';

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

export default List;