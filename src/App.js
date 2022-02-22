import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Intro />
			<AboutMe />
			<Projects />
			<Education />
			<Footer />
			<div class="go-top">
				<svg 
					xmlns="http://www.w3.org/2000/svg"
					width="24" 
					height="24" 
					viewBox="0 0 24 24"
					fill="currentColor" 
				>
					<path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
				</svg>
			</div>
		</>
	);
};

export default App;
