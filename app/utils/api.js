const axios = require('axios');

const id = '3a429c860a9bc8ec10b2';
const secret = '01208d61494a176b15082e0a92736ecd8ddadf76';
const params = `?client_id=${ id }&client_secret=${ secret }`;

const battle = (players) =>
    axios.all(players.map(getUserData))
        .then(sortPlayers);

const getUserData = (player) => axios.all([
    getProfile(player),
    getRepos(player)
]).then((data) => ({
    // profile is data[0], repos is data[1]
    profile: data[0],
    score: calculateScore(data[0], data[1])
}));

const getProfile = (username) => axios.get(`https://api.github.com/users/${ username }${ params }`)
    .then((user) => user.data);
const getRepos = (username) => axios.get(`https://api.github.com/users/${ username }/repos${ params }`)
    .then((user) => user.data);

const calculateScore = (profile, repos) => (profile.followers * 3) + getStarCount(repos);

const getStarCount = (repos) => repos.reduce((count, repo) =>
    count + repo.stargazers_count,
    0
);

const handleError = (error) => {
    console.warn(error);
};

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

const fetchPopularRepos = (language) => {
    const uri = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(uri)
        .then((response) => response.data.items);
};

module.exports = {
    battle,
    fetchPopularRepos
}