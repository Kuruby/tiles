import React from 'react'
import { GameStateContext } from '../lib/game_state';

class Tile extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick = () => {
        if (this.player.pendingMovement) {
            this.player.pathfinding.target(this.player, this.props.l)
            this.player.pathfinding.complete(this.player)
            this.context.fo()
        }
    }

    onMouseLeave = () => {
        if (this.player.pendingMovement) {
            this.player.pendingMovement = "nowhere"
            //this.player.pathfinding.release()
        }
    }

    render() {

        let context = this.context

        this.player = context.player

        var location = this.props.l

        this.tile = context.tiles.get(location.x).get(location.y)
        var tile = this.tile

        return (
            <tile>
                <div onClick={this.onClick} onMouseLeave={this.onMouseLeave}>
                    {tile.renderCharacter}
                </div>
                <style jsx>
                    {`
                    tile{
                        grid-column: ${location.x + 1};
                        grid-row: ${location.y + 1}
                    }
                    div{
                        width:100px;
                        height:100px;
                        border:3px solid ${tile.borderColor};
                        border-radius:15px;
                        text-align:center;
                        font-size:75px;
                        user-select:none;
                        color:${tile.textColor};
                        background-color:${tile.backgroundColor};
                    }
                `}
                </style>
                <style>
                    {`
                    .selecting div:hover{
                        border-color:purple;
                        background-color:light-purple;
                    }`}
                </style>
            </tile>
        )
    }
}

Tile.contextType = GameStateContext

export default Tile