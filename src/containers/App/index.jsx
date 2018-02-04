import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import theme from 'Constants/theme';

import Home from '../pages/Home'
import Game from '../pages/Game'

import MainNavigation from 'Components/UI/Menus/MainNavigation'
import Button from 'Components/UI/Button';

const StyledApp = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor };
    color: white;
    height: 100vh;
    width: 100vw;
    font-family: Lato;
`
class App extends Component {
    // static state = {  }
    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <StyledApp>
                        <MainNavigation>
                            <Link to="/"><Button>HOME</Button></Link>
                            <Link to="/game"><Button>GAME</Button></Link>
                        </MainNavigation>
                        <Route exact path="/" component={Home} />
                        <Route path="/game" component={Game} />
                    </StyledApp>
                </ThemeProvider>
            </Router>
        );
    }
}

export default App;