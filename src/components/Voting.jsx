import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return this.props.winner ?
        <Winner ref="winner" winner={ this.props.winner }/> :
        <Vote { ...this.props } />
  }
});


function mapStateToProps(state) {
  const nextTwoEntries = state.getIn(['vote', 'pair']) ||
                         state.get('entries') &&
                         state.get('entries').take(2);
  return {
    pair: nextTwoEntries,
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(
  mapStateToProps, actionCreators
)(Voting);
