import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import { Map } from 'immutable';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry){
    return this.props.hasVoted === entry;
  },
  getEntryMap(entry){
    return {
      vote: entry,
      voterId: 1
    }
  },
  render: function(){
    return <div className="voting">
      { this.getPair().map(entry =>
        <button key={ entry }
                className={classNames({voted: this.hasVotedFor(entry)})}
                onClick={ () => this.props.vote(this.getEntryMap(entry)) }>
          <h1>{ entry }</h1>
          { this.hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null }
        </button>
      )}
    </div>;
  }
});
