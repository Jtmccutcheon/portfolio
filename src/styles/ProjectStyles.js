import styled from 'styled-components'

const ProjectStyles = styled.main`
	margin: 0 8rem;
	@media screen and (max-width: 790px) {
		margin: 0;
	}

	h2 {
		margin: 0;
		padding-top: 5rem;
	}
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.card {
		border: 1px solid #1c2a35;
		padding-top: 2%;
		max-width: 500px;
		width: 75%;
		margin: 2.5%;
		border-radius: 2%;
		background-color: #1c2a35;
		box-shadow: 5px 5px 8px #171e24;
		transition-duration: 0.09s;

		.card-content {
			height: 300px;
			.back {
				display: flex;
				flex-direction: column;
				width: 100%;
				p {
					text-align: center;
				}
				.power-statements {
					p {
						text-align: left;
					}
				}
				.sharebutton {
					top: 9rem;
				}
				@media screen and (max-width: 419px) {
					top: 1rem;
				}
			}
			.skills-imgages {
				img {
					/* border-radius: 100%; */
					vertical-align: middle;
					border-radius: 0;
					width: 50px;
					margin: 0.5rem;
				}
			}
		}
		.sharebutton {
			position: absolute;
			background-color: #1c2a35;
			left: 33.75rem;
			border-radius: 50%;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			text-align: center;
			line-height: 10px;
			padding: 20px;
			@media screen and (max-width: 1352px) {
				left: 30.25rem;
			}
			@media screen and (max-width: 599px) {
				left: 30.1rem;
			}
			@media screen and (max-width: 568px) {
				left: 28.5rem;
			}
			@media screen and (max-width: 526px) {
				left: 26.5rem;
			}
			@media screen and (max-width: 500px) {
				left: 25.5rem;
			}
			@media screen and (max-width: 470px) {
				left: 23.5rem;
			}
			@media screen and (max-width: 445px) {
				left: 22.25rem;
			}
			@media screen and (max-width: 419px) {
				left: 1rem;
				top: 1rem;
			}
			&:hover {
				cursor: pointer;
			}
		}
		@media screen and (max-width: 1352px) {
			max-width: 450px;
		}
		@media screen and (max-width: 420px) {
			width: 100%;
		}
		h3 {
			color: lightgray;
		}

		.card-content {
			display: flex;
			align-items: center;
			padding: 2%;
			width: 100%;
			background-color: #171e24;

			p {
				padding: 2%;
				text-align: left;
			}
		}
		img {
			width: 50%;
			border-radius: 50%;
		}
		button {
			margin: 3%;
			color: white;
			background-color: transparent;
			border-radius: 0.25rem;
			padding: 5px 7px;
			border: 2px solid white;
			transition-duration: 0.5s;
			&:hover {
				color: grey;
				border-color: #1f1f1f;
				background-color: white;
				transition-duration: 0.5s;
				cursor: pointer;
				a {
					color: black;
				}
			}
			a {
				color: white;
				&:hover {
					color: black;
				}
			}
		}
	}
`;


export default ProjectStyles