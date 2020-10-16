import React from 'react';
import ReactContactForm from 'react-mail-form';
import AboutStyles from '../styles/AboutStyles'
//images
import dogaroos from '../images/dogaroos.webp';

const About = () => {
	return (
		<AboutStyles>
			<h2>Welcome to my Portfolio</h2>
			<section className='middle-content'>
				<img src={dogaroos} alt='dogaroos' />
				<div>
					<h3>a little about me...</h3>
					<p>
						I am from Toledo, Ohio and finding Lambda school sparked
						the biggest change in my life for the better. In Toledo
						the job market is basically restaurants or
						manufacturing.
					</p>
					<p>
						Lambda School is where I acquired the skills and
						confidence to work towards a better future. Over their 9
						month bootcamp, I spent well over 40 hours a week fully
						immersed in learning, reading, and developing web
						applications.
					</p>
					<p>
						When I'm not working on improving my skills you can
						catch me playing video games, hanging out with my dogs,
						and having a good fun time.
					</p>
				</div>
			</section>
			<section className='bottom-form'>
				<h3 className='bottom-title'>
					Contact me with job offers, questions, comments, feedback,
					trolls, etc...
				</h3>
				<ReactContactForm
					className='form-start'
					to='jt.mccutcheon@live.com'
					titlePlaceholder='subject'
					contentsPlaceholder='your message'
				/>
			</section>
		</AboutStyles>
	);
};



export default About;
