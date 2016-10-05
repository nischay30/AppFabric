import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider'; 
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

class ReplicaNumber extends React.Component
{
	render(){

		const style = {
     	height: 40,
     	width: '100%',
     	background: 'lightGrey',
     	display: 'block',
    	};

		return(<div>
			<Paper zDepth={3} circle={true} style={style}>
			<h2 className="row center-xs">ServiceName</h2>
			</Paper>
			<div className="row">
			<h3 className=" col-xs-8" style={{marginTop:'35px'}}>Current Instances:</h3>
			<div className=" col-xs-4" style={{marginBottom:'20px'}}>
			<form>
			<TextField floatingLabelText="No. of replicas required" />
			<RaisedButton label="Go" type="submit" primary={true} />
			</form>
			</div>
			</div>
			
			<br/>
			<Divider />
			</div>
			);
	};
};

export default ReplicaNumber;