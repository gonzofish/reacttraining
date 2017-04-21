const React = require('react');
const PropTypes = require('prop-types');

const styles = {
    content: {
        fontSize: '35px',
        textAlign: 'center'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        };
    }

    componentDidMount() {
        const stopper = this.props.text + '...';

        this.interval = window.setInterval((previousState) => {
            if (this.state.text === stopper) {
                this.setState(() => ({ text: this.props.text }));
            } else {
                this.setState((prevState) => ({ text: prevState.text + '.' }));
            }
        }, this.props.speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <p style={ styles.content }>
                { this.state.text }
            </p>
        );
    }
}

Loading.defaultProps = {
    speed: 300,
    text: 'Loading'
};

Loading.propTypes = {
    speed: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

module.exports = Loading;
