import React,{Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {blue300,indigo900,orange200,deepOrange300,pink400,white000,purple500,cyan500,green300} from 'material-ui/styles/colors';
import {Link} from 'react-router';


var colour=[blue300,indigo900,orange200,deepOrange300,pink400,green300,purple500,cyan500];
var i=0;
class ServiceCard extends React.Component
{

  render(){
    i++;
    if(i==8)
      i=0;
    const style={
      height:100,
      width:250,
      marginLeft:7,
      marginTop:80,
      paddingTop:50,
      display:'block-inline'
    }
    return(
      <Link to='/replicationpage' style={{textDecoration:'none'}}>
      
      <Avatar

      color={white000}
      backgroundColor={colour[i]}
      size={70}
      style={style}
      >
      {this.props.value.name} 
      </Avatar>
      </Link>
      );
  }
}

export default ServiceCard;