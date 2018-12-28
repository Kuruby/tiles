import DefaultPlayer from './default_player'

const FixPlayer = (player)=>{
    player.color = player.color || player.c || DefaultPlayer.color
    player.location = player.location || player.l || DefaultPlayer.l
    player.renderCharacter = player.renderCharacter || player.r || DefaultPlayer.renderCharacter
    return player
}

export default FixPlayer