import React from 'react';
import { Helmet } from 'react-helmet'; // changes head tag to improve seo
import ReactContactForm from 'react-mail-form';
import AboutStyles from '../styles/AboutStyles';
//images
import dogaroos from '../images/dogaroos.webp';

const About = () => {
	return (
		<AboutStyles>
			<Helmet>
				<title>Justin McCutcheon Portfolio</title>
				<meta charSet='utf-8' />
				<meta
					name='justin mccutcheon portfolio'
					content='portfolio of software developer justin mccutcheon'
				/>
				<link rel='canonical' href='https://justinweb.dev' />
			</Helmet>
			<h2>Welcome to my Portfolio</h2>
			<section className='middle-content'>
				<img src={dogaroos} alt='dogaroos' />
				<div>
					<h3>a little about me...</h3>
					<p>
						I am from Toledo, Ohio and currently employed by Nexient
						as a Software Developer
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
