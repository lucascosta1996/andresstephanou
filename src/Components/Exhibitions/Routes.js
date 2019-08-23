import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ExhibitionsImagesList from './ExhibitionsImageList'
import Exhibition from './Exhibition'
import { exhibitionsList } from './exhibitionsList'

class ExhibitionsRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/exhibitions" component={ ExhibitionsImagesList }  />
        {
          exhibitionsList.map( show => (
            <Route
              exact path={`/exhibitions/${show.route}`}
              render={ props => <Exhibition {...this.props} show={show} /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default ExhibitionsRoutes