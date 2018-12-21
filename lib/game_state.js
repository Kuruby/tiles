import {List} from 'immutable'
const GameState = {
    player : {
        r: "👭",
        l: {
            x: 1,
            y: 1
        },
        s: false,
        movementPending:false
    },

    tiles: List([
        List(["🎄", { r: "❆" }, { r: "⛄", c: "gray" }, "🚇", {}, "🚇"]),
        List([{ r: "🌲", c: "white" }, {}, "", { r: "🚁" }, { r: "🎋" }, { r: "🌲", c: "white" }]),
        List(["🎋", { c: "white" }, { r: "🌳" }, { r: "🌳" }, { c: "white" }, { r: "🌲", c: "white" }]),
        List([{ r: "" }, { c: "purple", r: "🚇" }, { r: "🌲", b: "cyan" }, { r: "" }, { r: "🌲" }, {}]),
        List([{ r: "🌲", c: "white" }, "🌲", { r: "🌲", c: "white" }, "", "", { r: "🌲", c: "white" }]),
        List([{ r: "❅", c: "#70F0FF", t: "white" }, { r: "🌲", c: "white" }, { r: "🌲", c: "white" }, { r: "🌲", c: "white" }, "C", "Q", "D"])])
}

export default GameState