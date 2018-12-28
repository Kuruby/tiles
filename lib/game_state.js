import { List } from 'immutable'
import React from 'react'
import FixTile from './fix_tile'
import DefaultTile from './default_tile'
import FixPlayer from './fix_player';

const imperfectTiles = [
    ["🎄", { r: "❆" }, { r: "⛄", c: "gray" }, "🚇", {}, "🚇"],
    [{ r: "🌲", c: "white" }, {}, "", { r: "🚁" }, { r: "🎋" }, { r: "🌲", c: "white" }],
    ["🎋", { c: "white" }, { r: "🌳" }, { r: "🌳" }, { c: "white" }, { r: "🌲", c: "white" }],
    [{ r: "" }, { c: "purple", r: "🚇" }, { r: "🌲", b: "cyan" }, { r: "" }, { r: "🌲" }, {}],
    [{ r: "🌲", c: "white" }, "🌲", { r: "🌲", c: "white" }, "", "", { r: "🌲", c: "white" }],
    [{ r: "❅", c: "#70F0FF", t: "white" }, { r: "🌲", c: "white" }, { r: "🌲", c: "white" }, { r: "🌲", c: "white" }, "C", "Q", "D"]]

//fix tiles row by row for every tile
const objectTiles = imperfectTiles.map((row) => row.map((tile) => FixTile(tile)))

//Count largest number of tiles in some row
var rowCounts = objectTiles.map((row) => row.length) //map a function from the rows to their widths onto the tiles
var widestRowWidth = Math.max(...rowCounts) //use math.max to get the largest value

//Change the array from being an array of columns
const XYTileArray = []
for (var rowNumber in objectTiles) {
    for (var columnNumber = 0; columnNumber < widestRowWidth; columnNumber++) {
        if (!XYTileArray[columnNumber]) {
            XYTileArray[columnNumber] = []
        }
        XYTileArray[columnNumber][rowNumber] = objectTiles[rowNumber][columnNumber] || DefaultTile
    }
}

const TileLists = List(XYTileArray.map((row) => List(row)))

const imperfectPlayer = {
    r: "👭",
    l: {
        x: 1,
        y: 1
    },
    movementPending: false,
    color: "magenta"
}

const fixedPlayer = FixPlayer(imperfectPlayer)

const GameStateDefault = {
    backgroundColor: "black",
    player: fixedPlayer,
    tiles: TileLists
}

const GameStateContext = React.createContext(GameStateDefault)

export { GameStateContext, GameStateDefault }