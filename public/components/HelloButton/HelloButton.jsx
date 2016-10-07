import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

class HelloButton extends React.Component
{
	render(){
		return(<div>
			<Link to='/replicationpage'>
			<RaisedButton 
			label="Hello World" 
			primary={true}/>
			</Link>
		</div>			);		
	};
};

export default HelloButton;