const React = require('react');
const PropTypes = require('prop-types');

const PlayerCard = (props) => {
    return (
        <div className="column">
            <img alt={`Avatar for ${props.username}`}
                className="avatar"
                src={props.avatar} />
            <h2 className="username">@{props.username}</h2>
            { props.children }
        </div>
    );
}

PlayerCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = PlayerCard;
