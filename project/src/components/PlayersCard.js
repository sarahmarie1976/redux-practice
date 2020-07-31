import React from 'react';

const PlayersCard = (props) => {
    return(
        <div>
            <h2>
                {props.player.name}
            </h2>
            <h3>
                {props.player.age}
            </h3>
            <h3>
                {props.player.height}
            </h3>
        </div>
    )
}

export default PlayersCard;