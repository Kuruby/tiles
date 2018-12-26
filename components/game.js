import React from 'react'
import Tile from './tile'
import Player from './player'
import { GameStateContext } from '../lib/game_state'



class Game extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        let context = this.context

        var tiles = context.tiles
        var gridHeight = tiles.size
        var gridWidth = tiles.get(0).size
        var player = context.player
        return (

            <tilegrid className={player.movementPending ? "selecting" : ""}>
                {tiles.map((row, i) => (
                    row.map((tile, j) => (
                        <tile key={`${i}/${j}`} style={{ gridColumn: j + 1, gridRow: i + 1 }}>
                            <Tile tile={tile} fo={() => this.forceUpdate()} l={{ x: j, y: i }} />
                        </tile>
                    ))
                    ))}
                <Player fo={() => this.forceUpdate()} />
                <style jsx>
                    {`
                tilegrid
                {
                    position:fixed;
                    left:20%;
                    top:10%;
                    display:grid;
                    grid-template-columns: repeat(${gridWidth},1fr);
                    grid-template-rows: repeat(${gridHeight},1fr);
                    width:100px;
                    grid-gap:5px;
                }
                
                    `}
                </style>
            </tilegrid>
        )
    }
}

Game.contextType = GameStateContext

export default Game