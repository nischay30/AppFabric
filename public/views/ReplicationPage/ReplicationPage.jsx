import React,{Component} from 'react';
import ServiceReplicationCluster from '../../components/ServiceReplicationCluster';
import ServiceReplicationInstances from '../../components/ServiceReplicationInstances';
import HomeAppBar from '../../components/HomeAppBar';
import $ from 'jquery';

class ReplicationPage extends React.Component{

	state={
		data:[]
	};

  getData = () => {
    $.ajax({
      url:'http://localhost:3000/data',
      type:'GET',
      datatype:'JSON',
      success: function(data){
        this.setState({data:data});
      }.bind(this)

    });
  }

  componentDidMount = () =>{
  	this.getData();
  }
 	render(){
		return(
				<div>
				<HomeAppBar />
				<ServiceReplicationInstances />
				<ServiceReplicationCluster serviceListData={this.state.data}/>
				</div>
				
			);
	}
};

export default ReplicationPage;