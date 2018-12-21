import React from 'react'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        
        this.player = this.props.p

        this.tile = this.props.tile || {};
        if(typeof this.tile == "string")
        {
            this.tile = {r:this.tile}
        }
        this.tile.c = this.tile.c || "black"
        this.tile.t = this.tile.t || "white"
        this.tile.b = this.tile.b || "silver"
    }

    onClick = () => {
        if(this.player.movementPending)
        {
            this.player.l = this.props.l;
            this.player.movementPending=false;
            this.props.fo();
        }
    }

    render() {
        var tile = this.tile

        return (
            <div onClick={this.onClick}>
                {tile.r}
                <style jsx>
                    {`
                    div{
                        width:100px;
                        height:100px;
                        border:3px solid ${tile.b};
                        border-radius:15px;
                        text-align:center;
                        font-size:75px;
                        user-select:none;
                        color:${tile.t};
                        background-color:${tile.c};
                    }
                `}
                </style>
                <style>
                    {`
                    .selecting div:hover{
                        border-color:purple;
                        background-color:light-purple;
                    }`}
                </style>
            </div>

        )
    }
}

export default Tile