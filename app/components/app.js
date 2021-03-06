const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Battle = require('./battle');
const Home = require('./home');
const Nav = require('./nav');
const Popular = require('./popular');
const Results = require('./results');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/battle" component={Battle} exact />
                        <Route path="/battle/results" component={Results} />
                        <Route path="/popular" component={Popular} />
                        <Route component={() => <p>Not found!</p>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

module.exports = App;
