import Game from '../components/game'
import { List } from 'immutable'
import { GameStateContext, GameStateDefault } from '../lib/game_state'
import BackgroundColorate from '../lib/background_colorate'
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = GameStateDefault
    }
    render() {
        var gradientColors = BackgroundColorate(this.state.backgroundColor)
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
                    background:radial-gradient(${gradientColors.main},${gradientColors.tertiary},
                        ${gradientColors.secondary},${gradientColors.main})
                }`}
                </style>
            </div>)
    }
}

export default Page