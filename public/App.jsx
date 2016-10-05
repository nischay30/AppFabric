import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import HomePage from './views/HomePage';
import SecondPage from './views/SecondPage';
import ReplicationPage from './views/ReplicationPage';


import injectTapEventPlugin from 'react-tap-event-plugin';
import Flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

class App extends React.Component{

	render(){
		return(
			<div>
			<MuiThemeProvider>
			<div>
			<Router history={hashHistory}>
			<Route path='/' component={HomePage}/>
			<Route path='/secondpage' component={SecondPage} />
			<Route path='/replicationpage' component={ReplicationPage} />
			
			</Router>
			</div>
			</MuiThemeProvider>
			</div>
			);
	}
};

ReactDOM.render(<App />,document.getElementById('container'));