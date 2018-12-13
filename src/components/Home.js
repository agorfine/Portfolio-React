import React from 'react';


function Home(props) {
	return(
		<div>
			<div className= 'home'>
				<div className = "intro">Hi! My name is Amanda Gorfine, and I am a</div>
				<div className = "jobTitle">Front-End Web Developer</div>
				<div className = 'heroImage'></div>
			{/*https://aaww.org/wp-content/uploads/2017/04/wallup-23584.jpg?w=640*/}
			</div>
			<div className = 'space'>
			<div className = 'lavender'></div>
				<div className = 'portfolio'>
					<div className= 'portfolioTitle'>PORTFOLIO</div>
					<div className = 'grid'>
						<div className= 'projectContainer'>	
							<a className = 'project project1' href="https://pages.git.generalassemb.ly/agorfine/Project1_Battleship/" target="_blank" rel="noopener noreferrer">
								<div className = 'projectTitle'>One Player Battleship</div> 
							</a>
							<div className='projectTitleShown'>One Player Battleship</div>
						</div>
						<div  className='projectContainer'>
							<a className = 'project project2' href="http://disney-trip.surge.sh/" target="_blank" rel="noopener noreferrer">
								<div className = 'projectTitle'>Disney Trip Adviser</div>
							</a>
							<div className='projectTitleShown'>Disney Trip Adviser</div>
						</div>	
						<div className= 'projectContainer'>
							<a className = 'project project3Home' href="https://agorfine.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">
								<div className = 'projectTitle'>Instagram</div>
							</a>
							<div className='projectTitleShown'>Tic-Tac-Toe</div>
						</div>
						<div className='projectContainer'>
							<a className = 'project project4' href="https://agorfine.github.io/Duck-Hunt/" target="_blank" rel="noopener noreferrer">
								<div className = 'projectTitle'>Duck Hunt</div>
							</a>
							<div className='projectTitleShown'>Duck Hunt</div>
						</div>
						<div className='projectContainer'>
							<a className = 'project project5' href="https://agorfine.github.io/JavaScript-Weather-App/" target="_blank" rel="noopener noreferrer">
								<div className = 'projectTitle'>Weather App</div>
							</a>
							<div className='projectTitleShown'>Weather App</div>
						</div>
					</div>
				</div>
				<div className = 'skills'>
					<div className= 'skillsTitle'>SKILLS</div>
					<div className = 'grid'>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599360/icons8-source-code-128.png" alt=""/>
							<div className= "skillsIconTitle">HTML</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599562/icons8-css-100.png" alt=""/>
							<div className= "skillsIconTitle">CSS</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599480/icons8-javascript-100.png" alt=""/>
							<div className= "skillsIconTitle">JavaScript</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599673/icons8-react-native-100.png" alt=""/>
							<div className= "skillsIconTitle">React</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599657/icons8-react-native-filled-100.png" alt=""/>
							<div className= "skillsIconTitle">React Native</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599335/icons8-database-administrator-100.png" alt=""/>
							<div className= "skillsIconTitle">Express</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599530/icons8-postgresql-100.png" alt=""/>
							<div className= "skillsIconTitle">PostgreSQL</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599688/icons8-api-100.png" alt=""/>
							<div className= "skillsIconTitle">API</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599679/icons8-json-100.png" alt=""/>
							<div className= "skillsIconTitle">JSON</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599123/icons8-add-node-100.png" alt=""/>
							<div className= "skillsIconTitle">Node.js</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599979/icons8-git-100.png" alt=""/>
							<div className= "skillsIconTitle">Git</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599403/icons8-github-100.png" alt=""/>
							<div className= "skillsIconTitle">GitHub</div>
						</div>
						<div className= 'skill'>
							<img className= "icon" src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542599298/icons8-blueprint-100.png" alt=""/>
							<div className= "skillsIconTitle">Wireframing</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	)
	
}

export default Home;