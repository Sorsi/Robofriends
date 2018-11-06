import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>LEFT</Cell>
          <Cell col={6}>RIGHT</Cell>
        </Grid>
      </div>
        )
      }
    }
    
    export default Contact;
