import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import '../styles/AddPlayer.css'

export default class AddPlayer extends PureComponent {
    static propTypes = {
        addPlayer: PropTypes.func.isRequired
      }

    state = {name:''}

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(`Submitted form, ${event}`, event)
        console.log(this.state.name)
        this.props.addPlayer(this.state.name)
        this.setState({
            name : ''
        })
    }
    handleChange = (event) =>{
        console.log("[Event Target Name]")
        console.log(event.target.name)
        console.log("Event Target Value")
        console.log(event.target.value)

        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    render(){
        return (
            <div className="add-player">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name : 
                        <input 
                            type="text" 
                            name="name" 
                            onChange={this.handleChange}
                            value = {this.state.name}
                        />
                    </label>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}