import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ExhibitionsImagesList from './ExhibitionsImageList'
import Exhibition from './Exhibition'
import { exhibitionsList } from './exhibitionsList'

class ExhibitionsRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ ExhibitionsImagesList }  />
        <Route exact path="/work" component={ ExhibitionsImagesList }  />
        {
          exhibitionsList.map( show => (
            <Route
              key={show.name}
              exact path={`/work/${show.route}`}
              render={ props => <Exhibition {...this.props} show={show} /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default ExhibitionsRoutes