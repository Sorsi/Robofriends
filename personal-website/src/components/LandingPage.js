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
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
