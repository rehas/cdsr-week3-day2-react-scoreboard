import React, { PureComponent } from 'react';
import Player from './Player'

class Scoreboard extends PureComponent {
    state = {
        players : ['Munish', 'Jackson']
    }

    renderPlayers(players){
        return players.map(player =>{
            return <Player name = {player} key={player}/>
        })
    }

  render() {
      console.log(this.state);
      
    return (
      <div >
        Test
        {this.renderPlayers(this.state.players)}
      </div>
    );
  }
}

export default Scoreboard;
