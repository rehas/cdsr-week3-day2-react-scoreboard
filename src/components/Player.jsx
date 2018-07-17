import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import '../styles/Player.css'
import PlusButton from './PlusButton';

class Player extends PureComponent{
    static propTypes = {
        name : PropTypes.string.isRequired,
        score : PropTypes.number.isRequired,
        onClick : PropTypes.func.isRequired,
        onDecrementClick : PropTypes.func.isRequired,
    }
   
    
    
    
    
    render(){
        return (
            <li className="player">
            <span onClick={this.props.onDecrementClick}>Decrement Score</span>
                <p className="name"> {this.props.name}</p>
                <p className= "score">Score : {this.props.score}</p>
                <PlusButton onClick={this.props.onClick}/>
            </li>
        )
    }
}

export default Player