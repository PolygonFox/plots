

import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import * as gameActions from 'Modules/game/actions';

import Cube from './Cube'

import {
    getWorld
} from 'Modules/game/selectors';

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

        const { world } = this.props
        console.log('cube', Cube);
        return (
            <div>
                <div ref="canvas" style={{ overflow: 'hidden', width: '100vw', height: 'calc(100vh - 100px)' }}></div>
                {world &&
                    <Switch>
                        <Route exact path="/game/cube" component={Cube} />
                    </Switch>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        world: getWorld(state)
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