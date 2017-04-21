const React = require('react');
const PropTypes = require('prop-types');

const PlayerCard = require('./player-card');

const Profile = (props) => {
    const info = props.info;

    return (
        <PlayerCard avatar={ info.avatar_url } username={ info.login }>
            <ul className="space-list-items">
                { info.name && <li>{ info.name }</li> }
                { info.location && <li>{ info.location }</li> }
                { info.company && <li>{ info.company }</li> }
                <li>Followers: { info.followers }</li>
                <li>Following: { info.following }</li>
                <li>Public Repos: { info.public_repos }</li>
                { info.blog && <li><a href={ info.blog }>{ info.blog }</a></li>}
            </ul>
        </PlayerCard>
    );
};

Profile.propTypes = {
    info: PropTypes.object.isRequired
};

module.exports = Profile;
