const React = require('react');
const PropTypes = require('prop-types');

const Profile = require('./profile');

const Player = (props) => (
    <div>
        <h1 className="header">{ props.label }</h1>
        <h3 style={ { textAlign: 'center' }}>Score: { props.score }</h3>
        <Profile info={ props.profile } />
    </div>
);

Player.propTypes = {
    label: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired
};

module.exports = Player;