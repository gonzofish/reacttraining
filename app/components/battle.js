const React = require('react');
const Link = require('react-router-dom').Link;

const PlayerInput = require('./player-input');
const PlayerCard = require('./player-card');

class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: {
                image: null,
                name: ''
            },
            playerTwo: {
                image: null,
                name: ''
            }
        };

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleReset(id) {
        this.setState(() => ({
            [id]: {
                image: null,
                name: ''
            }
        }));
    }

    handleSubmit(id, username) {
        this.setState(() => ({
            [id]: {
                image: `https://github.com/${username}.png?size=200`,
                name: username
            }
        }));
    }

    render() {
        const match = this.props.match;
        const playerOne = this.state.playerOne;
        const playerTwo = this.state.playerTwo;

        return (
            <div>
                <div className="row">
                    {!playerOne.name &&
                        <PlayerInput id="playerOne"
                            label="Player One"
                            onSubmit={this.handleSubmit} />
                    }
                    {playerOne.image !== null &&
                        <PlayerCard avatar={playerOne.image}
                            id="playerOne"
                            onReset={this.handleReset}
                            username={playerOne.name} />
                    }

                    {!playerTwo.name &&
                        <PlayerInput id="playerTwo"
                            label="Player Two"
                            onSubmit={this.handleSubmit} />
                    }
                    {playerTwo.image !== null &&
                        <PlayerCard avatar={playerTwo.image}
                            id="playerTwo"
                            onReset={this.handleReset}
                            username={playerTwo.name} />
                    }
                </div>

                {playerOne.image && playerTwo.image &&
                    <Link className="button"
                        to={{
                            pathname: `${match.url}/results`,
                            search: `?playerOneName=${playerOne.name}&playerTwoName=${playerTwo.name}`
                        }}>
                        Battle
                    </Link>}
            </div>
        );
    }
}

module.exports = Battle;
