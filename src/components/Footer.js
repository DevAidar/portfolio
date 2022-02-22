import React from 'react';

const Footer = () => {
	return (
		<footer class="footer-area bg-f7fafd">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="single-footer-widget">
							<div class="logo">
								<a
									href="/"
									style={{
										fontWeight: 700,
										color: '#44ce6f', 
										fontSize: '3rem',
									}}
								>
									DevAidar
								</a>
							</div>
							<p>Fullstack Web Developer</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6">
						<div class="single-footer-widget pl-5">
							<h3>Links</h3>
							<ul class="list">
								<li><a href="#about">About Me</a></li>
								<li><a href="#projects">Projects</a></li>
								<li><a href="#education">Education</a></li>
							</ul>
						</div>
					</div>

					<div class="col-lg-6 col-md-6 col-sm-6">
						<div class="single-footer-widget">
							<h3>Address</h3>
							<ul class="footer-contact-info">
								<li>
									<svg 
										xmlns="http://www.w3.org/2000/svg"
										width="24" 
										height="24" 
										viewBox="0 0 24 24"
										fill="currentColor" 
									>
										<path d='M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/>
									</svg>
									{ 'Mission Viejo, CA 92692' }
								</li>
								<li>
									<svg 
										xmlns="http://www.w3.org/2000/svg"
										width="24" 
										height="24" 
										viewBox="0 0 24 24"
										fill="currentColor" 
									>
										<path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z'/>
									</svg>
                  
									{ 'Email: ' }
									<a 
										href="mailto:contact@devaidar.com"
										className='pr-2'
									> 
										{ 'contact@devaidar.com' }
									</a>
								</li>
								<li>
									<svg 
										xmlns="http://www.w3.org/2000/svg"
										width="24" 
										height="24" 
										viewBox="0 0 24 24"
										fill="currentColor" 
									>
										<path d='M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z'/>
									</svg>
                  
									{ 'Phone: ' }
									<a href="tel: +1 (949) 339-7462 "> 
										{ '+1 (949) 339-7462 ' }
									</a>
								</li>
							</ul>
							<div 
								style={{
									display: 'flex',
									gap: '1em',
								}}
							>
								<a
									href="https://github.com/devaidar"
									class="github"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg 
										xmlns="http://www.w3.org/2000/svg"
										width="32" 
										height="32" 
										viewBox="0 0 24 24"
										fill="currentColor" 
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
								<a
									href="https://www.linkedin.com/in/aydar-nuriev/"
									class="linkedin"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg 
										xmlns="http://www.w3.org/2000/svg" 
										width="32" 
										height="32" 
										viewBox="0 0 24 24"
										fill="currentColor" 
									>
										<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="col-lg-12 col-md-12">
						<div class="copyright-area">
							<p>Copyright @2022 - DevAidar</p>
						</div>
					</div>
				</div>
			</div>
			<img src="assets/img/map.png" class="map" alt="map" />
			<div class="shape1"><img src="assets/img/shape1.png" alt="shape" /></div>
			<div class="shape8 rotateme">
				<img src="assets/img/shape2.svg" alt="shape" />
			</div>
		</footer>
	);
};

export default Footer;