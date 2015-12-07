var React = require('react');
var ReactDOM = require('react-dom');







var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var SampleButton = React.createClass({
    getInitialState: function() { return {playing: false} },
    handleClick: function (event) {
        this.setState({playing: !this.state.playing});
    },
    render: function() {
        var cls = "SampleButton-" + (this.state.playing ? "playing" : "not-playing");
        return (
            <button onClick={this.handleClick} className={cls} >{this.state.playing ? "true" : "false"}</button>
        );
    }
});

ReactDOM.render(<SampleButton />, document.getElementById('content'));
