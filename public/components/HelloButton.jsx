import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class HelloButton extends React.Component
{
	render(){
		return(<div className='row center-xs'>
			<RaisedButton 
			label="Hello World" 
			primary={true}/>
		</div>			);		
	};
};

export default HelloButton;