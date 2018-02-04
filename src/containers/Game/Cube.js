

import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as WHS from 'whs';
import * as THREE from 'three';

import * as gameActions from 'Modules/game/actions';

import { getWorld } from 'Modules/game/selectors';

class Cube extends Component {
    static state = {
        object: null,
        material: null,
        loop: null
    }

    componentWillMount() {

    
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        });

        this.setState({
            material
        })

        const object = new WHS.Box({
            geometry: {
                width: 15,
                height: 15,
                depth: 15
            },

            material,

            shadow: {
                receive: false
            },

            position: {
                x: 0,
                y: 0,
                z: 0
            }
        });

        const loop = new WHS.Loop(() => {
            object.rotation.y += 0.05;
        });

        loop.start(this.props.world)

        this.setState({
            object,
            loop
        })
    }

    componentWillUnmount() {
        const { world } = this.props;
        const { object, loop } = this.state;
        loop.stop(this.props.world)
        world.remove(object);
    }

    render() {
        const { world } = this.props;

        if (this.state.object) {
            world.add(this.state.object);
        }

        return (
            null
        );
    }
}

Cube = connect((state) => ({
    world: getWorld(state)
}),
    (dispatch) => ({}))(Cube)

export default Cube;