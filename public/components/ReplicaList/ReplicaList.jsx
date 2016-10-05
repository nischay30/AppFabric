import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Logs from '../Logs';

class ReplicaList extends React.Component
{
  state= {expanded:false,open:false,};

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

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

    const style = {
     height: 'auto',
     width: '100%',
     textAlign:'left',
     display: 'inline-block',
   };
  
    return( 
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
     <CardHeader
     title={this.props.mappedData.name}
     actAsExpander={true}
     showExpandableButton={true}
     style={{fontWeight:'bold'}}
     />
     <CardText expandable={true}>
     <List>
     <ListItem key={1} primaryText={"Ip:"+this.props.mappedData.ip} />
     <ListItem key={2} primaryText={"Status:"+this.props.mappedData.status} />
     <ListItem key={3} rightIcon={<FlatButton label="Logs" secondary={true} onTouchTap={this.handleOpen}>
     <Dialog title="Logs" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} ><Logs /></Dialog>
     </FlatButton>} />
     </List>
     </CardText>
     </Card>
     );
 };
};

export default ReplicaList;