import DefaultTile from './default_tile'

const FixTile = (tile) => {
    var realTile = {}

    //Different types of tiles to one object
    if (typeof tile === "string") {
        realTile.r = tile
    }
    else if (typeof tile === "object") {
        realTile = tile
    }

    //Fill missing fields in the tile from three sources: Abbreviated (and unabbreviated) fields in 
    //the original tile, as well as the defaults object.
    realTile.backgroundColor = realTile.c || realTile.backgroundColor || DefaultTile.backgroundColor
    realTile.borderColor = realTile.b || realTile.borderColor || DefaultTile.borderColor
    realTile.renderCharacter = realTile.r || realTile.renderCharacter || DefaultTile.renderCharacter
    realTile.textColor = realTile.t || realTile.textColor || DefaultTile.textColor

    //return the fixed tile
    return realTile
}


export default FixTile