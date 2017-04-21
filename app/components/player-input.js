const React = require('react');
const PropTypes = require('prop-types');

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const username = event.target.value;

        this.setState(() => ({
            username
        }))
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.username
        );
    }

    render() {
        return (
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>

                <input autoComplete="off"
                    id="username"
                    onChange={this.handleChange}
                    placeholder="GitHub username"
                    type="text"
                    value={this.state.username} />

                <button className="button"
                    disabled={!this.state.username}
                    type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

module.exports = PlayerInput;
