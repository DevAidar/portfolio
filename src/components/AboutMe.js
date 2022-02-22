import React from 'react';

import { aboutMe } from '../portfolio';

const AboutMe = () => {
	return (
		<div class="services-details-area ptb-80" id="about">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 services-details-image">
						<lottie-player
							src="https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json"
							background="transparent"
							speed="1"
							style={{
								width: 'auto',
								height: 'auto',
							}}
							loop
							autoplay
						></lottie-player>
					</div>
					<div class="col-lg-6 col-md-12 services-content">
						<div class="section-title">
							<h2>About Me</h2>
							<div class="bar"></div>
							<p>{ aboutMe.description }</p>
						</div>
						<div class="row">
							{ aboutMe.skills.map(skill => (
								<div class="col-lg-6 col-md-6 col-sm-6">
									<div class="box">
										<svg 
											xmlns="http://www.w3.org/2000/svg"
											className='mr-2'
											width="24" 
											height="24" 
											viewBox="0 0 24 24"
											fill="currentColor" 
										>
											<path d={skill.icon}/>
										</svg>
										{ skill.text }
									</div>
								</div>
							)) }
						</div>
					</div>
				</div>
				<div class="separate"></div>
			</div>
		</div>
	);
};

export default AboutMe;