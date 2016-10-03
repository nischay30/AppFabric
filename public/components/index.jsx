import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
	
import {Flex} from '../../node_modules/flexboxgrid/css/flexboxgrid.css';

import	HelloButton from './HelloButton.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Main extends React.Component{

	render () {
		return (
			<div>
			<MuiThemeProvider>
			<div>
			<HelloButton />
			</div>
			</MuiThemeProvider>
			</div>
			);
	}

}

ReactDOM.render(<Main />,document.getElementById('container'));