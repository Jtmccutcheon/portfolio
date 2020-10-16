import styled from 'styled-components';


const SkillsStyles = styled.main`
	/* body-container */
	margin: 0 auto;
	margin-bottom: 5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 61%;
	/* h2 */
	@media screen and (max-width: 800px) {
		width: 100%;
	}
	.skill-header {
		width: 100%;
		margin: 0;
		padding-top: 5rem;
		padding-bottom: 2.5rem;
	}
	/* card styles */
	.cards {
		width: 15rem;
		border: 1px solid #1c2a35;
		margin: 1rem;
		padding: 1rem;
		border-radius: 14px;
		img {
			align-items: center;
		}
		:hover {
			transition: 1s;
			transform: scale(1.1);
			animation: glowing 2000ms infinite;
			@keyframes glowing {
				0% {
					background-color: #1c2a35;
					box-shadow: 0 0 5px #bf9737;
				}
				50% {
					background-color: #1c2a35;
					box-shadow: 0 0 20px #bf9737;
				}
				100% {
					background-color: #1c2a35;
					box-shadow: 0 0 5px #bf9737;
				}
			}
		}
	}
`;

export default SkillsStyles