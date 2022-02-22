import React from 'react';

const Header = () => {
	return (
		<header id="header" className="headroom">
			<div className="startp-responsive-nav">
				<div className="container">
					<div className="startp-responsive-menu">
						<div className="logo">
							<a 
								style={{ 
									fontWeight: 700,
									color: '#44ce6f',
								}}
								href="/"
							>
								DevAidar
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="startp-nav">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light">
						<a
							className="navbar-brand"
							style={{ 
								fontWeight: 700,
								color: '#44ce6f',
							}}
							href="/"
						>
              DevAidar
						</a>
						<div
							className="collapse navbar-collapse mean-menu"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav nav ml-auto">
								<li className="nav-item">
									<a href="/" className="nav-link active">Home</a>
								</li>
								<li className="nav-item">
									<a href="#about" className="nav-link">About Me</a>
								</li>
								<li className="nav-item">
									<a href="#projects" className="nav-link">Projects</a>
								</li>
								<li className="nav-item">
									<a href="#education" className="nav-link">Education</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
