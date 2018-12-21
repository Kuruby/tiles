import Game from '../components/game'
import GameState from '../lib/game_state'
export default () => (
    <div>
        <Game gameState={GameState} />
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