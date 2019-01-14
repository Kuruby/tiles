import React from 'react'
import { GameStateContext } from '../lib/game_state';

class Tile extends React.Component {
    state = {
        targeted: false
    }

    onClick = () => {
        if (this.player.pendingMovement) {
            this.player.pathfinding.complete(this.player)
            this.setState({ targeted: false })
            this.context.fo()
        }
    }

    onMouseEnter = () => {
        if (this.player.pendingMovement) {
            this.player.pathfinding.target(this.player, this.props.l)
            this.setState({ targeted: true })
            this.context.fo()
        }

    }

    onMouseLeave = () => {
        if (this.player.pendingMovement) {
            this.player.pathfinding.release(this.player)
            this.setState({ targeted: false })
        }

    }

    render() {

        let context = this.context

        this.player = context.player

        var location = this.props.l

        this.tile = context.tiles.get(location.x).get(location.y)
        var tile = this.tile

        var className = this.state.targeted ? "target" : ""
            || this.player.pathfinding.isInPath(this.player,
                { location: location }) ? "intermediate" : ""

        return (
            <tile>
                <div onClick={this.onClick} onMouseLeave={this.onMouseLeave}
                    onMouseEnter={this.onMouseEnter} className={className}>
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
                    .target{
                        border-color:purple;
                        background-color:hotpink;
                    }
                    .intermediate{
                        background-color:mediumpurple;
                        border-color:#f0f0f0;
                    }
                `}
                </style>
            </tile>
        )
    }
}

Tile.contextType = GameStateContext

export default Tile