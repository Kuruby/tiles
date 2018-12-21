import React from 'react'
import Tile from './tile'
import Player from './player'

class Game extends React.Component {
    constructor(props) {
        super()
    }


    render() {

        var tiles = this.props.gameState.tiles
        var gridHeight = tiles.size
        var gridWidth = tiles.get(0).size
        var player = this.props.gameState.player
        return (
            <tilegrid className={player.movementPending ? "selecting" : ""}>
                {tiles.map((row, i) => (
                    row.map((tile, j) => (
                        <tile key={`${i}/${j}`} style={{ gridColumn: j + 1, gridRow: i + 1 }}>
                            <Tile tile={tile} p={player} fo={()=>this.forceUpdate()} l={{x:j,y:i}}/>
                        </tile>
                    ))
                ))}
                <Player p={player} fo={()=>this.forceUpdate()} />
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
            </tilegrid>)
    }
}

export default Game