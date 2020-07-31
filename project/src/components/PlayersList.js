import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PlayersCard from './PlayersCard';
import { fetchPlayers } from '../actions/actions';


const PlayersList = (props) => {
    useEffect(() => {
        props.fetchPlayers()
    }, []);
    return(
        <div>
            {props.players.map(player => (<PlayersCard player={player}/>))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        players: state.players,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(
    mapStateToProps,
    {fetchPlayers}
)(PlayersList);