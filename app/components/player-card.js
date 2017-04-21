const React = require('react');
const PropTypes = require('prop-types');

const PlayerCard = (props) => {
    return (
        <div className="column">
            <img alt={`Avatar for ${props.username}`}
                className="avatar"
                src={props.avatar} />
            <h2 className="username">@{props.username}</h2>
            <button className="reset"
                onClick={props.onReset.bind(null, props.id)}>
                Reset
            </button>
        </div>
    );
}

PlayerCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = PlayerCard;
