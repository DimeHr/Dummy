import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonMain from './First/Second/Button';
import PanelWithButton from './Third/Fourth/PanelWithButton';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from './authorization/actions/actions';
const ButtonContainer = styled.div`
  text-align: center;
`;

const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <ButtonContainer>
                <ButtonMain primary onClick={ props.handleLogin }/>
            </ButtonContainer>
            <PanelWithButton/>
        </div>
    )
};

const mapDispatchToProps = {
    handleLogin: loginUser,
};

export default connect(null, mapDispatchToProps)(App);
