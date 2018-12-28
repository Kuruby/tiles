import React from 'react'
import { GameStateContext } from '../lib/game_state';

class Tile extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick = () => {
        if (this.player.movementPending) {
            this.player.location = this.props.l;
            this.player.movementPending = false;
            this.props.fo();
        }
    }

    onMouseLeave = ()=>
    {
        console.log("exit")
    }

    render() {

        let context = this.context

        this.player = context.player

        var l = this.props.l

        this.tile = context.tiles.get(l.x).get(l.y)
        var tile = this.tile

        return (
            <tile>
                <div onClick={this.onClick} onMouseLeave={this.onMouseLeave}>
                    {tile.renderCharacter}
                </div>
                <style jsx>
                    {`
                    tile{
                        grid-column: ${l.x + 1};
                        grid-row: ${l.y + 1}
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