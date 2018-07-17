import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class Player extends PureComponent{
    static propTypes = {
        name : PropTypes.string.isRequired
    }
    state = {
        score: 0
    }

    incrementScore(){
        console.log(this, 'this in incerementScore');
        // this.setState({
        //     score: this.state.score +1,
        // });
        this.setState((prevState, props)=>{
            console.log("PrevSate, props")
            console.log(prevState, props)
            return {score : prevState.score +1}
        } )
    }

    decrementScore(){
        console.log(this, 'this in incerementScore');
        // this.setState({
        //     score: this.state.score -1,
        // });

        this.setState((prevState, props)=>{
            console.log("PrevSate, props")
            console.log(prevState, props)
            return {score : prevState.score -1}
        } )
    }

    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>
                    <span onClick={()=>this.decrementScore()}>Decrement Score</span>
                        <b>Score is : {this.state.score}</b>
                    <span onClick={()=>this.incrementScore()}>Increment Score</span>
                </div>
            </div>
        )
    }
}

export default Player