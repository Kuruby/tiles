import React from 'react'
import { GameStateContext } from '../lib/game_state';

class Player extends React.Component {
    constructor(props) {
        super(props)
    }
    onClick = () => {
        this.player.movementPending = !this.player.movementPending;
        this.props.fo()
    }

    

    render() {
        let context = this.context
        this.player=context.player
        var l = this.player.l
        var r = this.player.r
        return (
            <player onClick={this.onClick}>
                <div className={this.player.movementPending ? "selected" : ""}>
                    {r}
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
                        grid-column:${l.x + 1};
                        grid-row:${l.y + 1};
                    }`}</style>
            </player>)
    }
}

Player.contextType = GameStateContext

export default Player