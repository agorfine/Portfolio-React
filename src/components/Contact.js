import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import * as emailjs from 'emailjs-com';

class Contact extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		fireEmailSent: false
	}

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	handleInputChange(e){
	    const name = e.target.name
	    const value = e.target.value
	    this.setState(prevState => ({
	       [name]: value
	    }))
  	}

  	handleClick(e) {
  		e.stopPropagation()
  		console.log('inside click')

  		let template_params = {
		   "reply_to": `${this.state.email}`,
		   "from_name": `${this.state.firstName} ${this.state.lastName} ${this.state.email}`,
		   "to_name": `Amanda`,
		   "message_html": `${this.state.message}`
		}

		let service_id = "default_service";
		let template_id = "template_3YPduXZv";
		let userID= "user_zE1UrerM0adcYyjQMV3Tg"
		
		emailjs.send(service_id,template_id,template_params, userID)
		.then(response => {
	       console.log('SUCCESS!', response.status, response.text);
	       if (response.status === 200) {
		       	this.setState(prevState=>({
		        fireEmailSent: true,
		      }))
		   }
	    }, function(error) {
	       console.log('FAILED...', error);
	    });
  	}


	render () {

		return(
			<div className = 'background'>
				<div className = 'portfolioInfo'>
					<div className= 'portfolioPageTitle' >CONTACT ME</div>
				
					<div className= 'contactInfo'>Thank you for taking the time to reach out.</div>
					<div className= 'contactInfo2'>How may I help you today?</div>
					<form className='form'>
						<div className='formTop'>
							<div className='contactBox'>
							<div className='formTitle'>First Name</div>
							<input
								className='input'
								type='text'
								placeholder=''
								name='firstName'
								required
								value={this.state.firstName}
								onChange={(e) => this.handleInputChange(e)}
							/>
							</div>
							<div className='contactBox'>
							<div className='formTitle'>Last Name</div>
							<input
								className='input'
								type='text'
								placeholder=''
								name='lastName'
								required
								value={this.state.lastName}
								onChange={(e) => this.handleInputChange(e)}
							/>
							</div>
							<div className='contactBox'>
							<div className='formTitle'>Email</div>
							<input
								className='input'
								type='text'
								placeholder=''
								name='email'
								required
								value={this.state.email}
								onChange={(e) => this.handleInputChange(e)}
							/>
							</div>
						</div>
						<div className='contactBox'>
						<div className='formTitleMessage'>Message</div>
						<textarea
							className='inputMessage'
							name='message'
							required
							value={this.state.message}
							onChange={(e) => this.handleInputChange(e)}
						/>
						</div>
					</form>
					<div className='submitBox'>
						<input className='sendButton' type="submit" value="SEND" onClick = {(e) => this.handleClick(e)}/>
						{this.state.fireEmailSent
				          ?
				          <div className= 'fullBackground'>
				            <div className= 'customAlert'>
				                 <span><p className='sent'> Email Sent Successfully!</p></span>
				                  <Link to='/' className ='thankYou' onClick = 'window.location.reload()'> Thank You </Link>
				             </div>
				           </div>
				          : ''}
					</div>
				</div>	
			</div>	
		)
	}
	
}

export default Contact;



// if (this.state.firstName === '' && this.state.lastName === '' && this.state.email === '' && this.state.message === '') {
// 			return(
// 				<div className= 'fullBackground'>
// 	            	<div className= 'customAlert'>
// 	                 	<span><p className='sent'> All Fields Required</p></span>
// 	                 	<Link to='/' className ='thankYou' onClick = 'window.location.reload()'> Thank You </Link>
// 	             	</div>
// 	           </div>
//            )
// 		} else {
// 			emailjs.send(service_id,template_id,template_params, userID)
// 			.then(response => {
// 		       console.log('SUCCESS!', response.status, response.text);
// 		       if (response.status === 200) {
// 			       	this.setState(prevState=>({
// 			        fireEmailSent: true,
// 			      }))
// 			   }
// 		    }, function(error) {
// 		       console.log('FAILED...', error);
// 		    });
// 		}