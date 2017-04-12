import React from 'react';

// Home page is a page with some pictures and info about Margaret Hamilton
const Home = (props) => {
	return (
		<div className='home'>
			<h1 className='home-title'><strong>Welcome to the Margaret Hamilton</strong></h1>
			<h1 className='home-title'><strong>Interplanetary Academy of JavaScript</strong></h1>

			<div className='margaret-imgs'>
				<img className='margaret-img' src='https://iqglobal.intel.com/iq-content-library/wp-content/uploads/sites/18/2017/03/mh-cropped.jpg' />
				<p className='margaret-info'>Margaret Hamilton was Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program.</p>
				<img className='margaret-img' src='http://www.southfloridamuseum.org/portals/0/Planetarium/MargaretHamilton-andthecodeshewrote.jpg' />
				<p className='margaret-info'>At MIT she assisted in the creation of the core principles in computer programming as she worked with her colleagues in writing code for the world's first portable computer.</p>
				<img className='margaret-img' src='http://pixel.nymag.com/imgs/fashion/daily/2016/11/25/25-margarethamilton.w710.h473.jpg' /> 
				<p className='margaret-info'>On November 22, 2016, she was awared the Presidential Medal of Freedom by U.S. President Barack Obama for her work leading the development of on-board flight software for NASA's Apollo Moon missions.</p> 
			</div>
		</div>
	)
}

export default Home;