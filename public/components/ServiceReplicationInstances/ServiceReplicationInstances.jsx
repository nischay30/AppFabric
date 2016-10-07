import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider'; 
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

class ServiceReplicationInstances extends React.Component
{
	render(){

		return(<div  >

			<h2>ServiceName</h2>

			
			<h3 style={{marginTop:'35px'}}>Current Instances:</h3>
			
			<div style={{marginBottom:'20px'}}>
			<form>
			<TextField floatingLabelText="Replicas required" required 
			type='number' min={1} max={20} style={{width:'80%'}}/>
			<RaisedButton label="Go" type="submit" primary={true} />
			</form>
			</div>
			
			<br/>

			<Divider />
</div>
			);
	};
};

export default ServiceReplicationInstances;