import React,{Component} from 'react';
import ReplicaList from './ReplicaList.jsx';

class Data extends React.Component
{

 	render(){
 		let content= this.props.serviceListData.map(function(data){
 			return(
 			<ReplicaList key={data.ip} mappedData={data}/> );
 		});
   
 		return(
 		<div>
 		{content}
     	</div>);
 	};
};

export default Data;