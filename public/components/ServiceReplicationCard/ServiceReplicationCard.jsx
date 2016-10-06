import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import {Card, CardHeader, CardText,CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import Logs from '../Logs';

class ServiceReplicationCard extends React.Component
{
 state= {open:false,};

 handleClose = () => {
   this.setState({open:false,expanded:false});
 };

 handleOpen = () => {
   this.setState({open:true});
 };


 render(){
  const actions=[
  <RaisedButton label="close" secondary={true} onTouchTap={this.handleClose} />
  ];

  return(
   <Card expanded={true} style={{marginLeft:'10px',marginTop:15,width:300}}>
    <CardHeader
    title={this.props.mappedData.name}
    titleStyle={{fontSize:'24px'}}
    avatar={<Badge badgeContent={10} primary={true} badgeStyle={{right: 10}}/>}
    style={{fontWeight:'bold',background:'lightGrey',padding:5,margin:10}}
    />
    <CardText expandable={true}>
    <List>
    <ListItem key={1} primaryText={"Ip:"+this.props.mappedData.ip} />
    <ListItem key={2} primaryText={"Status:"+this.props.mappedData.status} />
    </List>
    <Divider />
    </CardText>
    <CardActions style={{float:'right'}}>
    <FlatButton label="Logs" secondary={true} onTouchTap={this.handleOpen}>
    <Dialog title="Logs" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} ><Logs /></Dialog>
    </FlatButton>} />
    </CardActions>
    </Card>
    );
};
};

export default ServiceReplicationCard;