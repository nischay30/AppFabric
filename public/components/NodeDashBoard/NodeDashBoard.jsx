import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';


class NodeDashBoard extends React.Component
{
 render(){
    return(<div>
        <img src="/components/NodeDashBoard/nodedashboard.png" style={{width:'50px', height:'50px',marginTop: '14px',marginLeft: '-370px'}} />
        <h2 style={{fontStyle: 'Roboto'}}>Node Dashboard</h2>

        <Paper  style={{height: '180px', width:480,background:"#E1F5FE"}} zDepth={1} ><h4 style={{padding: '4px',fontStyle: 'Roboto'}}><ActionInfo style={{marginLeft: '30px'}}/>A node is an individual Linux host used to deploy and run your applications.A node cluster is a collection of nodes in the same provider and region of the same type.</h4>
        </Paper>
        <Link to='/nodedashboardpage/nodegridlist'>
        <RaisedButton backgroundColor="#a4c639" label="Bring your own node" style={{marginTop: '10px',fontStyle: 'Roboto'}}><ContentAdd /></RaisedButton>
        </Link><br />
        <CircularProgress />
        </div>
        );    
};
};

export default NodeDashBoard;