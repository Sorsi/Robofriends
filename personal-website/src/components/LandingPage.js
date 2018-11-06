import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="profile-pic"
              src="Sorsi2.png"
              alt="pic"
            />
            <div className="banner-text">
              <h1>Junior Sorftware Developer</h1>
              <hr />
              <p>HTML/CSS | Ant Design | JavaScript | Raact | Redux | MongoDB</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/orsolya-suto/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/Sorsi" target="_blank">
                  <i className="fa fa-github-square" />
                </a>
                <a href="https://www.freecodecamp.org/sorsi" target="_blank">
                  <i className="fa fa-free-code-camp" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
