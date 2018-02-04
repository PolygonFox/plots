

import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as gameActions from 'Modules/game/actions';

class Game extends Component {
    state = {
        name: 'Test'
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.initializeGame(this.refs['canvas'])
    }

    componentWillUnmount() {
        this.props.unloadGame()
    }

    render() {
        return (
            <div ref="canvas" style={{ overflow: 'hidden', width: '100%', height: 'calc(100% - 100px)' }}></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
  
    return {
        initializeGame: (element) => dispatch(gameActions.initialize.request(element)),
        unloadGame: () => dispatch(gameActions.unload.request())
    }
}

Game = connect(mapStateToProps, mapDispatchToProps)(Game)

export default Game;