import Game from '../components/game'
import {List} from 'immutable'
import { GameStateContext, GameStateDefault } from '../lib/game_state'
class Page extends React.Component {
    constructor(props){
        super(props)
        this.state = GameStateDefault
    }
    render() {
        return (
            <div>
                <GameStateContext.Provider value={this.state}>
                    <Game />
                </GameStateContext.Provider>
                <style jsx>
                    {`div
                {
                    position:absolute;
                    left:0;
                    right:0;
                    top:0;
                    bottom:0;
                    background:radial-gradient(black,#0A0A0A,#040404,black)
                }`}
                </style>
            </div>)
    }
}

export default Page