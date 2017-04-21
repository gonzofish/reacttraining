const axios = require('axios');

const fetchPopularRepos = (language) => {
    const uri = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(uri)
        .then((response) => response.data.items);
};

module.exports = {
    fetchPopularRepos
}