import React from 'react'
import { GameStateContext } from '../lib/game_state';

class Tile extends React.Component {
    constructor(props) {
        super(props)   
    }

    onClick = () => {
        if(this.player.movementPending)
        {
            this.player.l = this.props.l;
            this.player.movementPending=false;
            this.props.fo();
        }
    }

    render() {

        let context = this.context


        this.player = context.player
        

        this.tile = context.tiles.get(this.props.l.y).get(this.props.l.x)
        if(typeof this.tile == "string")
        {
            this.tile = {r:this.tile}
        }
        this.tile.c = this.tile.c || "black"
        this.tile.t = this.tile.t || "white"
        this.tile.b = this.tile.b || "silver"
        var tile = this.tile

        return (
            <div onClick={this.onClick}>
                {tile.r}
                <style jsx>
                    {`
                    div{
                        width:100px;
                        height:100px;
                        border:3px solid ${tile.b};
                        border-radius:15px;
                        text-align:center;
                        font-size:75px;
                        user-select:none;
                        color:${tile.t};
                        background-color:${tile.c};
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
            </div>

        )
    }
}

Tile.contextType = GameStateContext

export default Tile