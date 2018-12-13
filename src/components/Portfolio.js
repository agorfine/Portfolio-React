import React from 'react';


function Portfolio (props) {
	return(
		<div className = 'background'>
			<div className = 'portfolioInfo'>
				<div className= 'portfolioPageTitle' >PORTFOLIO</div>
				<div className = 'portfolioProject1'>
					<img className = 'projectPic project1' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481447/Screen_Shot_2018-11-17_at_1.56.16_PM.png" alt= "project1"/>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>One Player Battleship | HTML, CSS, JavaScript</div>
						<div className = 'projectInformation'>For my first project, I created a one player Frozen themed Battleship game. Users must click on a square to find the three hidden battleships.</div>
						<div className = 'linkBox'>
							<a className = 'gitLink' href="https://github.com/agorfine/Project1" target="_blank" rel="noopener noreferrer">View my Code </a>
						</div>
					</div>
				</div>
				<div className = 'portfolioProject'>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Disney Trip Adviser  |  React, CSS, JavaScript, API, MapBox</div>
						<div className = 'projectInformation'>For my second project, I created a Disney Trip Adviser. Users can view all of the attractions and dining within each park of Walt Disney World.</div>
						<div className = 'linkBox'>
							<a className = 'gitLink' href="https://github.com/agorfine/Project2" target="_blank" rel="noopener noreferrer">View my Code </a>
						</div>
					</div>
					<img className = 'projectPic project2' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481539/Screen_Shot_2018-11-17_at_1.56.54_PM.png" alt= "project1"/>
				</div>
				<div className = 'portfolioProject'>
					<img className = 'project3' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481614/Screen_Shot_2018-11-17_at_1.57.52_PM.png" alt= "project1"/>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Instagram  |  React, CSS, JavaScript</div>
						<div className = 'projectInformation'>For my third project, I worked with two of my classmates to recreate the Instagram mobile application. Users can create an account, and post photographs or capture photographs directly from their computer. Users are also able to view other users photographs through the newsfeed.</div>
						<div className = 'linkBox'>
							<a className = 'gitLink' href="https://github.com/agorfine/Instagram" target="_blank" rel="noopener noreferrer">View my Code </a>
						</div>
					</div>
				</div>
				<div className = 'portfolioProject'>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Tic-Tac-Toe  |  HTML, CSS, JavaScript</div>
						<div className = 'projectInformation'>For a homework assignment, we were tasked to create a tic-tac-toe game. Users must click on a square to render an X for player 1 and an O for player 2.</div>
						<div className = 'linkBox'>
							<a className = 'gitLink' href="https://github.com/agorfine/tic-tac-toe" target="_blank" rel="noopener noreferrer">View my Code </a>
						</div>
					</div>
					<img className = 'projectPic project4' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1544733270/Screen_Shot_2018-12-13_at_3.34.17_PM.png" alt= "project1"/>
				</div>
				<div className = 'portfolioProject'>
					<img className = 'projectPic project4' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481645/Screen_Shot_2018-11-17_at_1.59.01_PM.png" alt= "project1"/>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Duck Hunt  |  JavaScript</div>
						<div className = 'projectInformation'>For a homework assignment, we were tasked to write the JavaScript logic to make a working Duck Hunt game. Users must click on all of the moving ducks to win the game.</div>
						<div className = 'linkBox'>
							<a className = 'gitLink' href="https://github.com/agorfine/Duck-Hunt" target="_blank" rel="noopener noreferrer">View my Code </a>
						</div>
					</div>
				</div>
				<div className = 'portfolioProject'>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Weather App  |  HTML, CSS, JavaScript, API</div>
						<div className = 'projectInformation'>For a homework assignment, I created a weather website. Users can type in their zipcode and view the current weather. </div>
						<div className = 'linkBox'>
							<a className = 'gitLink' href="https://github.com/agorfine/JavaScript-Weather-App" target="_blank" rel="noopener noreferrer">View my Code </a>
						</div>
					</div>
					<img className = 'projectPic project5' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481182/Screen_Shot_2018-11-17_at_1.59.28_PM.png" alt= "project1"/>
				</div>
			</div>	
		</div>
	)
	
}

export default Portfolio;