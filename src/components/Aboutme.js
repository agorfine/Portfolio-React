import React, { Component }  from 'react';
import Map from './Map.js';
import ReactMapGL from 'react-map-gl';

class Aboutme extends Component {

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render () {
		const viewport= {
		   width: 600,
		   height: 400,
		   latitude: 40.7484,
		   longitude: -73.9857,
		   zoom: 11
		}

		const viewportMobile= {
		   width: 300,
		   height: 200,
		   latitude: 40.7484,
		   longitude: -73.9857,
		   zoom: 10
		} 

		return(
			<div className = 'background'>
				<div className = 'portfolioInfo'>
					<div className= 'portfolioPageTitle' >ABOUT ME</div>
					<div className = 'aboutmeContainer'>
						<img className= "picMe" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1541696663/fullsizeoutput_2537.jpg" alt="AmandaGorfine"/>
						<div className= 'aboutmeText'>
							<div className='aboutMeTitle'>A Little About Me . . .</div>
							<div className = 'aboutmeInfo'>I am a resourceful, passionate, and effervescent Front-End Web Developer with five years experience in the Hospitality Industry. I integrate customer service with clean code to create visually appealing user-friendly websites and mobile applications. I focus on mobile responsive designs to make every website available in a smartphone driven world.</div>
							<br></br>
							<div className='aboutMeTitle'>My Hobbies Include . . .</div>
							<div className = 'aboutmeInfo'>I enjoy exercising, spending time with friends & family, photography, and coding!</div>
						</div>
					</div>
					
				</div>	
			</div>	
		)
	}
	
}

export default Aboutme;



