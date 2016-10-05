import React,{Component} from 'react';
import Data from '../../components/ReplicaList/Data.jsx';
import ReplicaNumber from '../../components/ReplicaNumber';
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
				<ReplicaNumber />
				<Data serviceListData={this.state.data}/>
				</div>
				
			);
	}
};

export default ReplicationPage;