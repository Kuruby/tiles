import DefaultPlayer from './default_player'
import Player from '../../components/player';

const FixPlayer = (player) => {

    player.color = player.color || player.c || DefaultPlayer.color
    player.location = player.location || player.l || DefaultPlayer.location
    player.pathfinding = player.pathfinding || DefaultPlayer.pathfinding
    player.renderCharacter = player.renderCharacter || player.r || DefaultPlayer.renderCharacter
    return player
}

export default FixPlayer