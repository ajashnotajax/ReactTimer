var React = require('react');
var{Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by Ajay Sherawat</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
