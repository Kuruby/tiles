import React from 'react'
import { GameStateContext } from '../lib/game_state';

class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick = () => {
        if (this.player.pendingMovement) {
            delete this.player.pendingMovement
        }
        else {
            this.player.pendingMovement = Object.assign({}, this.player.location)
        }
        this.context.fo()
    }


    render() {
        let context = this.context
        this.player = context.player

        var location = this.player.location
        var renderCharacter = this.player.renderCharacter
        return (
            <player onClick={this.onClick}>
                <div className={this.player.pendingMovement ? "selected" : ""}>
                    {renderCharacter}
                </div>
                <style jsx>
                    {`
                    div.selected{
                        border-color:purple;
                        background-color:rgba(00,23,120,50);
                    }                    
                    div{
                        z-index:9999;
                        width:100px;
                        height:100px;
                        background-color:transparent;
                        border:3px solid gold;
                        border-radius:15px;
                        text-align:center;
                        font-size:75px;
                        user-select:none;
                        color:${this.player.color};
                    }
                    player{
                        grid-column:${location.x + 1};
                        grid-row:${location.y + 1};
                    }`}</style>
            </player>)
    }
}

Player.contextType = GameStateContext

export default Player