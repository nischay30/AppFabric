import React,{Component} from 'react';

import HomeAppBar from '../../components/HomeAppBar';
import HelloButton from '../../components/HelloButton';

class HomePage extends React.Component{

	render(){
		return(<div>
				<HomeAppBar />
				<div className='row center-xs'>
				<HelloButton />
				</div>
				</div>
			);
	}
};

export default HomePage;