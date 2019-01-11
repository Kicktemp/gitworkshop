var HelperBarView = require('../react_views/HelperBarView.jsx');
var Main = require('../app');
var React = require('react');

var log = require('../log');

var IntlHelperBarView = React.createClass({

  propTypes: {
    shown: React.PropTypes.bool.isRequired,
    onExit: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <HelperBarView
        items={this.getItems()}
        shown={this.props.shown}
      />
    );
  },

  fireCommand: function(command) {
    log.viewInteracted('intlSelect');
    Main.getEventBaton().trigger('commandSubmitted', command);
    this.props.onExit();
  },

  getItems: function() {
    return [{
      text: 'Deutsch',
      testID: 'german',
      onClick: function() {
        this.fireCommand('locale de_DE; levels');
      }.bind(this)
    }, {
      icon: 'signout',
      onClick: function() {
        this.props.onExit();
      }.bind(this)
    }];
  }

});

module.exports = IntlHelperBarView;
