import React,{Component} from 'react';
import {Link} from 'react-router';
import ActionHome from 'material-ui/svg-icons/action/home';
import {GridList} from 'material-ui/GridList';

import NodeGridTile from '../NodeGridTile';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},

	gridList: {
		width: 400,
		height: 200,
		marginBottom: 24,
	},
};

class NodesGridList extends React.Component{
	render(){
		let content= this.props.serviceListData.map(function(data,index){
			return(
				<NodeGridTile key={index} tile={data}/> );
		});
		return(
			<div>
			<Link to='/'>
			<ActionHome style={{width: '100px',height: '40px'}}/>

			</Link>
			<GridList
			cellHeight={400}
			style={styles.gridList}>

			{content}
			</GridList>
			</div>);

	};
};
export default NodesGridList;
