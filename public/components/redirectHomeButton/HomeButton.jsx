import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

class RedirectHomeButton extends React.Component
{
	render(){
		return(<div className='row center-xs'>
			<Link to='/'>
			<RaisedButton 
			label="Go Home" 
			primary={true}/>
			</Link>
		</div>			);		
	};
};

export default RedirectHomeButton;