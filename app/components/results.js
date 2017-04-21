const React = require('react');
const api = require('../utils/api');
const Player = require('./player');
const queryString = require('query-string');

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loading: true,
            loser: null,
            winner: null
        };
    }

    componentDidMount() {
        const players = queryString.parse(this.props.location.search);

        api.battle([players.playerOneName, players.playerTwoName])
            .then((results) => {
                let newState;

                if (results === null) {
                    newState = {
                        error: 'There was an error. Check that both users exist on Github.'
                    };
                } else {
                    newState = {
                        error: null,
                        loser: results[1],
                        winner: results[0]
                    };
                }

                this.setState(Object.assign({ loading: false }, newState));
            });
    }

    render() {
        const {
            error, loading, loser, winner
        } = this.state;

        if (loading === true) {
            return <p>Loading...</p>;
        }

        if (error) {
            return (
                <div>
                    <p>{ error }</p>
                    <Link to="/battle">Reset</Link>
                </div>
            );
        }

        return (
            <div className="row">
                <Player label="Winner"
                    profile={ winner.profile }
                    score={ winner.score } />
                <Player label="Winner"
                    profile={ loser.profile }
                    score={ loser.score } />
            </div>
        );
    }
}

module.exports = Results;
