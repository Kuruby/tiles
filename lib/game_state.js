import { List } from 'immutable'
import React from 'react'
const GameStateDefault = {
    player: {
        r: "👭",
        l: {
            x: 1,
            y: 1
        },
        movementPending: false,
        color: "magenta"
    },

    tiles: List([
        List(["🎄", { r: "❆" }, { r: "⛄", c: "gray" }, "🚇", {}, "🚇"]),
        List([{ r: "🌲", c: "white" }, {}, "", { r: "🚁" }, { r: "🎋" }, { r: "🌲", c: "white" }]),
        List(["🎋", { c: "white" }, { r: "🌳" }, { r: "🌳" }, { c: "white" }, { r: "🌲", c: "white" }]),
        List([{ r: "" }, { c: "purple", r: "🚇" }, { r: "🌲", b: "cyan" }, { r: "" }, { r: "🌲" }, {}]),
        List([{ r: "🌲", c: "white" }, "🌲", { r: "🌲", c: "white" }, "", "", { r: "🌲", c: "white" }]),
        List([{ r: "❅", c: "#70F0FF", t: "white" }, { r: "🌲", c: "white" }, { r: "🌲", c: "white" }, { r: "🌲", c: "white" }, "C", "Q", "D"])])
}

const GameStateContext = React.createContext(GameStateDefault)

export { GameStateContext, GameStateDefault }