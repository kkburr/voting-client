import React from 'react';
import { Map } from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

export const Navigation = React.createClass({
  mixins: [PureRenderMixin],
  getRoutes: function() {
    if (this.props.navigation) {
      let routes = [];
      this.props.navigation.forEach(function(value, key, ownerMap) {
        const newRoute = Map({
          title: key,
          path: value
        });
        routes.push(newRoute);
      });
      return routes;
    }
  },
  render: function() {
    return <div className="navigation">
      <ul>
        { this.getRoutes() && this.getRoutes().map(route =>
          <li key={ route.get('title') }>
            <a href={ route.get('path') }>
              { route.get('title') }
            </a>
          </li>
        )}
      </ul>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    navigation: state.get('navigation')
  }
}

export const NavigationContainer = connect(
  mapStateToProps,
  actionCreators
)(Navigation);
