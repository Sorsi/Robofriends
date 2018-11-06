import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {
  state = {
    activeTab: 0,
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover' }}>
            React Project #1
         </CardTitle>
          <CardText>
            blblblblbblblbllskkasdklklasdkjldskljdskljdsffkjldskljdskljdskljdkjldskjldskjldslkjésdfa
           kdsfjlksdjfopeirjfklndjkhsukdhgkjdfhgueoifhgg
           dfgjoiefogjoegjoufjgfdjoigdfjoigjoiffiodfoijdfiojfd
         </CardText>
          <CardActions border>
            <button>GitHub</button>
            <button>CodePen</button>
            <button>LiveDemo</button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>
            This is MongoDB
            </h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>
            This is Angular
            </h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Angular</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
