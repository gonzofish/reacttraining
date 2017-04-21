const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

const SelectLanguage = ({ onSelect, selectedLanguage}) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className="languages">
            {languages.map((language) =>
                <li key={language}
                    onClick={onSelect.bind(null, language)}
                    style={language === selectedLanguage ? { color: '#d0021b' } : null }>{language}</li>,
            this)}
        </ul>
    );
}

SelectLanguage.propTypes = {
    onSelect: PropTypes.func.isRequired,
    selectedLanguage: PropTypes.string.isRequired
};

function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) =>
                <li className="popular-item" key={repo.name}>
                    <div className="popular-rank">#{index + 1}</div>
                    <ul className="space-list-items">
                        <li>
                            <img alt={`Avatar for ${repo.owner.login}`}
                                className="avatar"
                                src={repo.owner.avatar_url} />
                        </li>
                        <li>
                            <a href={repo.html_url}>{repo.name}</a>
                        </li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>
            )}
        </ul>
    );
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
};

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null,
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(language) {
        this.setState(() => ({
            repos: null,
            selectedLanguage: language
        }));

        api.fetchPopularRepos(this.state.selectedLanguage)
            .then((repos) => this.setState(() => ({
                repos
            })));
    }

    render() {
        return (
            <div>
                <SelectLanguage onSelect={this.updateLanguage}
                    selectedLanguage={this.state.selectedLanguage} />
                {this.state.repos ?
                    <RepoGrid repos={this.state.repos}  /> :
                    <p>LOADING</p>
                }
            </div>
        );
    }
}

module.exports = Popular;
