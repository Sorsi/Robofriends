import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout >
            <Header className="header-color" title="Title" scroll>
              <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
