import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

class ApplicationList extends React.Component
{
	render(){

		const style = {
 		 height: 80,
 		 width: 300,
 		 margin: 20,
 		 textAlign: 'center',
 		 display: 'inline-block',
 		 backgroundColor:'lightGrey'
		};
		return(<div>
			<Paper zDepth={2} style={style} >
			<h3>H1</h3>
			</Paper>
			
			</div>
			);
	};
};

export default ApplicationList;