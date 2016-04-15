import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],

  addContent: function() {
    if (this.props.winner) {
      return <Winner ref="winner" winner={ this.props.winner }/>
    } else if (!this.props.pair) {
       return <div className="start-div">
        <button ref="next"
                 className="start-vote"
                 onClick={this.props.next}>
          Start the Voting!
        </button>
      </div>
    } else {
      return <Vote { ...this.props } />
    }
  },

  render: function() {
    return <div>
      { this.addContent() }
    </div>
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.getIn(['myVote', 'entry']),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(
  mapStateToProps, actionCreators
)(Voting);
