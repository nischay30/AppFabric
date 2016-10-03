import React,{Component} from 'react';

import HomeAppBar from '../../components/homeAppBar';
import HelloButton from '../../components/helloButton';

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